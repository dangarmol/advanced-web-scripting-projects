<?php
	function get_students_from_group() {
		$levelInput = "Error";
		$codeInput = "Error"; //TODO Throw exceptions.

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
			<a href=studentDisplayDynamical.php>&lt-- Go back!</a>
		</h2>
	</div>
	<div id="sortByDropdownDiv">
		<p>Sort by... <select id=sortByDropdown>
			<option value=none>None</option>
			<option value=srn>Student Registration Number</option>
			<option value=fname>First name</option>
			<option value=lname>Last name</option>
			<option value=gname>Group Name</option>
		</select>
		</p>
	</div>
	<div id="studentTableDiv"></div> <!-- Where the list of students or result will be shown -->

	<script type="text/javascript" src="studentViewFactory.js"></script>
	<script type="text/javascript" src="studentListTransfer.js"></script>
	<script type="text/javascript" src="studentViewManager.js"></script>
	<script type="text/javascript">
		window.onload = function() {
			moduleInfo = JSON.parse(<?php echo json_encode(get_students_from_group()) ;?>);
			origin = "service";
			setHTMLStudentTable("all");
		};

		document.getElementById("sortByDropdown").onchange = function () {
			sortedStudentList = getSortedStudentList(document.getElementById("sortByDropdown").selectedOptions[0].value);
			setHTMLStudentTable("all"); //For the table to refresh
		} //Sets the action listener for the dropdown list.
	</script>
</body>
</html>