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

	function upload_results() {
		$url = 'http://homepages.herts.ac.uk/%7Ecomqgrs/ads/moduleGroupUpdates.php';

        $data = array('key1' => 'value1', 'key2' => 'value2');

		$options = array(
			'http' => array(
				'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
				'method'  => 'POST',
				'content' => http_build_query($data)
			)
		);
		$context  = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		if ($result === FALSE) {
            return "ERROR";
        }

        var_dump($result);
        
        return "SUCCESS";
	}
?>