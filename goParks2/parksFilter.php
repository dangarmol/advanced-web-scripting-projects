<?php

// get data on parks from wherever
require_once( "parksData.php" );
$parks = get_parks_list();

// get filter(s) from web address / request
if(isset($_GET["area"])) {
	$area_required = $_GET["area"];
} else {
	$area_required = "*";
}

echo "<!-- data filtered for area = " . $area_required . " -->";


function get_parks_in_region() {

	// access park list and filters
	global $parks, $area_required;
	
	// if no filter specified, return all parks
	if ($area_required == "*") {
		return $parks;
	}
	
	// .... otherwise start to build results array
	$output = array(); 	

	// add each park to output if it matches 
	foreach( $parks as $park ) {
		if ($park['region'] == $area_required )
			$output []= $park;
		}
	
	// return matching list
	return $output;
}

$parks = get_parks_in_region();

include("parksDisplayTemplate.php");
?>