//Transfer object for the current students information

var moduleStudentList;

/**
 * This is a delta kind of object. That means that it doesn't reflect the current state of the
 * students, but instead it's only a list of the changes, a diferential, hence its kind name.
 * 
 * It should have the following format:
 * studentChanges = Array({
 *  "studentID",
 *  "previousGroupID",
 *  "newGroupID"
 * });
 * 
 * Example:
 * studentChanges = [{"studentID" : "16234504", "previousGroupID" : "690511", "newGroupID" : "690513"},
 *                   {"studentID" : "19398004", "previousGroupID" : "690526", "newGroupID" : "690531"},
 *                   {"studentID" : "13544964", "previousGroupID" : "690548", "newGroupID" : "690532"}]
 */
var studentChanges;

/**
 * TODO Implement this with a HashMap to get a better efficiency.
 * Otherwise, complexity while loading the list would be O(n^2) in the worst cases,
 * with HashMap it would improve to O(n).
 */