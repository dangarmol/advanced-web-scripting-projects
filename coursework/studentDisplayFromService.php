<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style-service.css">
</head>

<body>
	<h1>Student Groups Tool</h1>

	<div id="backButtonDiv">
		<h3>
			<a href=index.html>&#8617 Go back to the main menu!</a>
		</h3>
	</div>

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