<?php


require('conexion.php');

$sql = "SELECT Nombre_Clientes FROM pedidos WHERE Cuenta_cerrada=0 AND Nombre_Clientes='prueba_indv'
LIMIT 1 Zona={$_POST['zona']}";
mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array();

while($row = mysqli_fetch_array($result))
{
    $pre=$row['Nombre_Clientes'];

    $clientes[] = array('Nombre_Clientes'=> $pre);

}


$json_string = json_encode($clientes);
echo $json_string;

 ?>
