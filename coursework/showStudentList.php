<?php
	function get_students_from_group() {
		$levelInput = "ERROR";
		$codeInput = "ERROR";
		//In case the user doesn't input any characters.

		if (isset($_GET['levelInput'])) $levelInput=$_GET['levelInput'];
		if (isset($_GET['codeInput'])) $codeInput=$_GET['codeInput'];

		if(is_numeric($levelInput) && is_numeric($codeInput) && $levelInput >= 4 &&
		$levelInput <= 7 && $codeInput >= 1000 && $codeInput <= 9999) {
			$url = "http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroups.php?moduleCode=";
			$fullURL = $url.$levelInput."com".$codeInput; //Concatenates strings together
			$jsonOutput = file_get_contents($fullURL);
		} else {
			$jsonOutput = '{"error": "true"}';
		}

		return $jsonOutput;
	}
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style-service.css">
</head>

<body>
	<div id="backButtonDiv">
		<h3>
			<a href=studentDisplayFromService.php>&#8617 Go back!</a>
		</h3>
	</div>

	<div id="selectedGroupDiv">
		<p>Show 
			<select id="selectedGroup">
				<option value=*>Loading groups...</option> <!-- For it not to blink empty while loading -->
			</select>
		</p>
	</div>

	<div id="sortByDropdownDiv">
		<p>Sort by... <select id=sortByDropdown>
			<option value=srn>Student Registration Number</option>
			<option value=fname>First name</option>
			<option value=lname>Last name</option>
			<option value=gname>Group Name</option>
		</select>
		<button id=sortButton>Sort students</button>
		</p>
	</div>

	<div id="modifyStudentDiv">
		<p>Change student
			<select id=selectStudentFromList>
				<option value=*>Loading student list...</option>
			</select>
			to group
			<select id=selectGroupFromList>
				<option value=*>Loading group list...</option>
			</select>
			<button id=groupChangeButton>Change group</button>
		</p>
	</div>

	<div id="toggleChangesDiv">
		<button id=toggleChanges>Toggle new/old groups</button>
		<!-- TODO Change colour for groups that have been modified -->
	</div>

	<div id="uploadChangesDiv">
		<button id=uploadButton>Check and upload data</button>
	</div>

	<div id="modifiedMessageDiv"></div>

	<div id="studentTableDiv"></div> <!-- Where the list of students or result will be shown -->

	<script type="text/javascript" src="viewFactory.js"></script>
	<script type="text/javascript" src="viewManager.js"></script>
	<script type="text/javascript" src="studentTransfer.js"></script>
	<script type="text/javascript" src="groupTransfer.js"></script>
	<script type="text/javascript" src="moduleTransfer.js"></script>
	<script type="text/javascript" src="studentApplicationService.js"></script>
	<script type="text/javascript" src="groupApplicationService.js"></script>
	<script type="text/javascript" src="moduleDAO.js"></script>
	<script type="text/javascript">
		window.onload = function() {
			origin = "service";
			currentView = "all";
			currentToggle = "new";
			var correctLoad = loadAllInfo(<?php echo get_students_from_group();?>);
			if(correctLoad) {
				setHTMLStudentTable(currentView);
				setGroupFilterDropdown();
				setGroupListDropdown();
				setStudentListDropdown(currentView);
			} else {
				handleErrorView();
				setHTMLStudentTableError();
			}
		};

		document.getElementById("selectedGroup").onchange = function () {
			currentView = document.getElementById("selectedGroup").selectedOptions[0].value;
			setHTMLStudentTable(currentView);
			setStudentListDropdown(currentView);
		} //Sets the action listener for the group dropdown list.

		document.getElementById("sortButton").onclick = function () {
			sortStudentList(document.getElementById("sortByDropdown").selectedOptions[0].value);
			setHTMLStudentTable(currentView); //For the table to refresh
		} //Sets the action listener for the sorting button.

		document.getElementById("groupChangeButton").onclick = function () {
			var selectedStudentSRN = document.getElementById("selectStudentFromList").selectedOptions[0].value;
			var selectedGroupID = document.getElementById("selectGroupFromList").selectedOptions[0].value;
			changeStudentGroup(selectedStudentSRN, selectedGroupID);
			setHTMLStudentTable(currentView); //For the table to refresh
			setModifiedMessage();
		} //Sets the action listener for the group changing button.

		document.getElementById("toggleChanges").onclick = function () {
			if(currentToggle == "new") {
				currentToggle = "old";
			} else {
				currentToggle = "new";
			}

			setHTMLStudentTable(currentView);
		} //Sets the action listener for the toggleChanges button.

		document.getElementById("uploadButton").onclick = function () {
			
		} //Sets the action listener for the uploading button.
	</script>
</body>
</html>