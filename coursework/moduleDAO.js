//This is a Data Access Object to retrieve any data from the database.

/**
 * This function loads all of the information necessary for the website to run:
 * Module, student and group information.
 * 
 * @param {*} moduleObject This argument MUST be null when loading from JSON,
 *                         but MUST NOT be null when loading from service.
 */
function loadAllInfo(moduleObject) { 
    if(!moduleObject["error"]) {
        if(origin == "json" && moduleObject == null) {
            loadModuleInfo(module);
            loadStudentInfo(module);
            loadGroupInfo(module);
        } else if(origin == "service" && moduleObject != null) {
            loadModuleInfo(moduleObject);
            loadStudentInfo(moduleObject);
            loadGroupInfo(moduleObject);
        } else {
            console.log("Error handling the loading information. This should never be reached.");
        }
        return true;
    } else {
        return false;
    }
}

/**
 * Loads the information from the "module" object (@ JSON_Database.js)
 * or the information retrieved from the service
 * to moduleTransfer.js
 */
function loadModuleInfo(moduleObject) {
    moduleCode = moduleObject["code"];
    moduleName = moduleObject["name"];
    moduleCohort = moduleObject["cohort"];
}

/**
 * Loads the information from the "module" object (@ JSON_Database.js)
 * or the information retrieved from the service
 * to studentTransfer.js
 */
function loadStudentInfo(moduleObject) {
    moduleStudentList = new Array(); //Creates an array of "student" objects
    var allStudents = moduleObject["students"];
    for (var currentStudentID in allStudents) {
        moduleStudentList.push(allStudents[currentStudentID]);
        moduleStudentList[moduleStudentList.length - 1].srn = currentStudentID;
    }
}

/**
 * Loads the information from the "module" object (@ JSON_Database.js)
 * or the information retrieved from the service
 * to groupTransfer.js
 */
function loadGroupInfo(moduleObject) {
    moduleGroupList = new Array(); //Creates an array of "group" objects
    var allGroups = moduleObject["groups"];
    for (var currentGroupID in allGroups) {
        moduleGroupList.push(allGroups[currentGroupID]);
        moduleGroupList[moduleGroupList.length - 1].groupID = currentGroupID;
    }
}

//"Upload group info" will be here.