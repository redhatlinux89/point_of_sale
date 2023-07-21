<?php


require('conexion.php');

$sql = "SELECT ID_Producto, Descripcion FROM `cl_productos` WHERE Status=0 and Divicion={$_POST['id_Divicion']} and Sub_Divicion={$_POST['id_sub_Divicion']}";
mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array();

while($row = mysqli_fetch_array($result))
{
    $pre=$row['ID_Producto'];
    $div=$row['Descripcion'];

    $clientes[] = array('ID_Producto'=> $pre,'Descripcion'=> $div);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
