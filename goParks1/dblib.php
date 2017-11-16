<?php
//require_once( "DB.php" );
//$dsn = 'mysql://root:password@localhost/shopcart';
//$db =& DB::Connect( $dsn, array() );
//if (PEAR::isError($db)) { die($db->getMessage()); }

//function get_db() { global $db; return $db; }

// Array implementation of database info
$db = 
array(	
	array(
		'name'=>'Code Generation in Action',
		'price'=>49.99,
		'id'=>'9781930110977'),
	array(
		'name'=>'Podcasting Hacks',
		'price'=>29.99,
		'id'=>'9780596100667'),
	array(
		'name'=>'PHP Hacks',
		'price'=>29.99,
		'id'=>'9780596101398'));


function get_products()
{ 
// PHP database implementation
//	global $db; 
//	$res = $db->query( "SELECT * FROM product", array() );  
//	$out = array(); 
//	if ( $res != null )
//		while( $res->fetchInto( $row, DB_FETCHMODE_ASSOC ) ) { $out []= $row; } 
//	return $out; 

// Array implementation	
	global $db;
	return $db;
				
}

function product_info( $id )
{ 

// PHP database implementation
//	global $db;
//
//	$res = $db->query( "SELECT * FROM product WHERE id=?",
//		array( $id ) );
//
//	if ( $res != null )
//	{
//		$res->fetchInto( $row, DB_FETCHMODE_ASSOC );
//		return $row;
//	}
//	return null; 

// Array implementation
// make sure reference to $db variable point to global version of variable
	global $db;
	$info = array('name'=>"unknown product #$id: records=" . count($db));
	foreach( $db as $product ) {
		if ($product['id'] == $id )
			return $product;
		}
	return $info;
} 
?>
