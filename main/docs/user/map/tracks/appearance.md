---
sidebar_position: 5
title:  Track Appearance
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

## Overview

Track Appearance is a customizable option in the OsmAnd app that allows you to personalize the visual display of tracks on the map. This feature makes it easier to distinguish between different tracks and understand their characteristics.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Track menu options Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu iOS](@site/static/img/map/track_appearence_1_ios.png) ![Configure color iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Setup

:::tip note
Some settings you can use only with *OsmAnd Pro* or *Maps+*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> and <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Free and Paid features.
:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:

- Go to the *My Places* menu and tap any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../../map/tracks/track-context-menu.md#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../../plugins/trip-recording.md#сurrent-track-recording).  
- Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* for the tracks you have selected to be displayed on the map.


### Split Interval

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

Select the interval at which distance or time stamps are displayed on the track.  

### Direction Arrows

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)

Select the interval at which distance or time stamps are displayed on the track.  

### Show Start and Finish Icons

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Allows you to select whether or not to show the start and end icons of track segments.  

### Color

![Appearance](@site/static/img/map/appearance_color_andr.png)

Allows to display the track line in any color and transparency, or select coloring according to the map legend. If necessary data on the track sections are missing, such sections are displayed in gray color.

- *<Translate ios="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. If *Speed* and *Altitude* are not active, it means that the track does not contain this data.  

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- *<Translate android="true" ids="shared_string_color"/>: ([Maps+ / Pro feature](../../purchases/index.md))* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the [*Map screen during navigation*](../../navigation/guidance/map-during-navigation.md#color) page, specifically in the [Route line appearance](../../navigation/guidance/map-during-navigation.md#route-line-appearance) section.  


### Width

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

You can customize the appearance of the track in several menus of the application:

- [*Track → Appearance*](../../personal/tracks/manage-tracks.md#folder-menu).
- [*Navigation settings → Customize route line*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*My Places → Tracks tab → any folder → Default appearance*](../../personal/tracks/manage-tracks.md#folder-menu).

With the *Width setting* you can choose the thickness of the track line based on the width of the road or intersection with other tracks, or for example, if you want to highlight a track on the map by importance.  

- **Thin, Medium,** and **Bold** are lines whose width is fixed and preset by the OsmAnd application.
- In the **Custom** setting you can set the required line width with a slider, from 1 to 24.
- In the [*Tracks tab*](../../personal/tracks/manage-tracks.md#folder-menu) with the **Original** setting, different original width parameters can be retained for each track of the selected folder.
- In the [*Configure Profile*](../../navigation/guidance/navigation-settings.md#customize-route-line) the route line can be set to the **Map Style** width, this is the default width for map specified by the OsmAnd application.


### 3D Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

3D track feature provides a three-dimensional representation of tracks. This feature adds elevation information to a normal 2D track, which creates a 3D and depth effect and allows you to better visualize the track on the terrain.

- **<Translate android="true" ids="visualized_by"/>**. Select a 3D track display by elevation that uses [elevation data](../../plugins/trip-recording.md#recorded-gpx-file) from the GPX track file, or with fixed elevation.
    - *None*, &nbsp;*Altitude*, &nbsp;*Speed*, &nbsp;*Fixed Height*.
    - Additional options for Android: &nbsp;*Heart Rate*, &nbsp;*Bicycle Cadence*, &nbsp;*Bicycle Power*, &nbsp;*Temperature*, &nbsp;*Bicycle Speed*.

- **<Translate android="true" ids="wall_color"/>**. Select the coloring type for the 3D track.
    - *None*, &nbsp;*Solid*, &nbsp;*Downward Gradient*, &nbsp;*Upward Gradient*.
    - Additional options for Android: &nbsp;*Altitude*, &nbsp;*Slope*, &nbsp;*Speed*.

- **<Translate android="true" ids="track_line"/>**. Decide where to add a line to the 3D track for better visibility.
    - *Top*, &nbsp;*Bottom*, &nbsp;*Top and bottom*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Adjust the level of vertical exaggeration for the 3D track.  
    - From *None* to *x3.0*.  

- **<Translate android="true" ids="wall_height"/>** (available when *<Translate android="true" ids="visualized_by"/> → Fixed Height* selected). By changing the scale value, you can change the height of the 3D track.
    - From *None* to *2000 m*.

:::note
The *Android* version of the app requires the map rendering engine [Version 2 (OpenGl)](../../personal/global-settings.md#map-rendering-engine) to be enabled to use 3D track visualization.
:::

### Join Gaps

Gaps in a GPX track can occur during recording, for example. This function (Android: *<Translate android="true" ids="join_segments"/>*, iOS: *<Translate ios="true" ids="gpx_join_gaps"/>*) allows you to seamlessly connect all gaps in the chosen GPX track. Segments will be joined with a straight line to form a continuous track.

### Reset to Original

Resets all settings to default values.


## Change Tracks Appearance in My Places

<InfoAndroidOnly />

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)


The display of tracks can be changed one by one and in groups selected from the *My Places* menu in the [Tracks](../../personal/tracks/manage-tracks.md) tab. This tab automatically displays all tracks ever recorded, created, or imported. They are organized by folder or displayed as a list below them.  

Tap the *three-dot menu* in the field with the required [track folder](../../personal/tracks/manage-tracks.md#folder-menu) to open the menu. In it, you can change the appearance of all included tracks using the **Change Default Appearance** option.  

With [*Select*](../../personal/tracks/manage-tracks.md#selection-mode), you can change the appearance of certain tracks in the selected folder or in the whole list of the Tracks tab. To go to **Change Appearance**, select the *three-dot menu* in the upper right corner of the Tracks tab screen and tap *Select*. Then tap the *three-dot menu* at the top of the screen and select *Change Appearance*.

- **Direction arrows**. Adds directional indicators to a track line in the form of arrows along that track.  
    - States: *Unchanged*, &nbsp;*Original*, &nbsp;*On*, &nbsp;*Off*.
- **Show start and finish icons**. Adds start and end point indicators to the track line.  
    - States: *Unchanged*, &nbsp;*Original*, &nbsp;*On*, &nbsp;*Off*.
- **Color**. Allows you to select the appropriate type of track coloring.
- **Width**. Allows you to select a preset or manually configured track line width.
- **Split interval**. Select the interval at which distance or time marks on the track will be displayed.  
    - States: *Unchanged*, &nbsp;*Original*, &nbsp;*Select*: *Time* or *Distance*.


<!--
## Tracks Color Scheme

<Tabs groupId="operating-systems">

<TabItem value="android" label="Slope">  

![Slope_color](@site/static/img/map/tracks_color_scheme_slope_andr.png)

</TabItem>

<TabItem value="ios" label="Altitude">

![Altitude_color](@site/static/img/map/tracks_color_scheme_altitude_andr.png)

</TabItem>

</Tabs>

- All colors.
- Add and edit.
-->


## Related Articles

- [Map Context menu](../map-context-menu.md)
- [Configure Map](../configure-map-menu.md)
- [Points on the map](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Tracks Context menu](../tracks/track-context-menu.md)
- [Trip Recording](../../plugins/trip-recording.md)

> *This article was last updated in August 2024*
