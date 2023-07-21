<?php
if(!empty($_POST['mesa'])){
    $data = array();

    require('conexion.php');

$sql = "SELECT Ocupacion FROM mesas WHERE Zona={$_POST['mesa']}";

mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['Ocupacion'];

    $clientes[] = array('Ocupacion'=> $pre);

}

$json_string = json_encode($clientes);
echo $json_string;
}

?>
