//Application Service for "group"

/**
 * 
 * @returns an array with every group object
 */
function getFullGroupList() {
    var groupList = moduleGroupList;
    return groupList;
}

/**
 * Returns a string with the name of a group given its groupID.
 * @param {*} groupID ID of the group to be found.
 * @returns group name if found, ERROR otherwise.
 * @throws exception if group not found.
 */
function getGroupName(groupID) {
    for(var i = 0; i < moduleGroupList.length; i++) {
        if(moduleGroupList[i].groupID == groupID) {
            return moduleGroupList[i].name;
        }
    }

    throw new Error("Group not found in module, this point should be unreachable.");
}

/**
 * 
 * @param {*} selectedStudentSRN student SRN
 * @param {*} oldGroupID GroupID from the group the student will be removed of
 * @param {*} newGroupID GroupID where the student will be added
 */
function changeGroupsOnStudentChange(selectedStudentSRN, oldGroupID, newGroupID) {
    removeMember(selectedStudentSRN, oldGroupID);
    addMember(selectedStudentSRN, newGroupID);
}

/**
 * 
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