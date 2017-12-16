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
 *                   {srn, fname, lname, gname}
 */
function sortStudentList(sortBy) {
    switch(sortBy) {
        case "srn":
            moduleStudentList.sort(function(a,b) {
                return (a.srn > b.srn) ? 1 : ((b.srn > a.srn) ? -1 : 0);
            } );
            break;
        case "fname":
            moduleStudentList.sort(function(a,b) {
                return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);
            } );
            break;
        case "lname":
            moduleStudentList.sort(function(a,b) {
                return (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0);
            } );
            break;
        case "gname": //TODO Comment that the alphabetical order might not work as desired.
            moduleStudentList.sort(function(a,b) {
                return (getGroupName(a.allocatedGroup) > getGroupName(b.allocatedGroup)) ? 1 : ((getGroupName(b.allocatedGroup) > getGroupName(a.allocatedGroup)) ? -1 : 0);
            } );
            break;
    }
}