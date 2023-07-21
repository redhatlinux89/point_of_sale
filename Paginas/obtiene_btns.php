<?php


require('conexion.php');

$sql = "SELECT ID_Sub_Divicion,Descripcion FROM `cl_sub_diviciones` WHERE Status=0 and id_Divicion={$_POST['id_Divicion']}";
mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array();

while($row = mysqli_fetch_array($result))
{
    $pre=$row['ID_Sub_Divicion'];
    $div=$row['Descripcion'];

    $clientes[] = array('ID_Sub_Divicion'=> $pre,'Descripcion'=> $div);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
