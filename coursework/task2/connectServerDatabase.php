 <?php
    $serverAddr = "91.121.109.58"; //Is port needed? (Redirect port to match the MySQL port)
    $username = "adsuser";
    $password = "1234512345";
    $database = "ADSStudents";

    // Create connection
    $conn = new mysqli($serverAddr, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    //THIS IS NOT NEEDED FOR NOW BUT MIGHT BE IMPLEMENTED IN THE FUTURE
?>