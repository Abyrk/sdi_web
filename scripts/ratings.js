	
//	set up arrays to hold lists of points by rating
	var mymarkers5 = new Array();
	var mymarkers4 = new Array();
	var mymarkers3 = new Array();
	var mymarkers2 = new Array();
	var mymarkers1 = new Array();
	var mymarkersall = new Array();
	var layers = document.getElementById('menu-ui');
	var test5=true;
	var test4=true;
	var test3=true;	
	var test2=true;
	var test1=true;
	var map = L.map('map').setView([50.68, -1.32], 11);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);

	<!-- add a full screen button-->		
		L.control.fullscreen().addTo(map);
	
	
	
	

	
//	<!-- identify the xml document to be read-->
	
	$(document).ready(function(){
		$.ajax({
		type: "GET",
		url: "../data/mymarkers.xml",
		dataType: "xml",
		success: parseXml
		});
	});
	
//<!-- read the file, pushing each point to the correct array depending on the rating value then add all the markers to the map -->
	
	function parseXml(xml){
		$(xml).find("EstablishmentDetail").each(function(){
		if ($(this).find("RatingValue").text()=='5') {
			mapPoint = L.marker([$(this).find("Latitude").text(),$(this).find("Longitude").text()],
			{icon: L.icon({iconUrl: '../images/drkgreen.png', iconSize:[16,16]})}		
			);
			mymarkers5.push(mapPoint);
			mymarkersall.push(mapPoint);
			mapPoint.bindPopup($(this).find("BusinessName").text());
			}
		else if ($(this).find("RatingValue").text()=='4') {
			mapPoint = L.marker([$(this).find("Latitude").text(),$(this).find("Longitude").text()],
			{icon: L.icon({iconUrl: '../images/ltgreen.png', iconSize:[16,16]})}		
			);
			mymarkers4.push(mapPoint);
			mymarkersall.push(mapPoint);
			mapPoint.bindPopup($(this).find("BusinessName").text());
			}
		else if ($(this).find("RatingValue").text()=='3') {
			mapPoint = L.marker([$(this).find("Latitude").text(),$(this).find("Longitude").text()],
			{icon: L.icon({iconUrl: '../images/yellow.png', iconSize:[16,16]})}		
			);
			mymarkers3.push(mapPoint);
			mymarkersall.push(mapPoint);
			mapPoint.bindPopup($(this).find("BusinessName").text());
			}	
		else if ($(this).find("RatingValue").text()=='2') {
			mapPoint = L.marker([$(this).find("Latitude").text(),$(this).find("Longitude").text()],
			{icon: L.icon({iconUrl: '../images/orange.png', iconSize:[16,16]})}		
			);
			mymarkers2.push(mapPoint);
			mymarkersall.push(mapPoint);
			mapPoint.bindPopup($(this).find("BusinessName").text());
			}
		else {
			mapPoint = L.marker([$(this).find("Latitude").text(),$(this).find("Longitude").text()],
			{icon: L.icon({iconUrl: '../images/red.png', iconSize:[16,16]})}		
			);
			mymarkers1.push(mapPoint);
			mymarkersall.push(mapPoint);
			mapPoint.bindPopup($(this).find("BusinessName").text());
			}
		// add all the markers to the map	
		for (var i = 0; i < mymarkersall.length; i++ ) {
		map.addLayer(mymarkersall[i]);

		}			
		});
	}


	
//<!-- show/hide rating value 5-->
	function clearMarkers5() {
	
	if (test5) {
           		for (var i = 0; i < mymarkers5.length; i++ ) {map.removeLayer(mymarkers5[i]); test5=false}
        } else {
            for (var i = 0; i < mymarkers5.length; i++ ) {map.addLayer(mymarkers5[i]);test5=true}
        }
	}
	

//<!-- show/hide rating value 4-->
	
	function clearMarkers4() {
	
	if (test4) {
           		for (var i = 0; i < mymarkers4.length; i++ ) {map.removeLayer(mymarkers4[i]); test4=false}
        } else {
            for (var i = 0; i < mymarkers4.length; i++ ) {map.addLayer(mymarkers4[i]);test4=true}
        }
	}

//<!-- show/hide rating value 3-->	
	
	function clearMarkers3() {
	
	if (test3) {
           		for (var i = 0; i < mymarkers3.length; i++ ) {map.removeLayer(mymarkers3[i]); test3=false}
        } else {
            for (var i = 0; i < mymarkers3.length; i++ ) {map.addLayer(mymarkers3[i]);test3=true}
        }
	}

//<!-- show/hide rating value 2-->
	
	function clearMarkers2() {
	
	if (test2) {
           		for (var i = 0; i < mymarkers2.length; i++ ) {map.removeLayer(mymarkers2[i]); test2=false}
        } else {
            for (var i = 0; i < mymarkers2.length; i++ ) {map.addLayer(mymarkers2[i]);test2=true}
        }
	}
	
//<!-- show/hide rating value 1 and 0-->
	function clearMarkers1() {
	
	if (test1) {
           		for (var i = 0; i < mymarkers1.length; i++ ) {map.removeLayer(mymarkers1[i]); test1=false}
        } else {
            for (var i = 0; i < mymarkers1.length; i++ ) {map.addLayer(mymarkers1[i]);test1=true}
        }
	}

