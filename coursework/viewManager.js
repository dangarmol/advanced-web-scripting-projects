function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

function setGroupSelectionDropdownList () {
    document.getElementById("selectedGroup").innerHTML = createGroupSelectionDropdownList();
}

function setGroupListDropdown () {
    document.getElementById("selectGroupFromList").innerHTML = createGroupListDropdown();
}

function setStudentListDropdown () {
    document.getElementById("selectStudentFromList").innerHTML = createStudentListDropdown();
}