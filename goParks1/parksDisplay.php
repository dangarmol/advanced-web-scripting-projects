<?php
// get info on parks  
require_once( "parksData.php" );
$parks = get_parks_list();

// .. for display in HTML web page ...
?>

<html>
<head>
<title>goParks</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<h1>goParks</h1>
<p>We have lots of great places for you to visit.  Come and try one!</p>

<table>
	<tr>
		<th>Park</th>
		<th>Area</th>
	</tr>

	<?php foreach( $parks as $park ) { ?>
		<tr>
			<td><?php echo( $park['name'] ); ?></td>
			<td><?= $park['region'] ?></td>
		</tr>
	<?php } ?>

</table>
</body>
</html>
