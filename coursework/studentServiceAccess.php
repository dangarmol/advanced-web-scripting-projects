<?php
	function get_students_from_group() {
		$levelInput = $_GET["levelInput"];
		$codeInput = $_GET["codeInput"];
		$url = "http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroups.php?moduleCode=";
		$url = $url.$levelInput."com".$codeInput; //Concatenates strings together
		$json = file_get_contents($url);
		//$rawData = json_decode($json);
		
		// return output data to function call
		return $json;
	}

	function console_log( $data ){
		echo '<script>';
		echo 'console.log('. json_encode( $data ) .')';
		echo '</script>';
	}
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="studentTableDiv"> </div> <!-- Where the list of students or result will be shown -->

	<script type="text/javascript" src="studentViewTableCreator.js"></script>
	<script type="text/javascript" src="studentListTransfer.js"></script>
	<script type="text/javascript" src="studentListJSON_DB.js"></script>
</body>
</html>