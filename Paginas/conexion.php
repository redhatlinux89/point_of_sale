<?php
$usuario = 'root';
$contrasena = '';  
$servidor = 'localhost';
$basededatos = 'restaurant_charros';



$link = new mysqli($servidor, $usuario, $contrasena, $basededatos);
if($link->connect_error){
    die("Unable to connect database: " . $link->connect_error);
}



?>
