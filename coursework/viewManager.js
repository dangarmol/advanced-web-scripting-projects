function setHTMLStudentTable (groupID) {
    document.getElementById("studentTableDiv").innerHTML = createHTMLStudentTable(groupID);
}

function setDropdownList () {
    document.getElementById("selectedGroup").innerHTML = createDropdownList();
}