<?php

// Data functions to access model information

// list of parks
function get_parks_list()
{ 
	global $db;
	return $db;
}

// info on one specified park		
function get_park_details($id)
{ 
	global $db;
	$info = array('name'=>"unknown product #$id in " . count($db) . "records");
	foreach( $db as $product ) {
		if ($product['id'] == $id )
			return $product;
		}
	return $info;
} 

// Array implementation of database info
$db = 
array(	
	array(
		'id' => 1, 
		'name' => 'Oakmere Park', 
		'region' => 'Hertsmere'),
	array(
		'id' => 3, 
		'name' => 'Bushey Rose Garden', 
		'region' => 'Hertsmere'),
	array(
		'id' => 2, 
		'name' => 'Hazel Grove', 
		'region' => 'Welwyn Hatfield'),
	array(
		'id' => 4, 
		'name' => 'Stanborough Park', 
		'region' => 'Welwyn Hatfield'));


?>
