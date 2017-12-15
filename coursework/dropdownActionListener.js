document.getElementById("selectedGroup").onchange = function () {
    setHTMLStudentTable(document.getElementById("selectedGroup").selectedOptions[0].value);
}