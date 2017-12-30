//Application Service for "group"

/**
 * Returns an array with every group object.
 */
function getFullGroupList() {
    var groupList = moduleGroupList; // //TODO Is it necessary to copy this?
    return groupList;
}

/**
 * Returns a string with the name of a group given its groupID.
 * @param {*} groupID The ID of the group to be found.
 */
function getGroupName(groupID) {
    for(var i = 0; i < moduleGroupList.length; i++) {
        if(moduleGroupList[i].groupID == groupID) {
            return moduleGroupList[i].name;
        }
    }

    //If it is not found...
    return "ERROR"; 
}

function changeGroupsOnStudentChange(selectedStudentSRN, oldGroupID, newGroupID) {
    removeMember(selectedStudentSRN, oldGroupID);
    addMember(selectedStudentSRN, newGroupID);
}

/**
 * @returns true if an empty group is found, false otherwise.
 */
function checkEmptyGroups () {
    for(var i = 0; i < moduleGroupList.length; i++) {
        if(moduleGroupList[i]["members"].length < 1) {
            return true;
        }
    }
    return false;
}