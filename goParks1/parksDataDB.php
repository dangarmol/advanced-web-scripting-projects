<?php

// Create connection for use in all queries
require_once( "connect_db.php" );

function get_parks_list()
{
	// Access database connection from connect_db
	global $conn;

	// Execute query
	//$q = 'select id, displayName, council from parks'; //Original (database is designed without ID)
	$q = 'select displayName, council from parks';
	$result = mysqli_query($conn,$q);

	// Start to build results array
	$output = array(); 	

	// Add query results to array
	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			$park = 
				array(
					//'id' => $row["id"], //Not currently in database
					'name' => $row["displayName"], 
					'region' => $row["council"]);
			$output []= $park;
		}
	}
	
	// return output data to function call
	return $output;
}

function park_info( $id )
{ 
	// Access database connection from connect_db
	global $conn;

	// Execute query
	$q = 'select * from parks where id = ' . $id;
	$result = mysqli_query($conn,$q);

	if ( $result != null )
	{
		$result->fetchInto( $row, DB_FETCHMODE_ASSOC );
		return $row;
	}
	return null; 

// Array implementation
// make sure reference to $db variable point to global version of variable
/*	global $db;
	$info = array('name'=>"unknown product #$id: records=" . count($db));
	foreach( $db as $product ) {
		if ($product['id'] == $id )
			return $product;
		}
	return $info;
*/
} 
?>
