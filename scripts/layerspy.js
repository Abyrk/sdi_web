/* used on the home page to create a map with two layers.
   As the user scrolls around they can 'see through' to the second layer.
   The up and down arrows can be used to change the size of the hole */


/* define the layers for the map*/
var key = 'ArY4NJ_i8ECvgSP4rF4mNQIZfHUDhNQ0cWl5LdIWqJSrFTgs0nQOeFjJKPVOtm_y';

var roads = new ol.layer.Tile({
  source: new ol.source.BingMaps({key: key, imagerySet: 'Road'})
});

var imagery = new ol.layer.Tile({
  source: new ol.source.BingMaps({key: key, imagerySet: 'AerialWithLabels'})
});


/* define the map */

var map = new ol.Map({
  layers: [roads, imagery],
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([-1.300813,50.676065], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  })
});




/* set the radius and behaviour of the hole*/
var radius = 50;
$(document).keydown(function(evt) {
  if (evt.which == 38) {
    radius = Math.min(radius + 5, 100);
    map.render();
  } else if (evt.which == 40) {
    radius = Math.max(radius - 5, 30);
    map.render();
  }
});

// get the pixel position with every move
var mousePosition = null;
$(map.getViewport()).on('mousemove', function(evt) {
  mousePosition = map.getEventPixel(evt.originalEvent);
  map.render();
}).on('mouseout', function() {
  mousePosition = null;
  map.render();
});

// before rendering the layer, do some clipping
imagery.on('precompose', function(event) {
  var ctx = event.context;
  var pixelRatio = event.frameState.pixelRatio;
  ctx.save();
  ctx.beginPath();
  if (mousePosition) {
    // only show a circle around the mouse
    ctx.arc(mousePosition[0] * pixelRatio, mousePosition[1] * pixelRatio,
        radius * pixelRatio, 0, 2 * Math.PI);
    ctx.lineWidth = 5 * pixelRatio;
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.stroke();
  }
  ctx.clip();
});

// after rendering the layer, restore the canvas context
imagery.on('postcompose', function(event) {
  var ctx = event.context;
  ctx.restore();
});



