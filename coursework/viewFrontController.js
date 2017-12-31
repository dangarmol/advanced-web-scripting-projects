var currentView; //Stores the view to be displayed. (GroupID or "all")
var currentToggle; //Stores the current view type for the groups that should be displayed. ("new" or "old")

/**
 * 
 * @param {*} groupID could be groupID or "all"
 */
function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

/**
 * 
 */
function setGroupFilterDropdown () {
    document.getElementById("selectedGroup").innerHTML = createGroupFilterDropdown();
}

/**
 * 
 */
function setGroupListDropdown () {
    document.getElementById("selectGroupFromList").innerHTML = createGroupListDropdown();
}

/**
 * 
 * @param {*} groupID must be either a GroupID or "all"
 */
function setStudentListDropdown (groupID) {
    document.getElementById("selectStudentFromList").innerHTML = createStudentListDropdown(groupID);
}

/**
 * 
 */
function setHTMLStudentTableError () {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTableError();
}

/**
 * 
 */
function setModifiedMessage () {
    document.getElementById("modifiedMessageDiv").innerHTML = createModifiedMessage();
}

/**
 * Removes the elements and only leaves the error message on screen.
 */
function handleErrorView () {
    document.getElementById("backButtonDiv").innerHTML = "";
    document.getElementById("sortByDropdownDiv").innerHTML = "";
    document.getElementById("modifyStudentDiv").innerHTML = "";
    document.getElementById("toggleChangesDiv").innerHTML = "";
    document.getElementById("uploadChangesDiv").innerHTML = "";
    document.getElementById("selectedGroupDiv").innerHTML = "";
}