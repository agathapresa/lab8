function initMap() {
	// add your code here
	L.mapquest.key = 'wGAa3lErndwxGxvlYX6dNfXZPEEjDPgM';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  	center: [32.87873652855066, -117.23578944340163],
 	 layers: L.mapquest.tileLayer('map'),
 	 zoom: 12,
 	 zoomControl: false
	});
	
	// Add a marker to the map
	L.marker([32.87873652855066, -117.23578944340163]).addTo(map);
}