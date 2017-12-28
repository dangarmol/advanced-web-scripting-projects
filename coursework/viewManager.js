var currentView; //Should store the view to be displayed. (GroupID or "all")

function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

function setGroupSelectionDropdownList () {
    document.getElementById("selectedGroup").innerHTML = createGroupSelectionDropdownList();
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

function handleErrorView () {
    //Removes the elements and only leaves the error message.
    document.getElementById("backButton").innerHTML = "";
    document.getElementById("sortByDropdownDiv").innerHTML = "";
    document.getElementById("modifyStudentDiv").innerHTML = "";
    document.getElementById("toggleChangesDiv").innerHTML = "";
    document.getElementById("uploadChangesDiv").innerHTML = "";
}