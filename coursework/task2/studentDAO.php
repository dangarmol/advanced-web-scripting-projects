<?php
	function get_students_from_group($groupName) {
		$url = "http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroups.php?moduleCode=";
		$url = $url.$groupName; //Concatenates strings together
		$json = file_get_contents($url);
		$rawData = json_decode($json);
		
		// return output data to function call
		return $rawData;
	}

	function console_log( $data ){
		echo '<script>';
		echo 'console.log('. json_encode( $data ) .')';
		echo '</script>';
	}
?>