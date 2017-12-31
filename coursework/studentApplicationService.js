//Application Service for "student"

/**
 * @returns an array with every student object.
 */
function getFullStudentList() {
    var studentList = moduleStudentList;
    return studentList;
}

/**
 * 
 * @param {*} groupID The ID of the group of the students belong to or "all"
 * @returns an array with every student object that belongs to a certain group or all students, based on the parameter.
 */
function getStudentListByGroup (groupID) {
    if(groupID == "all") return moduleStudentList;

    //Done like this because it was necessary to iterate to get all students anyway.
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
 * @param {*} sortBy The parameter should be one of the following: {srn, fname, lname, gname}
 * @returns 
 * @throws
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
        case "gname": //TODO Comment that the alphabetical order might not work as desired because of 1 and 10.
            moduleStudentList.sort(function(a,b) {
                return (getGroupName(a.allocatedGroup) > getGroupName(b.allocatedGroup)) ? 1 : ((getGroupName(b.allocatedGroup) > getGroupName(a.allocatedGroup)) ? -1 : 0);
            } );
            break;
        default:
            throw new Error("Wrong parameter in the sorting function. This should never be reached.");
    }
}

/**
 * 
 * @param {*} selectedStudentSRN 
 * @param {*} newGroupID 
 */
function changeStudentGroup(selectedStudentSRN, newGroupID) {
    if(getCurrentGroup(selectedStudentSRN) == newGroupID) {
        alert("The group cannot be changed. The selected group is the same as the one the student is currently in.");
    } else {
        changeGroupsOnStudentChange(selectedStudentSRN, getCurrentGroup(selectedStudentSRN), newGroupID);
        
        if(getOldGroup(selectedStudentSRN) == null) { //The student has never changed groups.
            /*The student needs a new entry in the studentChanges array.
            If the student already changed groups, this section will not be entered,
            since the old group MUST NOT be updated. */
            setOldGroup(selectedStudentSRN, getCurrentGroup(selectedStudentSRN));
        }
        setCurrentGroup(selectedStudentSRN, newGroupID);

        if(getOldGroup(selectedStudentSRN) == getCurrentGroup(selectedStudentSRN)) {
            removeFromStudentChanges(selectedStudentSRN);
        }
    }
}