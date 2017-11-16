<?php
if ($area_required == "*") {
	$areaName = "Hertfordshire";
} else {
	$areaName = $area_required;
}
?>

<html>
<head>
<title>goParks - <?php echo( $areaName ); ?></title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<h1>goParks</h1>
<p>We have lots of great places for you to visit in <?= $areaName ?> ... or choose a different area</p>

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
