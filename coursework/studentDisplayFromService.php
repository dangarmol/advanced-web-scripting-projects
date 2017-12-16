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

	<form action="showStudentList.php">
		<input style="width:15px;" type="text" name="levelInput" maxlength="1"/>
		<span>com</span>
		<input style="width:40px;" type="text" name="codeInput" maxlength="4"/>
		<button input type=submit id=moduleButton>Go!</button>
	</form>
</body>
</html>