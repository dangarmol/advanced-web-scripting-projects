//Transfer Object for the student list

var origin;
var moduleStudentList;

function getServiceStudentList() {
    var studentList = new Array();
    var allStudents = moduleStudentList["students"];
    for (var currentStudentID in allStudents) {
        studentList.push(allStudents[currentStudentID]);
        studentList[studentList.length - 1].srn = currentStudentID;
    }
    return studentList;
}