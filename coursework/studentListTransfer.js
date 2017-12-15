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

function getServiceGroupList() {
    var groupList = new Array();
    var allGroups = moduleStudentList["groups"];
    for (var currentGroupID in allGroups) {
        groupList.push(allGroups[currentGroupID]);
        groupList[groupList.length - 1].groupID = currentGroupID;
    }
    return groupList;
}

function getGroupName(groupID) {
    var allGroups;
    if(origin == "json")
        allGroups = getFullGroupList();
    else if(origin == "service")
        allGroups = getServiceGroupList();

    for(var i = 0; i < allGroups.length; i++) {
        if(allGroups[i].groupID == groupID) {
            return allGroups[i].name;
        }
    }

    return "ERROR";
}