//Application Service for "group"

//Returns an array with all of the group objects.
function getServiceGroupList() {
    var groupList = new Array();
    var allGroups = moduleStudentList["groups"];
    for (var currentGroupID in allGroups) {
        groupList.push(allGroups[currentGroupID]);
        groupList[groupList.length - 1].groupID = currentGroupID;
    }
    return groupList;
}

//Returns the name of a group given its groupID.
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

    //If it is not found...
    return "ERROR"; 
}