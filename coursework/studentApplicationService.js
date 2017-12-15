//Application Service for "student"

/**
 * Returns an array with every student object.
 */
function getFullStudentList() {
    var studentList = moduleStudentList; //TODO Is it necessary to copy this?
    return studentList;
}

/**
 * Returns an array with every student object that belongs to a certain group.
 * @param {*} groupID The ID of the group of the students belong to or "all"
 */
function getStudentListByGroup (groupID) {
    if(groupID == "all") return moduleStudentList;

    var selectedStudents = new Array();
    for (var currentStudentID in moduleStudentList) {
		if(moduleStudentList[currentStudentID].allocatedGroup == groupID) {
            selectedStudents.push(moduleStudentList[currentStudentID]);
        }
    }
    return selectedStudents;
}

/**
 * Returns a student array sorted by what the parameter dictates.
 * @param {*} sortBy The parameter must be one of the following:
 *                   {none, srn, fname, lname, gname}
 */
function getSortedStudentList(sortBy) {
    /*var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
    keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]}) */
    //keysSorted is an array, not an object!
    var sortedStudents = new Array();
    if(originalStudentList == null) {
        originalStudentList = moduleStudentList; //Makes a copy of the original
    }
    switch(sortBy) {
        case "none":
            moduleStudentList = originalStudentList;
            break;
        case "srn":
        
            break;
        case "fname":

            break;
        case "lname":

            break;
        case "gname":

            break;
    }
    return sortedStudents;
}