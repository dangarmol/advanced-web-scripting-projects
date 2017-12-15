/**
 * 
 * @param {*} groupID 
 */
function createHTMLStudentTable (groupID) {
    var selectedStudents = getStudentListByGroup(groupID);
    var studentTableHTML = "";

    if(selectedStudents.length > 0) {
        studentTableHTML += "<h3>List of ";
        if(groupID == "all") {
            studentTableHTML += "all students:</h3>";
        } else {
            studentTableHTML += "students from group ";
            studentTableHTML += getGroupName(groupID);
            studentTableHTML += ":</h3>";
        }

        studentTableHTML += "<table> <thead> <tr>";
        studentTableHTML += "<th>First Name</th> <th>Last Name</th> <th>SRN</th> <th>Allocated Group</th>";
        studentTableHTML += "</tr> </thead> <tbody>";


        for(var i = 0; i < selectedStudents.length; i++) {
            var currentStudent = selectedStudents[i];

            var studentRowString = "<tr> <td>";
            studentRowString += currentStudent.firstName;
            studentRowString += "</td> <td>";
            studentRowString += currentStudent.lastName;
            studentRowString += "</td> <td>";
            studentRowString += currentStudent.srn;
            studentRowString += "</td> <td>";
            studentRowString += getGroupName(currentStudent.allocatedGroup);
            studentRowString += "</td> </tr>";
            studentTableHTML += studentRowString;
        }

        studentTableHTML += "</tbody> </table>";
    } else {
        studentTableHTML += "<h3>There are no students to display</h3>"; //Add bootstrap format here.
    }
    
    return studentTableHTML;
}

/**
 * 
 */
function createGroupSelectionDropdownList() {
    var dropdownListHTML = "<option value=all>All students</option>";

    var groupList = getFullGroupList();

    if(groupList.length > 0) {
        for(var i = 0; i < groupList.length; i++) {
            var dropdownElement = "<option value=";
            dropdownElement += groupList[i].groupID;
            dropdownElement += ">";
            dropdownElement += groupList[i].name;
            dropdownElement += "</option>";
            dropdownListHTML += dropdownElement;
        } 
    } else {
        studentTableHTML += "<h3>There are no groups to display in the dropdown list!</h3>"; //Add bootstrap format here.
    }
    return dropdownListHTML;
}