//This is a Data Access Object to retrieve the student data from the database.

function getFullStudentList() {
    return module["students"];
}

function getStudentListByGroup (groupID) {
    var studentList = new Array();
    var allStudents = module["students"];
    for (var currentStudentID in allStudents) {
		if(allStudents[currentStudentID].allocatedGroup == groupID) {
           studentList.push(allStudents[currentStudentID]); //This needs to include the Student ID as well!
        }
    }
    return studentList;
}