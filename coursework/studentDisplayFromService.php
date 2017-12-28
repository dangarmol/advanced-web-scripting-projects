<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="style-service.css">
</head>

<body>
	<h1>Student Groups Tool</h1>

	<div id="backButtonDiv">
		<h3>
			<a href=index.html>&#8617 Go back to the main menu!</a>
		</h3>
	</div>

	<h3>Fill in the blanks with the level and module you want to get the student list from:</h3>
	<p><b><i>It should be in the format "XcomYYYY"</b></i></p>

	<form action="showStudentList.php">
		<input style="width:15px;" type="text" name="levelInput" maxlength="1"/>
		<span><i>COM</i></span>
		<input style="width:40px;" type="text" name="codeInput" maxlength="4"/>
		<button input type=submit id=moduleButton class="btn btn-primary"><i class="fa fa-search"></i> Go!</button>
	</form>
</body>
</html>