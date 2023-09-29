
// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
    zoom: 2,
    
    
  });
  
  // create a new tile layer
  var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  layer = new L.TileLayer(tileUrl,
  {
      attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
      maxZoom: 15,
  });
  
  // add the layer to the map
  map.addLayer(layer);
  
  var times = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000 ];
  //var homeToSchool = [[43.30868, -0.36075], [43.30821, -0.36084], [43.30815, -0.36046], [43.3058, -0.36112], [43.30539, -0.3611], [43.30518, -0.36309], [43.30451, -0.36666], [43.30429, -0.36691], [43.3045, -0.36822], [43.3004, -0.36976], [43.30051, -0.37081], [43.29992, -0.37192], [43.30035, -0.37235], [43.29996, -0.37354], [43.3004, -0.37354], [43.3003655, -0.3745544], [43.3004, -0.37354], [43.29996, -0.37354], [43.30035, -0.37235], [43.29992, -0.37192], [43.30051, -0.37081], [43.3004, -0.36976], [43.3045, -0.36822], [43.30429, -0.36691], [43.30451, -0.36666],[43.30518, -0.36309], [43.30539, -0.3611], [43.3058, -0.36112], [43.30815, -0.36046], [43.30821, -0.36084], [43.30868, -0.36075]];
  var markerStorage1 = L.marker([43.30868, -0.36075]).addTo(map);
  var circle = L.circle([43.30868, -0.36075], {radius: 1500}).addTo(map);
  var Pau = [[43.2921, -0.3843], [43.3088, -0.3435]];
  
  map.fitBounds(Pau);

  
  //========================================================================
  
  
  var control1 = L.Routing.control({
    waypoints: [
      L.latLng(43.30868, -0.36075),
      L.latLng(43.3003655, -0.3745544),
      L.latLng(43.30868, -0.36075)
    ],
  })
  .on('routeselected', function(e) {
    var markerTarget1 = L.marker([43.3003655, -0.3745544]).addTo(map);
    markerTarget1._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control1.hide();
    var marker1 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
    marker1._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res = marker1.getLatLng();
      marker1.bindPopup(`Hello !</br>I'm <b>Drone n°1</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res.lat}, Longitude ${res.lng} </br>I'm going to Delivery Target <b>1</b> located at <b>${markerTarget1.getLatLng()}</b></br> I'm from Storage Facility <b>1</b> located at <b>${markerStorage1.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);


  //========================================================================

  
  
  
  var control2 = L.Routing.control({
    waypoints: [
      L.latLng(43.30868, -0.36075),
      L.latLng(43.3201, -0.3659),
      L.latLng(43.30868, -0.36075)
    ],
  })
  .on('routeselected', function(e) {
    var markerTarget2 = L.marker([43.3201, -0.3659]).addTo(map);
    markerTarget2._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control2.hide();
    var marker2 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
    marker2._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res2 = marker2.getLatLng();
      marker2.bindPopup(`Hello !</br>I'm <b>Drone n°2</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res2.lat}, Longitude ${res2.lng} </br>I'm going to Delivery Target <b>2</b> located at <b>${markerTarget2.getLatLng()}</b></br> I'm from Storage Facility <b>1</b> located at <b>${markerStorage1.getLatLng()}</b></br>`);
    },5000)
    
  })
  .addTo(map);

  //========================================================================


  var markerStorage2 = L.marker([43.29764, -0.40531]).addTo(map);
  var circle2 = L.circle([43.29764, -0.40531], {radius: 1500}).addTo(map);
  var control3 = L.Routing.control({
    waypoints: [
      L.latLng(43.29764, -0.40531),
      L.latLng(43.30216, -0.39747),
      L.latLng(43.29764, -0.40531)
    ],
  })
  .on('routeselected', function(e) {
    var markerTarget3 = L.marker([43.30216, -0.39747]).addTo(map);
    markerTarget3._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control3.hide();
    var marker3 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map)
    marker3._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res3 = marker3.getLatLng();
      marker3.bindPopup(`Hello !</br>I'm <b>Drone n°3</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res3.lat}, Longitude ${res3.lng} </br>I'm going to Delivery Target <b>3</b> located at <b>${markerTarget3.getLatLng()}</b></br> I'm from Storage Facility <b>2</b> located at <b>${markerStorage2.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);

  //========================================================================

  var control4 = L.Routing.control({
    waypoints: [
      L.latLng(43.29764, -0.40531),
      L.latLng(43.2909091, -0.4054565),
      L.latLng(43.29764, -0.40531)
    ],
  })
  .on('routeselected', function(e) {
    var markerTarget4 = L.marker([43.2909091, -0.4054565]).addTo(map);
    markerTarget4._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control4.hide();
    var marker4 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map)
    marker4._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res4 = marker4.getLatLng();
      marker4.bindPopup(`Hello !</br>I'm <b>Drone n°4</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res4.lat}, Longitude ${res4.lng} </br>I'm going to Delivery Target <b>4</b> located at <b>${markerTarget4.getLatLng()}</b></br> I'm from Storage Facility <b>2</b> located at <b>${markerStorage2.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);




  //========================================================================

  var markerStorage3 = L.marker([43.31584, -0.38478]).addTo(map);
  var circle3 = L.circle([43.31584, -0.38478], {radius: 1500}).addTo(map);

  //========================================================================

  var control5 = L.Routing.control({
    waypoints: [
      L.latLng(43.31584, -0.38478),
      L.latLng(43.30475, -0.38475),
      L.latLng(43.31584, -0.38478)
    ],
  })
  .on('routeselected', function(e){
    var markerTarget5 = L.marker([43.30475, -0.38475]).addTo(map);
    markerTarget5._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control5.hide();
    var marker5 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
    marker5._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res5 = marker5.getLatLng();
      marker5.bindPopup(`Hello !</br>I'm <b>Drone n°5</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res5.lat}, Longitude ${res5.lng} </br>I'm going to Delivery Target <b>5</b> located at <b>${markerTarget5.getLatLng()}</b></br> I'm from Storage Facility <b>3</b> located at <b>${markerStorage3.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);

  //======================================================================== 

  var control6 = L.Routing.control({
    waypoints: [
      L.latLng(43.31584, -0.38478),
      L.latLng(43.3233383, -0.3975978),
      L.latLng(43.31584, -0.38478)
    ],
  })
  .on('routeselected', function(e){
    var markerTarget6 = L.marker([43.3233383, -0.3975978]).addTo(map);
    markerTarget6._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control6.hide();
    var marker6 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
    marker6._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res6 = marker6.getLatLng();
      marker6.bindPopup(`Hello !</br>I'm <b>Drone n°6</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res6.lat}, Longitude ${res6.lng} </br>I'm going to Delivery Target <b>6</b> located at <b>${markerTarget6.getLatLng()}</b></br> I'm from Storage Facility <b>3</b> located at <b>${markerStorage3.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);


  //========================================================================  

  var markerStorage4 = L.marker([43.29254, -0.37938]).addTo(map);
  var circle4 = L.circle([43.29254, -0.37938], {radius: 1500}).addTo(map);
 
 //========================================================================


 var control7 = L.Routing.control({
   waypoints: [
     L.latLng(43.29254, -0.37938),
     L.latLng(43.2842979, -0.3814260),
     L.latLng(43.29254, -0.37938)
    ],
  })
  .on('routeselected', function(e) {
    var markerTarget7 = L.marker([43.2842979, -0.3814260]).addTo(map);
    markerTarget7._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    control7.hide();
    var marker7 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map)
    marker7._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const res7 = marker7.getLatLng();
      marker7.bindPopup(`Hello !</br>I'm <b>Drone n°7</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res7.lat}, Longitude ${res7.lng} </br>I'm going to Delivery Target <b>7</b> located at <b>${markerTarget7.getLatLng()}</b></br> I'm from Storage Facility <b>4</b> located at <b>${markerStorage4.getLatLng()}</b></br>`);
    },5000)
  })
  .addTo(map);

    //========================================================================

    var control8 = L.Routing.control({
      waypoints: [
        L.latLng(43.29254, -0.37938),
        L.latLng(43.2903594, -0.3954848),
        L.latLng(43.29254, -0.37938)       
      ],
    })
    .on('routeselected', function(e) {
      var markerTarget8 = L.marker([43.2903594, -0.3954848]).addTo(map);
      markerTarget8._icon.style.filter = "hue-rotate(160deg)";
      var route = e.route;
      control8.hide();
      var marker8 = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
      marker8._icon.style.filter = "hue-rotate(260deg)";
      setInterval(() => {
        const res8 = marker8.getLatLng();
        marker8.bindPopup(`Hello !</br>I'm <b>Drone n°8</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${res8.lat}, Longitude ${res8.lng} </br>I'm going to Delivery Target <b>8</b> located at <b>${markerTarget8.getLatLng()}</b></br> I'm from Storage Facility <b>4</b> located at <b>${markerStorage4.getLatLng()}</b></br>`);
      },5000)

    })
    .addTo(map);
    

//========================================================================

var userMarker; 

var storageMarkers = [markerStorage1, markerStorage2, markerStorage3, markerStorage4];

map.on('click', function (e) {
  if (userMarker) {
    map.removeLayer(userMarker); 
  }
  
  var clickedLatLng = e.latlng;
  
  var closestStorage = null;
  var minDistance = Infinity;
  
  for (var i = 0; i < storageMarkers.length; i++) {
    var storageLatLng = storageMarkers[i].getLatLng();
    var distance = clickedLatLng.distanceTo(storageLatLng);
    
    if (distance < minDistance) {
      minDistance = distance;
      closestStorage = storageLatLng;
    }
  }
  userMarker = L.marker(clickedLatLng).addTo(map);

  var controlN = L.Routing.control({
    waypoints: [
      closestStorage, 
      clickedLatLng, 
      closestStorage
    ],
  })
  .on('routeselected', function(e) {
    var markerTargetN = L.marker(clickedLatLng).addTo(map);
    markerTargetN._icon.style.filter = "hue-rotate(160deg)";
    var route = e.route;
    controlN.hide();
    var markerN = L.Marker.movingMarker(route.coordinates, times, {autostart: true, loop: true}).addTo(map);
    markerN._icon.style.filter = "hue-rotate(260deg)";
    setInterval(() => {
      const resN = markerN.getLatLng();
      markerN.bindPopup(`Hello !</br>I'm <b>Drone n°?</b> !</br> Here's some informations for you : </br> Current Position : Latitude ${resN.lat}, Longitude ${resN.lng} </br>I'm going to Delivery Target <b>N</b> located at <b>${markerTargetN.getLatLng()}</b></br> I'm from Storage Facility <b>N</b> located at <b>${closestStorage.getLatLng()}</b></br>`);
    },5000);

  })
  .addTo(map);
});

