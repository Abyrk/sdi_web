var map;

function init() {

    map = new OpenLayers.Map({
        div: "map",
        allOverlays: true,
		projection: new OpenLayers.Projection("EPSG:3857")
    });

    

	var osm = new OpenLayers.Layer.OSM();
	var flood = new OpenLayers.Layer.WMS(
                "Flood risk",
                "http://ssw7303f:8080/geoserver/wms",
                {layers: 'SDI:flood', format: 'image/png', transparent:'true', styles: 'flood_style'},
                {isBaseLayer: false}
                );
	var silt = new OpenLayers.Layer.WMS(
                "Silt erosion",
                "http://ssw7303f:8080/geoserver/wms",
                {layers: 'SDI:flood', format: 'image/png', transparent:'true', styles: 'silt_style'},
                {isBaseLayer: false}
                );
	var wind = new OpenLayers.Layer.WMS(
                "Exposure to wind",
                "http://ssw7303f:8080/geoserver/wms",
                {layers: 'SDI:flood', format: 'image/png', transparent:'true', styles: 'exposure_style'},
                {isBaseLayer: false}
                );					
				
	// note that first layer must be visible
    map.addLayers([osm, flood, silt, wind]);

    switcher = new OpenLayers.Control.LayerSwitcher();
	switcher.useLegendGraphics = true;
	map.addControl(switcher);
    //map.zoomToMaxExtent();
	map.setCenter(new OpenLayers.LonLat(-1.31, 50.678848).transform('EPSG:4326', 'EPSG:3857'), 11);
	
	                  

 

}