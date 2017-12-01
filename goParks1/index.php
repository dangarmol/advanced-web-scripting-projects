<html>
<head>
<title>goParks</title>
<link rel="stylesheet" type="text/css" href="style.css"> <!-- Specifies to use the CSS file -->
</head>
<body>
<h1>goParks</h1>
<p>We have lots of great places for you to visit.  Come and try one!</p>

<table>
	<tr>
		<th>Park</th>
		<th>Area</th>
	</tr>

	<?php
	// Create connection
	$conn = new mysqli("localhost", "root", "", "goParks");

	// Execute query
	$q = 'select displayName, council from parks';
	$result = mysqli_query($conn,$q);

	// Output results in table rows
	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			echo "<tr><td>".$row["displayName"]."</td><td>".$row["council"]."</td></tr>";
		}
	} else {
		echo "<tr><td>No parks found</td></tr>";
	}
	?>

</table>

<br>
<form action="http://localhost/ADS/goParks1/parksFilter.php">
	<select name="area">
		<option value="*" selected="selected">All</option>
		<option value="Hertsmere">Hertsmere</option>
		<option value="Welwyn Hatfield">Welwyn Hatfield</option>
	</select>
	<input value="Search!" type="submit">
</form>

</body>
</html>
