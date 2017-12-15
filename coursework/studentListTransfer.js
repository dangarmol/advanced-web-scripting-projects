//Transfer Object for the student list

var origin;
var moduleInfo;
var originalModuleInfo; //Only used for the sort function, to return to the original view.

function getServiceStudentList() {
    var studentList = new Array();
    var allStudents = moduleInfo["students"];
    for (var currentStudentID in allStudents) {
        studentList.push(allStudents[currentStudentID]);
        studentList[studentList.length - 1].srn = currentStudentID;
    }
    return studentList;
}

function getServiceGroupList() {
    var groupList = new Array();
    var allGroups = moduleInfo["groups"];
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

function getSortedStudentList(sortBy) { //The parameter could be {none, srn, fname, lname, gname}
    if(originalModuleInfo == null) {
        originalModuleInfo = moduleInfo; //Makes a copy of the original
    }
    switch(sortBy) {
        case "none":
            moduleInfo = originalModuleInfo;
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
    //moduleInfo.sort();
}