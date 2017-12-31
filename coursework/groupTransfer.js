//Transfer object for the current groups information

var moduleGroupList;

/**
 * 
 * @returns all group data for DAO
 */
function getAllGroupsData() {
    var groupData = {moduleGroupList};
    
    return groupData;
}

/**
 * 
 * @param {*} studentID SRN to be added
 * @param {*} groupID group where the student will be added
 */
function addMember (studentID, groupID) {
    moduleGroupList[getGroupIndex(groupID)]["members"].push(studentID);
}

/**
 * 
 * @param {*} studentID SRN to be removed
 * @param {*} groupID groupID to remove the student from
 * @returns Nothing, just avoids unnecessary iterations and exception.
 * @throws exception if student not found in group.
 */
function removeMember (studentID, groupID) {
    var groupIndex = getGroupIndex(groupID);
    for(var i = 0; i < moduleGroupList[groupIndex]["members"].length; i++) {
        if(moduleGroupList[groupIndex]["members"][i] == studentID) {
            moduleGroupList[groupIndex]["members"].splice(i, 1);
            return; //To avoid unnecessary iterations.
        }
    }
    throw new Error("Student not found in group, this point should be unreachable.");
}

/**
 * 
 * @param {*} groupID groupID to search
 * @returns the index of the group given its ID
 * @throws exception if group not found.
 */
function getGroupIndex (groupID) {
    var currIndex = 0;
    for(var i = 0; i < moduleGroupList.length; i++) {
        if(moduleGroupList[i]["groupID"] == groupID) {
            return currIndex;
        } else {
            currIndex++;
        }
    }
    throw new Error("Group not found, this point should be unreachable.");
}