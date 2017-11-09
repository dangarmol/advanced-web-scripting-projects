/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// check to see code is running!
// alert("Running code");

// find table, either getting it from collection of all tables, or using a query
// table = document.getElementsByTagName('table')[0];

function highlightParks (selectedArea) {
  parksTable = document.querySelector('table');

  for (row of parksTable.rows) {
    parkArea = row.cells[1].textContent;
    console.log(parkArea);
    if (parkArea == selectedArea) {
      console.log('match');
      row.style.backgroundColor = '#bce730';
    } 
	else {
	  row.style.backgroundColor = null;	
	}
		
  }
}

document.querySelector("input").onclick = 
	function () {highlightParks(document.querySelector('select').selectedOptions[0].value);}


		
