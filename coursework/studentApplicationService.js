//Application Service for "student"

//Returns an array with all of the student objects.
function getServiceStudentList() {
    var studentList = new Array();
    var allStudents = moduleStudentList["students"];
    for (var currentStudentID in allStudents) {
        studentList.push(allStudents[currentStudentID]);
        studentList[studentList.length - 1].srn = currentStudentID;
    }
    return studentList;
}

//Returns a student list sorted by what the parameter dictates.
function sortStudentListBy(sortBy) { //The parameter could be {none, srn, fname, lname, gname}
    /*var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
    keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]}) */
    //keysSorted is an array, not an object!
    if(originalStudentList == null) {
        originalStudentList = moduleStudentList; //Makes a copy of the original
    }
    switch(sortBy) {
        case "none":
            moduleStudentList = originalStudentList;
            break;
        case "srn":
        
            break;
        case "fname":

            break;
        case "lname":

            break;
        case "gname":

            break;
    }
    //moduleStudentList.sort();
}