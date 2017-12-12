function displayParks() {
	var parksListHTML = '<table id="parksTable"><thead><tr><th>Name</th><th>Location</th><th>Facilities</th></tr></thead>'
	for (var parkName in parksListJSON) {
		// store local reference to park being displayed 
		var park = parksListJSON[parkName];
		
		// generate HTML table row for park
		var parkHTML = '<tr><td>' + park.displayName + '</td><td>' + park.location + '</td><td>' + park.facilities + '</tr>';
		// console.log('  ' + parkHTML);
		parksListHTML += parkHTML;
		
	}
	parksListHTML += '</table>';
	document.getElementById("parksList").innerHTML=parksListHTML;
}
