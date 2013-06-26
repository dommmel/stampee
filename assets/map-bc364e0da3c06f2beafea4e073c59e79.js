var map;
var mapBounds = new OpenLayers.Bounds(0.0, -2803.0, 2037.0, 0.0);
/*
"DON4mTu8KCYPdINYljtroXqtGcQAF6oTlmIwrjHZ"
*/

var mapMinZoom = 0;
var mapMaxZoom = 4;
var emptyTileURL = "http://www.maptiler.org/img/none.png";
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;

   function init_map(pagepath){
       var options = {
           div: "map",
           maxExtent: new OpenLayers.Bounds(0.0, -2803.0, 2037.0, 0.0),
           maxResolution: 16.000000,
           numZoomLevels: 5
       };
       map = new OpenLayers.Map(options);

       var layer = new OpenLayers.Layer.TMS("TMS Layer", "",
       {
           serviceVersion:  "/stampee/" + pagepath,
           layername: '.',
           alpha: true,
           type: 'png',
           //getURL: getURL
       });

       map.addLayer(layer);
       map.zoomToExtent(mapBounds);
      anno.makeAnnotatable(map);
      anno.addPlugin('Parse', {debug: true, app_id: 'DON4mTu8KCYPdINYljtroXqtGcQAF6oTlmIwrjHZ', js_key: 'QGZFPe1NZlUC90fWVAcVScIx2tVWXIyMd8yPkBGR' });

   
   }

   // function getURL(bounds) {
   //     bounds = this.adjustBounds(bounds);
   //     var res = this.getServerResolution();
   //     var x = Math.round((bounds.left - this.tileOrigin.lon) / (res * this.tileSize.w));
   //     var y = Math.round((bounds.bottom - this.tileOrigin.lat) / (res * this.tileSize.h));
   //     var z = this.getServerZoom();
   //     var path = this.serviceVersion + "/" + this.layername + "/" + z + "/" + x + "/" + y + "." + this.type; 
   //     var url = this.url;
   //     if (OpenLayers.Util.isArray(url)) {
   //         url = this.selectUrl(path, url);
   //     }
   //     if (mapBounds.intersectsBounds(bounds) && (z >= mapMinZoom) && (z <= mapMaxZoom)) {
   //         return url + path;
   //     } else {
   //         return emptyTileURL;
   //     }
   // }

function getWindowHeight() {
     if (self.innerHeight) return self.innerHeight;
         if (document.documentElement && document.documentElement.clientHeight)
             return document.documentElement.clientHeight;
         if (document.body) return document.body.clientHeight;
             return 0;
     }

     function getWindowWidth() {
         if (self.innerWidth) return self.innerWidth;
         if (document.documentElement && document.documentElement.clientWidth)
             return document.documentElement.clientWidth;
         if (document.body) return document.body.clientWidth;
             return 0;
     }

     function resize() {  
         var map = document.getElementById("map");  
         // var header = document.getElementById("header");  
         // var subheader = document.getElementById("subheader");  
         map.style.height = (getWindowHeight()-20) + "px";
         map.style.width = (getWindowWidth()-20) + "px";
         // header.style.width = (getWindowWidth()-20) + "px";
         // subheader.style.width = (getWindowWidth()-20) + "px";
         if (map.updateSize) { map.updateSize(); };
     }

     onresize=function(){ resize(); };

function annotate() {
  var button = document.getElementById('map-annotate-button');
  button.style.color = '#777';

  anno.activateSelector(function() {
    // Reset button style
    button.style.color = '#fff';
  });
}
;
