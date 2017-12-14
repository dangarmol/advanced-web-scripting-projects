<?php
	require_once("connectServerDatabase.php");
	$student = get_all_students();
?>

<html>
<head>
    <meta charset=UTF-8>
	<title>Student groups</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<h1>Student Groups for 6COM9051: More Web Scripting</h1>

	<label for "selectedGroup">Show
	<select id=selectedGroup>
		<option>All students</option>
		<option value="690511">Group 1</option>
		<option value="690513">Group 2</option>
	</select>
	<h3>Selected Students</h3>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>SRN</th>
				<th>Allocated Group</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Jo 1</td>
				<td>Bloggs</td>
				<td>97xx08xx01</td>
				<td>Group 1</td>
			</tr>
			<tr>
				<td>Joe 3</td>
				<td>Bliggs</td>
				<td>97xx08xx04</td>
				<td>Group 2</td>
			</tr>
		</tbody>

		<?php
			// Create connection
			$conn = new mysqli("localhost", "root", "", "goParks");

			// Execute query
			$q = 'select displayName, council, atmosphere from parks';
			$result = mysqli_query($conn,$q);

			// Output results in table rows
			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo 	"<tr>
								<td>".$row["displayName"]."</td>
								<td>".$row["council"]."</td>
								<td>".$row["atmosphere"]."</td>
							</tr>";
				}
			} else {
				echo 	"<tr>
							<td>No parks found</td>
						</tr>";
			}
		?>
	</table>
</body>
</html>