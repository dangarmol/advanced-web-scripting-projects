//This is a Data Access Object to retrieve any data from the database.

//This should be either "json" or "service"
var origin;

//For debugging purposes. Set to true to display all debug traces in the console and check that everything works.
var daoDebug = false;

/**
 * This function loads all of the information necessary for the website to run:
 * Module, student and group information.
 * 
 * @param {*} moduleObject This argument MUST be null when loading from JSON,
 *                         but MUST NOT be null when loading from service.
 */
function loadAllInfo(moduleObject) { 
    if(moduleObject == null || !moduleObject["error"]) {
        if(origin == "json" && moduleObject == null) {
            loadModuleInfo(module);
            loadStudentInfo(module);
            loadGroupInfo(module);
        } else if(origin == "service" && moduleObject != null) {
            loadModuleInfo(moduleObject);
            loadStudentInfo(moduleObject);
            loadGroupInfo(moduleObject);
        } else {
            if(daoDebug) {
                console.log("Error handling the loading information. This should never be reached.");
            }
        }
        return true;
    } else {
        return false;
    }
}

/**
 * Loads the information from the "module" object (@ JSON_Database.js)
 * or the information retrieved from the service to moduleTransfer.js
 * @param {*} moduleObject The JSON information returned from the service or included JS document
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
 * @param {*} moduleObject The JSON information returned from the service or included JS document
 */
function loadStudentInfo(moduleObject) {
    studentChanges = new Array(); //Creates the student group changes array.
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
 * @param {*} moduleObject The JSON information returned from the service or included JS document
 */
function loadGroupInfo(moduleObject) {
    moduleGroupList = new Array(); //Creates an array of "group" objects
    var allGroups = moduleObject["groups"];
    for (var currentGroupID in allGroups) {
        moduleGroupList.push(allGroups[currentGroupID]);
        moduleGroupList[moduleGroupList.length - 1].groupID = currentGroupID;
    }
}

/**
 * Creates a single object given every object.
 */
function uploadAllData() {
    var allData = {};

    $.extend(allData, getAllModuleData());
    $.extend(allData, getAllStudentData());
    $.extend(allData, getAllGroupsData());

    if(daoDebug) {
        checkServiceIsUp();
    }

    sendAJAXPostRequest(allData);
}

/**
 * Sends a post request to... http://homepages.herts.ac.uk/~comqgrs/ads/moduleGroupUpdates.php
 * @param {*} contents The contents of the request.
 */
function sendAJAXPostRequest(contents) {
    var url = "http://homepages.herts.ac.uk/~comqgrs/ads/moduleGroupUpdates.php";
    var xhr = new XMLHttpRequest();

    if (!xhr) {
        throw new Error("Cannot create XMLHTTP instance.");
    }

    if(daoDebug) {
        console.log("The following object will be sent:");
        console.log(contents);

        //contents = "Request test string.";
        /*
            This string was used to check that the request was being returned properly as it can be seen
            setting daoDebug to true and uncommenting this, since logging the Object result doesn't log the contents
            of the Object but "Object object" instead, therefore this was tested to make this function simpler.
        */
    }

    xhr.onreadystatechange = function processResponse() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if(daoDebug) {
                    console.log("The request has been successful.");
                }
            } else {
                if(daoDebug) {
                    console.log(xhr.status);
                }
                throw new Error("There was a problem with the request.");
            }	
        }
    };

    xhr.open("POST", url);
    //Send the proper header information along with the request
    //xhr.setRequestHeader("Student-Info-JSON", "application/x-www-form-urlencoded");
    xhr.send(contents);

    //console.log(xhr.responseText);
}


///////////////////////////////////////////////////////////////////////////////////
//THE FOLLOWING FUNCTIONS HAVE BEEN ADDED FOR THE SERVICE TO BE TESTED           //
//AND TAKEN FROM THE SERVICE PROVIDED.                                           //
//(http://homepages.herts.ac.uk/~comqgrs/ads/moduleGroupUpdatesServiceTest.html) //
///////////////////////////////////////////////////////////////////////////////////
function checkServiceIsUp() {
	makeNewRequest("http://homepages.herts.ac.uk/~comqgrs/ads/moduleGroupUpdates.php", "POST", processResponse);
	// http://localhost:8080/studentGroups/uploadModuleGroups.php"
 }

function makeNewRequest(url, requestType, callbackFunction) {
	console.log("Making a request to ... " + url);
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      console.log('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
	body = "Data to upload: ... service check for ADS coursework at "
	time = new Date
	body += time.toGMTString()

    httpRequest.onreadystatechange = callbackFunction;
    httpRequest.open(requestType, url);
    httpRequest.send(body);
}

function processResponse() {
	console.log("Call back to process response: state = " + httpRequest.readyState + "; status = " + httpRequest.status);
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log("Request returned, displaying response data ... \n--------\n");
		console.log(httpRequest.responseText);

		// display success message(s), based on element success class
		for (e of document.getElementsByClassName("success")){
			e.style.display = "block"		
		}	

	  } else {
		console.log('There was a problem with the request.');

 		// display failure message(s), based on element success class
		for (e of document.getElementsByClassName("failure")){
			e.style.display = "block"		
		}
      }
	
	  // display results div
	  //document.getElementById("result").style.display = "block"		
    }
  }