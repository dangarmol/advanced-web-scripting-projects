<?php
	function get_students_from_group() {
		$levelInput = "ERROR";
		$codeInput = "ERROR"; //TODO Throw exceptions.

		if (isset($_GET['levelInput'])) $levelInput=$_GET['levelInput'];
		if (isset($_GET['codeInput'])) $codeInput=$_GET['codeInput'];

		$url = "http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroups.php?moduleCode=";
		$fullURL = $url.$levelInput."com".$codeInput; //Concatenates strings together
		$json = file_get_contents($fullURL);

		return $json;
	}
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="backButton">
		<h2>
			<a href=studentDisplayFromService.php>&lt-- Go back!</a>
		</h2>
	</div>
	<div id="sortByDropdownDiv">
		<p>Sort by... <select id=sortByDropdown>
			<option value=srn>Student Registration Number</option>
			<option value=fname>First name</option>
			<option value=lname>Last name</option>
			<option value=gname>Group Name</option>
		</select>
		<button id=sortButton>Sort!</button>
		</p>
		
	</div>
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
			loadAllInfo(JSON.parse(<?php echo json_encode(get_students_from_group()) ;?>)); 
			setHTMLStudentTable("all");
		};

		document.getElementById("sortButton").onclick = function () {
			sortStudentList(document.getElementById("sortByDropdown").selectedOptions[0].value);
			setHTMLStudentTable("all"); //For the table to refresh
		} //Sets the action listener for the dropdown list.
	</script>
</body>
</html>