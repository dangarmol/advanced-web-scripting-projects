function drawHTMLStudentTable (groupID) {
    var studentList;
    if(origin == "json") {
        if(groupID == "all")
            studentList = getFullStudentList();
        else
            studentList = getStudentListByGroup(groupID);
    } else if(origin == "service") {
        studentList = getServiceStudentList();
    }
    
    var studentTableHTML = "";

    if(studentList.length > 0) {
        studentTableHTML += "<h3>List of ";
        if(groupID == "all") {
            studentTableHTML += "all students:</h3>";
        } else {
            studentTableHTML += "students from group ";
            studentTableHTML += groupID;
            studentTableHTML += ":</h3>";
        }

        studentTableHTML += "<table> <thead> <tr>";
        studentTableHTML += "<th>First Name</th> <th>Last Name</th> <th>SRN</th> <th>Allocated Group</th>";
        studentTableHTML += "</tr> </thead> <tbody>";

        for(var i = 0; i < studentList.length; i++) {
            var currentStudent = studentList[i];
            var groupName;

            if(currentStudent.allocatedGroup == "690511")
                groupName = "Group 1";
            else if(currentStudent.allocatedGroup == "690513")
                groupName = "Group 2";
            else
                groupName = currentStudent.allocatedGroup;

            var studentRowString = "<tr> <td>";
            studentRowString += currentStudent.firstName;
            studentRowString += "</td> <td>";
            studentRowString += currentStudent.lastName;
            studentRowString += "</td> <td>";
            studentRowString += currentStudent.srn;
            studentRowString += "</td> <td>";
            studentRowString += groupName;
            studentRowString += "</td> </tr>";
            studentTableHTML += studentRowString;
        }

        studentTableHTML += "</tbody> </table>";
    } else {
        studentTableHTML += "<h3>There are no students to display</h3>"; //Add bootstrap format here.
    }
    
    return studentTableHTML;
}