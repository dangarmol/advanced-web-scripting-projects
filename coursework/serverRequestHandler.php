<?php
    function get_module_students() {
		$levelInput = "ERROR";
		$codeInput = "ERROR";
		//In case the user doesn't input any characters.

		if (isset($_GET['levelInput'])) $levelInput=$_GET['levelInput'];
		if (isset($_GET['codeInput'])) $codeInput=$_GET['codeInput'];

		if(is_numeric($levelInput) && is_numeric($codeInput) && $levelInput >= 4 &&
		$levelInput <= 7 && $codeInput >= 1000 && $codeInput <= 9999) {
			$url = "http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroups.php?moduleCode=";
			$fullURL = $url.$levelInput."com".$codeInput; //Concatenates strings together
			$jsonOutput = file_get_contents($fullURL);
		} else {
			$jsonOutput = '{"error": "true"}';
		}

		return $jsonOutput;
	}
?>