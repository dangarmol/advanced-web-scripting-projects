var currentView; //Stores the view to be displayed. (GroupID or "all")
var currentToggle; //Stores the current view type for the groups that should be displayed. ("new" or "old")

function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

function setGroupFilterDropdown () {
    document.getElementById("selectedGroup").innerHTML = createGroupFilterDropdown();
}

function setGroupListDropdown () {
    document.getElementById("selectGroupFromList").innerHTML = createGroupListDropdown();
}

//GroupID or "all"
function setStudentListDropdown (groupID) {
    document.getElementById("selectStudentFromList").innerHTML = createStudentListDropdown(groupID);
}

function setHTMLStudentTableError () {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTableError();
}

function setModifiedMessage () {
    document.getElementById("modifiedMessageDiv").innerHTML = createModifiedMessage();
}

function handleErrorView () {
    //Removes the elements and only leaves the error message on screen.
    document.getElementById("backButtonDiv").innerHTML = "";
    document.getElementById("sortByDropdownDiv").innerHTML = "";
    document.getElementById("modifyStudentDiv").innerHTML = "";
    document.getElementById("toggleChangesDiv").innerHTML = "";
    document.getElementById("uploadChangesDiv").innerHTML = "";
    document.getElementById("selectedGroupDiv").innerHTML = "";
}