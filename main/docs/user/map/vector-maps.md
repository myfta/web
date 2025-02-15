---
sidebar_position: 5
title:  Vector Maps (Map Styles)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';

<InfoIncompleteArticle/>

## Overview

Vector maps are intended to be used as the default map data source for OsmAnd, so **you need to download them to your device**. Vector maps support a huge range of map styles for different activities like cycling, hiking, riding by car or snowmobile, and other.  

Each map style can be customized to highlight or hide specific objects, as well as switch day and night mode. Map vector data could be augmented by vector data and displayed with default Map style, such as *Contour line* information. You can *create your own OsmAnd map style* to demonstrate the required information.


## Use cases

Customizable map styles are one of the main advantages of OsmAnd. You can customize the map display to suit yourself and your hobbies, adjust the display or hiding of certain map objects, the sizes and colors of these objects, and change the scale of the display of certain objects.


## Default Map Styles  

OsmAnd offers you many map styles and data layers that fit by default. Let's take a look at the main ones for day and night modes.  

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

OsmAnd style is the default style of map rendering, general-purpose style. It offers details about the city such as streets, buildings, transport stops, etc. Simplified rendering to have cleaner maps in the populated cities. Key features: routes, surface quality, access restrictions, road shields, paths rendering according to SAC scale, whitewater sports features, topography features like contour lines.


### Touring View

![Touring view map style](@site/static/img/map/map-style-touring.png)

Touring style with high contrast and maximum detail. Includes all the options of the default OsmAnd style while displaying as much detail as possible, in particular roads, paths, and other ways of traveling. Clear distinction of road types in a *touring atlas*. Suitable for day, night, and outdoor use.

### UniRS and LightRS

<Translate android="true" ids="unirs_render_descr"/>

UniRS and LightRS styles are author styles that render the basic map information but in different colour schemes.

- **UniRS style**. <Translate android="true" ids="unirs_render_descr"/>

![UniRS map style](@site/static/img/map/map-style-unirs.png)

- **LightRS style**. <Translate android="true" ids="light_rs_render_descr"/>

![LightRS map style](@site/static/img/map/map-style-lightrs.png)

### Nautical

For nautical navigation. Features buoys, lighthouses, riverways, sea lanes and marks, harbors, seamark services, and depth contours. Read more about [Nautical maps](../plugins/nautical-charts.md).

![Nautical map style](@site/static/img/map/map-style-nautical.png)

### Winter and Ski

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

For skiing sports. Describes the pistes, elevators, cross-country trails, and obscures secondary map objects. **Winter and ski style** is designed to help you with winter sports navigation: you can see the ski slopes and other details such as the difficulty of the slopes and elevator markers. Key features: the convenient display of slopes, elevators, and other skiing features. Less of the distracting secondary objects of the map. Read more about [Ski maps](../plugins/ski-maps.md).

### Topo

![Topo map style](@site/static/img/map/map-style-topo.png)

For hiking, trekking, and nature cycling. Readable outdoors. Contrasting roads and natural objects, different route types, advanced contour line options, extra details. Adjusting *Surface integrity* distinguishes road quality.

### OSM-carto

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

This style simulates default web [OpenStreetMap style](https://www.openstreetmap.org/). Web source code is available at [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd code at [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desert

![Desert map style](@site/static/img/map/map-style-desert.png)

<Translate android="true" ids="desert_render_descr"/>

### Offroad

![Offroad map style](@site/static/img/map/map-style-offroad.png)

<Translate android="true" ids="off_road_render_descr"/>

### Snowmobile

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

<Translate android="true" ids="snowmobile_render_descr"/>


## Map Legend

Map legend is a visual explanation of the symbols used on the map. It typically includes a sample of each symbol (point, line, or area), and a short description of what the symbol means. For example, a short segment of a blue sinuous line may be labeled 'rivers'.
Map legend of OsmAnd maps you can find [here](../map-legend/index.md).


## Map Fonts (Android)

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

Download map fonts for simplified/traditional Chinese, Japanese, and Korean maps.  

When writing local names in simplified/traditional Chinese, Japanese, and Korean ([Map language](../map/vector-maps#map-language)), incorrect hieroglyphs or even squares may appear. This happens when the device does not support the required fonts.  

Some issues with these incorrect fonts are described on our GitHub page: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862). To solve this problem, the Android version of OsmAnd has the option to download the required fonts.


## * Contour Lines

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>  

![Contour lines map style](@site/static/img/map/contour_lines.png)  

Contour lines are represented as vector maps that are displayed as elevation lines. You need to enable the [Topography plugin](../plugins/contour-lines.md), download the data for your region and configure the display. Feature is not enabled by default and needs to be [purchased first](../purchases/index.md).

Contour lines are available for all map styles and modes and could be configured via the [Contour lines menu](../plugins/contour-lines.md#contour-lines-map). More information [here](../plugins/contour-lines.md).


## * Nautical Depth

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>  

Nautical depth contour lines allow you to define areas of equal depth. They are designed to visualize changes in topography below the water surface. Nautical depth is available for all map styles and modes and can be adjusted whether or not the Nautical map view plugin is enabled.  

More information about [Nautical map view here](../plugins/nautical-charts).


## Show Borders

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*  

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*  

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>  

This feature gives you the ability to switch on or off the display of the vector layer of previously downloaded maps from the list of available ones. Its general purpose is to hide areas and borders of downloaded maps when viewing the main map, especially if you have a lot of them.  

The borders of the downloaded maps start displaying at zoom level 7 and are no longer displayed at zoom level 3.

:::tip
Downloaded maps are displayed in *Green* in the Android and iOS versions of OsmAnd when the *Show borders of downloaded maps* feature is switched on. Archived maps in the Android system and those maps that can be updated in iOS are displayed in *Orange*.  
:::


## Configure Map Style

### Map Mode

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_ios.png)

</TabItem>

</Tabs>

The map is displayed in light or dark theme according to the mode selected from the list of suggested ones. By default and for all new users, the [map style](#default-map-styles) corresponds to the theme selected in the system settings of your device.

| | |
|:------------|:------------|
| **<Translate android="true" ids="daynight_mode_day"/>** | <Translate android="true" ids="daynight_mode_day_summary"/> |
| **<Translate android="true" ids="daynight_mode_night"/>** | <Translate android="true" ids="daynight_mode_night_summary"/> |
| **Sunrise / Sunset** | <Translate android="true" ids="daynight_mode_sunrise_sunset_summary"/> Both times for your region are shown in the description.  |
| **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android only*) | Uses the device's light sensor to switch between light and dark themes based on ambient light levels. |
| **<Translate android="true" ids="daynight_mode_app_theme"/>** (*Android only*) | The map display matches the overall theme of the app. Day mode for light theme and night mode for dark theme. |


### Details  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,nautical_depth"/>*  

</TabItem>

</Tabs>  

|Parameters and Description|
|------------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Showing polygons, trails, points, signs at low zooms on the map. It means you can see more details on your map at low zooms. *Note*: rendering on your device may be not fast.|
|![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Showing type of surface of roads. Colour of the road helps you to understand what is the surface of the road is: asphalt, grass or sand etc. Look at [Map legend](../map-legend/index.md).|
|![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map legend](../map-legend/index.md) to determine the smoothness of your road.|
|![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Showing access of roads: private or permissive, or only for emergency, or maybe toll road. Look at [Map legend](../map-legend/index.md) to find your road access. |
|![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Showing green board and labels "LEZ" for [Low Emission Zones](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) in cities. A [Low-Emission Zone (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) is a geographically defined area which seeks to restrict or deter access by certain polluting vehicles with the aim of improving the air quality. It will help you not receive penalties in the green city center.|
|![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Coloring buildings and places have special colours for each category: regular buildings, industrial, commercial, etc. Look at [Map legend](../map-legend/index.md) to find your colour for the building. |
|![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Showing street lighting on the map. On the map, you can see illuminated and not illuminated streets, underground illuminated ways and temporarily illuminated streets. Look at [Map legend](../map-legend/index.md).|
|![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Special setting for mappers. Showed refs, remarks, comments on the map from other mappers. |
|![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Showing nautical depth contours on seas. You need to have a [nautical plugin](../plugins/nautical-charts) and download Nautical maps.|
|![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). A nature reserve is a protected area of importance for wildlife, flora, fauna or features of geological or other special interest.|
|![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  


### Routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)  ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

A route is a path that is predetermined and needs to be followed to reach a specific destination. A route can be optimized for different types of travel, such as cycling, hiking, running, public transport, and others. You can read more about routes and their types in the [Routes article](../map/routes.md).


### Transport

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

When navigating through cities, you need a more contrasting view of public transportation and stops. You can tap on a public transportation stop and select one of the routes or stops from the list. Train routes are also displayed in this setting.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Showing public transport stops.  
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Showing bus, trolleybus, shuttle routes.  
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Showing tram and train routes.  
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Showing underground routes.  
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)

### Hide

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Sometimes we need to hide objects on the map for better vision. For example to hide water while using the [Underlay layer of Satellite online maps](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer).  

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Hide regional boundaries inside of countries, but state boundaries are visible.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Hide all polygons of natural objects, special function for [Underlay/Overlay layer](../map/raster-maps.md#change-layer-parameters-transparency).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Hide all polygons of buildings.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Hide all polygons of water (seas, lakes, reservoirs etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Hide house numbers on the map.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Hide proposed objects, those objects which are planned for a building, but only have a project (projected roads, crossroads, buildings etc).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Hide POI icons from the map. But labels of these POI will be on the map.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Hide POI labels from the map. But icons of these POI will be on the map.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing maps on cities from non useful objects.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Hide all overground objects. Special for seeing only underground objects like tunnels, passes, etc.

### Road style

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Special settings for roads, where you can change the colors to match the road atlas or add high-contrast roads or bold outlines for roads.

|Parameters and Description|
|------------|
|**<Translate android="true" ids="rendering_value_default_name"/>**. Default style for highways. Look at [Map legend](../map-legend/index.md).|
|![Map road style default](@site/static/img/map/map-road-style-default.png)|
|**<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Style of German road atlas.|
|![Map road style german](@site/static/img/map/map-road-style-german.png)|
|**<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Style of American road atlas.|
|![Map road style american](@site/static/img/map/map-road-style-american.png)|
|**<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. The high contrast of roads.|
|![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)|
|**Pale**. Less contrasting colors of roads.|
|![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)|
|**<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Bold outline for roads.|
|![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)|


### Text Size

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)

### Map Magnifier

This setting helps to change the magnifier of the map. It is applicable for raster & vector maps. For raster maps it applies a magnifying effect, so text labels look bigger or smaller. For vector maps it provides a more or less detailed map, if you put it to a low value it will produce a noisy / slow map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

You can choose this setting by long-tap to "+" or "-" button on the screen or:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

You can choose this setting by long-tap to "+" or "-" button on the screen or:  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

- **75%**  
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)

### Map Language

The Map language option is used to configure the spelling of names on the OsmAnd map for zoom levels 7-20, inclusive. For zoom levels 2-6, the names are displayed in the language set for OsmAnd in the system settings menu (see *[Display language](../personal/global-settings.md#display-language)* article).  

If the names on the map are not translated into the desired language by the OSM community, you can use [transliterated names](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) or *<Translate ios="true" ids="translit_names"/>* (iOS) switcher.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>  

- **Local names**  
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Ukranian names**  
    ![Map language ukranian](@site/static/img/map/map-language-urkanian_2.png)

- **Show local names**  
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterate names**  
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


## Custom Map Style

If you have personal or 3rd party custom map style created according to [Specification](../../technical/osmand-file-formats/osmand-rendering-style.md), you can install it on your device in the following ways:

- Copy the *.render.xml* file to the devices and open it with OsmAnd.
- Rendering styles can be exported and imported using [Standard import / export dialogs](../personal/import-export.md). So if you create an example *.osf* package, it will work as a plugin that you can share with other people.
- You can then choose a map style from the menu.


## Related Articles

- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in August 2024*
