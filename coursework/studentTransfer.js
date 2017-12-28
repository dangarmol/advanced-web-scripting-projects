//Transfer object for the current students information

var moduleStudentList;

/**
 * This is a delta kind of object. That means that it doesn't reflect the current state of the
 * students, but instead it's only a list of the changes, a diferential, hence its name.
 * 
 * It should have the following format:
 * studentChanges = Array({
 *  "studentID",
 *  "previousGroupID"
 * });
 * 
 * Example:
 * studentChanges = [{"srn" : "16234504", "previousGroupID" : "690511"},
 *                   {"srn" : "19398004", "previousGroupID" : "690526"},
 *                   {"srn" : "13544964", "previousGroupID" : "690548"}]
 */
var studentChanges;

/* TODO Implement this with a HashMap to get a better efficiency.
Otherwise, complexity while loading the list would be O(n^2) in the worst cases,
with HashMap it would improve to O(n). */

/**
 * 
 * @param {*} studentID 
 * @returns
 * @throws 
 */
function getCurrentGroup(studentID) {
    for(var i = 0; i < moduleStudentList.length; i++) {
        if(moduleStudentList[i].srn == studentID) {
            return moduleStudentList[i].allocatedGroup;
        }
    }
    throw new exception("The student has not been found. This point should be unreachable.");
}

/**
 * 
 * @param {*} studentID 
 * @returns 
 */
function getOldGroup(studentID) {
    for(var i = 0; i < studentChanges.length; i++) {
        if(studentChanges[i].srn == studentID) {
            return studentChanges[i].previousGroupID;
        }
    }
    return null;
    //Null represents that the student has never changed groups.
}

/**
 * When calling this function, it must have been checked that both the studentID and oldGroupID exist,
 * otherwise, this could cause consistency issues.
 * @param {*} studentID 
 * @param {*} oldGroupID 
 */
function setOldGroup(studentID, oldGroupID) {
    studentChanges.push({srn : studentID, previousGroupID : oldGroupID});
}

/**
 * This function only sets the new group. The old group for the student must have been saved previously,
 * otherwise, it will be lost after the update.
 * @param {*} studentID 
 * @param {*} newGroupID 
 * @throws //TODO Add to every function that throws an exception.
 */
function setCurrentGroup(studentID, newGroupID) {
    for(var i = 0; i < moduleStudentList.length; i++) {
        if(moduleStudentList[i].srn == studentID) {
            moduleStudentList[i].allocatedGroup = newGroupID;
            return; //To avoid unnecessary iterations and not throw any exception.
        }
    }
    throw new exception("The student has not been found. This point should be unreachable.");
}

function removeFromStudentChanges(studentID) {
    for(var i = 0; i < studentChanges.length; i++) {
        if(studentChanges[i].srn == studentID) {
            studentChanges.splice(i, 1);
            return; //To avoid unnecessary iterations and not throw any exception.
        }
    }
    throw new exception("The student has not been found. This point should be unreachable.");
}