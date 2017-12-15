function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

function setGroupSelectionDropdownList () {
    document.getElementById("selectedGroup").innerHTML = createGroupSelectionDropdownList();
}