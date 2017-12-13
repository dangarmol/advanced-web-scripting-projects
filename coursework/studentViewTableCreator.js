function drawHTMLStudentTable (groupID) {
    var studentList;
    if(groupID == "all") {
        studentList = getFullStudentList();
    } else {
        studentList = getStudentListByGroup(groupID);
    }
    var studentTableHTML = "Student table should be created here";
    document.getElementById("studentTable").innerHTML = studentTableHTML;
}

document.getElementById("selectedGroup").onchange = function () {
    drawHTMLStudentTable(document.getElementById("selectedGroup").selectedOptions[0].value);
}