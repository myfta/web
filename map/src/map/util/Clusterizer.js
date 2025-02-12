import L from 'leaflet';

export const EXPLORE_BIG_ICON_SIZE = 36;

// Cluster markers based on zoom and coordinates
export function clusterMarkers({
    places,
    zoom,
    latitude,
    iconSize = EXPLORE_BIG_ICON_SIZE,
    secondaryIconSize = 10,
    isPoi = false,
}) {
    const maxMainPlaces = isPoi ? 2000 : 50;
    const maxSecondaryPlaces = zoom > 10 ? 200 : 900;
    const useUniformMarkerPlacement = isPoi ?? (zoom <= 10 || zoom >= 16);

    const shift = 1; // Adjust shift as needed for your specific case
    const clustered = {};

    // Function to convert pixels to meters
    const metersPerPixel = (latitude, zoomLevel) => {
        const earthCircumference = 40075017; // In meters
        return (earthCircumference * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoomLevel + 8);
    };

    // Minimum distances between markers in meters
    const mainMinDistance = isPoi ? iconSize / 5 : iconSize * metersPerPixel(latitude, zoom) * 1.5;
    const secondaryMinDistance = secondaryIconSize * metersPerPixel(latitude, zoom) * 1.5;

    for (const place of places) {
        if (!place) {
            continue;
        }
        const [lng, lat] = place.geometry.coordinates;
        const x31 = Math.floor(((lng + 180) / 360) * (1 << 31));
        const y31 = Math.floor(
            ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
                (1 << 31)
        );
        const key = ((x31 >> (31 - (zoom + shift))) & 0xffff) | (((y31 >> (31 - (zoom + shift))) & 0xffff) << 16);

        if (!clustered[key]) {
            clustered[key] = [];
        }
        clustered[key].push(place);
    }

    // Sort clusters by size
    const clusters = Object.values(clustered);

    // Function to check if a place can be added without overlapping
    const canPlaceMarker = (place, existingPlaces, minDistance) => {
        const latlng = L.latLng(place.geometry.coordinates[1], place.geometry.coordinates[0]);
        return existingPlaces.every((existingPlace) => {
            const existingLatLng = L.latLng(
                existingPlace.geometry.coordinates[1],
                existingPlace.geometry.coordinates[0]
            );
            return latlng.distanceTo(existingLatLng) >= minDistance;
        });
    };

    const mainMarkers = [];
    const secondaryMarkers = [];

    if (useUniformMarkerPlacement) {
        const firstItemsSorted = clusters.map((cluster) => cluster[0]).sort((a, b) => a.index - b.index);
        // Add first items to main markers for better visibility
        firstItemsSorted.forEach((item) => {
            if (canPlaceMarker(item, mainMarkers, mainMinDistance)) {
                mainMarkers.push(item);
            }
        });
    }

    //Add other markers
    for (const cluster of clusters) {
        for (const place of cluster) {
            if (mainMarkers.includes(place)) {
                continue;
            }
            if (place.index < maxMainPlaces && canPlaceMarker(place, mainMarkers, mainMinDistance)) {
                mainMarkers.push(place);
            } else if (canPlaceMarker(place, [...mainMarkers, ...secondaryMarkers], secondaryMinDistance)) {
                secondaryMarkers.push(place);
            }
        }
    }

    return {
        mainMarkers: mainMarkers.slice(0, maxMainPlaces),
        secondaryMarkers: secondaryMarkers.slice(0, maxSecondaryPlaces),
    };
}

export function createSecondaryMarker(obj) {
    if (!obj.geometry || !obj.properties) {
        return null;
    }
    const latlng = L.latLng(obj.geometry.coordinates[1], obj.geometry.coordinates[0]);
    return L.circleMarker(latlng, {
        ...obj.properties,
        id: obj.properties.id,
        fillOpacity: 0.9,
        radius: 5,
        color: '#ffffff',
        fillColor: '#fe8800',
        weight: 1,
        zIndex: 1000,
    });
}
