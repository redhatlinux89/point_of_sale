<?php
if(!empty($_POST['mesa'])){
    $data = array();

   
    $dbHost     = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName     = 'restaurant_charros';

$con = mysql_connect($dbHost, $dbUsername, $dbPassword);
mysql_select_db($dbName, $con);


$update="UPDATE mesas SET Ocupacion=0 where No_Mesa={$_POST['mesa']}";
         mysql_query($update,$con) or die('Error. '.mysql_error());

       }

?>
