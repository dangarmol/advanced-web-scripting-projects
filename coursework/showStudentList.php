<?php
	require_once ("serverRequestHandlerDAO.php");
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>

	<link rel="stylesheet" type="text/css" href="style-service.css">

	<!-- Added this https://silviomoreto.github.io/bootstrap-select/ -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<script>
		//Initialise the selectPicker dropdown boxes.
		$(document).ready(function () {
			$('.selectpicker').selectpicker();
		});
	</script>
</head>

<body>
	<div id="backButtonDiv">
		<h3>
			<a href=studentDisplayFromService.php>&#8617 Go back to module selection!</a>
		</h3>
	</div>

	<div id="selectedGroupDiv">
		<p><i class="fa fa-filter"></i> Filter
			<select id="selectedGroup" class=selectpicker data-width="auto">
				<option value=*>Loading groups...</option> <!-- For it not to blink empty while loading -->
			</select>
		</p>
	</div>

	<div id="sortByDropdownDiv">
		<p>Sort by...
			<select id=sortByDropdown class=selectpicker title="Select" data-width="auto">
				<option value=srn>Student Registration Number</option>
				<option value=fname>First name</option>
				<option value=lname>Last name</option>
				<option value=gname>Current Group Name</option>
			</select>
			<i class="fa fa-caret-right"></i>
			<button id=sortButton class="btn btn-primary"><i class="fa fa-sort-amount-asc"></i> Sort students</button>
		</p>
	</div>

	<div id="modifyStudentDiv">
		<p>Change student
			<select id=selectStudentFromList class=selectpicker data-width="auto" title="Student SRN" data-live-search="true">
				<option value=*>Loading student list...</option> <!-- For it not to blink empty while loading -->
			</select>
			to group
			<select id=selectGroupFromList class=selectpicker data-width="auto" title="Destination group" data-live-search="true">
				<option value=*>Loading group list...</option> <!-- For it not to blink empty while loading -->
			</select>
			<i class="fa fa-caret-right"></i>
			<button id=groupChangeButton class="btn btn-primary"><i class="fa fa-exchange"></i> Change group</button>
		</p>
	</div>

	<div id="toggleChangesDiv">
		<button id=toggleChanges class="btn btn-info"><i class="fa fa-eye"></i> Toggle new/old groups</button>
		<p id=currentDisplay>Displaying <span class=new-group><b>Current</b></span> groups.</p>
	</div>

	<div id="uploadChangesDiv">
		<button id=uploadButton class="btn btn-success"><i class="fa fa-paper-plane"></i> Check and upload all data</button>
	</div>

	<div id="modifiedMessageDiv"></div>

	<div id="studentTableDiv"></div> <!-- Where the list of students or result will be shown -->

	<script type="text/javascript" src="viewFactory.js"></script>
	<script type="text/javascript" src="viewFrontController.js"></script>
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
			var correctLoad = loadAllInfo(<?php echo get_module_students();?>);
			if(correctLoad) {
				setHTMLStudentTable(currentView);
				setGroupFilterDropdown();
				setGroupListDropdown();
				setStudentListDropdown(currentView);
			} else {
				handleErrorView();
				setHTMLStudentTableError();
			}

			//Refresh the dropdown boxes once the items have been added.
			$('.selectpicker').selectpicker('refresh');
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
			if(getCurrentGroup(selectedStudentSRN) != selectedGroupID) {
				setModifiedMessage();
			}
			changeStudentGroup(selectedStudentSRN, selectedGroupID);
			setHTMLStudentTable(currentView); //For the table to refresh
		} //Sets the action listener for the group changing button.

		document.getElementById("toggleChanges").onclick = function () {
			if(currentToggle == "new") {
				document.getElementById("currentDisplay").innerHTML = "<p id=currentDisplay>Displaying <span class=old-group><b>Original</b></span> groups.</p>";
				currentToggle = "old";
			} else {
				document.getElementById("currentDisplay").innerHTML = "<p id=currentDisplay>Displaying <span class=new-group><b>Current</b></span> groups.</p>";
				currentToggle = "new";
			}

			setHTMLStudentTable(currentView);
		} //Sets the action listener for the toggleChanges button.

		document.getElementById("uploadButton").onclick = function () {
			if(checkEmptyGroups()) {
				alert("There is at least one empty group. Please fix this before trying to upload the data.");
			} else {
				try {
					uploadAllData();
					alert("Module information successfully uploaded. You will be redirected to the module selection screen.");
					window.location.replace("studentDisplayFromService.php");
				} catch (error) {
					alert("There has been an error while uploading the data. Please try again.\n" + error);
				}
			}
		} //Sets the action listener for the upload button.
	</script>
</body>
</html>