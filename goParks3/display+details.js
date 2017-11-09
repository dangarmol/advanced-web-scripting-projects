function displayParks() {
	// creating parks table header...')
	var parksListHTML = 
	 '<table id="parksTable">'
	 + '<thead><tr><th>Name</th><th>Location</th></tr></thead>';
		 
  // loop over parksList data object 
	for (var parkName in parksListJSON) {
		// store local reference to park being displayed 
		var park = parksListJSON[parkName];

		// generate HTML table row for park
		console.log('  generating ' + park.displayName);
		var parkHTML = '<tr>'                       // start row
		     + '<td>' + park.displayName + '</td>'
		     + '<td>' + park.location + '</td>'
		     + '</tr>' ;                            // end row

		// add HTML for this park to output list HTML
		parksListHTML += parkHTML;  
	}
	
	// closing parks table
	parksListHTML += '</table>';

	// update view of the parksList by inserting HTML text
	document.getElementById("parksList").innerHTML=parksListHTML;
}
