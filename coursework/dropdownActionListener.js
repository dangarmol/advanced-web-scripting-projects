document.getElementById("selectedGroup").onchange = function () {
    setHTMLStudentTable(document.getElementById("selectedGroup").selectedOptions[0].value);
}

window.onload = function() { //On load, displays all of the elements.
    setHTMLStudentTable("all");
};