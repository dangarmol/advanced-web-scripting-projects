//Transfer object for the current groups information

var moduleGroupList;

function getAllGroupsData() {
    var groupData = {moduleGroupList};
    
    return groupData;
}

function addMember (studentID, groupID) {
    moduleGroupList[getGroupIndex(groupID)]["members"].push(studentID);
}

function removeMember (studentID, groupID) {
    var groupIndex = getGroupIndex(groupID);
    for(var i = 0; i < moduleGroupList[groupIndex]["members"].length; i++) {
        if(moduleGroupList[groupIndex]["members"][i] == studentID) {
            moduleGroupList[groupIndex]["members"].splice(i, 1);
            return; //To avoid unnecessary iterations.
        }
    }
    throw new exception("Student not found in group, this point should be unreachable.");
}

function getGroupIndex (groupID) {
    var currIndex = 0;
    for(var i = 0; i < moduleGroupList.length; i++) {
        if(moduleGroupList[i]["groupID"] == groupID) {
            return currIndex;
        } else {
            currIndex++;
        }
    }
    throw new exception("Group not found, this point should be unreachable.");
}