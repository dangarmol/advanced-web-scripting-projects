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
parksTable = document.querySelector('table');

selectedArea = 'Welwyn Hatfield';
for (row of parksTable.rows) {
  parkArea = row.cells[1].textContent;
  console.log(parkArea);
  if (parkArea == selectedArea) {
    console.log('match');
    row.style.backgroundColor = 'lightgrey';
  }
}
