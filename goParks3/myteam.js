/*
 * Topic 3 - Lab Tasks 1-3
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myTeam = [["Jo", "Malone"], ["Chris", "Hoy"], ["Hari", "Houdini"]]

var ratedTeam = [["Jo",4], ["Chris", 3], ["Hari",5]]

var ratedTeamObjects = [{name: "Jo", rating: 4}, {name: "Chris", rating: 3} , {name: "Hari", rating: 5} ]

function compareSubArray (a , b) {
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }
  // a must be equal to b
  return 0;  
}

// example of function for use in filtering
function beatsRating (subArray) {
// the "this" variable can be passed in to the filter method as shown below.
  if (subArray[1] > this) {
    return true;
  }
  else {
    return false;
  }
}


var ratedTeam = [["Jo",4], ["Chris", 3], ["Hari",5]]

ratedTeam.slice().filter(beatsRating,3)
