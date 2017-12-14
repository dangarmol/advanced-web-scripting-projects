<?php
	require_once("studentDAO.php");
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<h1>Student Groups for 6COM9051: More Web Scripting</h1>

	<h3>Write the level and module you want to get the student list from:</h3>
	<p>Fill the blanks so it is in the format "XcomYYYY"</p>

	<form action="getInfo.php">
		<input style="width:15px;" type="text" name="level" maxlength="1"/>
		<span>com</span>
		<input style="width:40px;" type="text" name="code" maxlength="4"/> <!-- Add this feature to comment -->

		<button input class="searchFieldALign" type=submit>Go!</button>
	</form>

	<?php
		$jsonData = get_students_from_group("6com1234");
		console_log($jsonData);
	?>
</body>
</html>