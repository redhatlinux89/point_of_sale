<?php
if(!empty($_POST['mesa'])){
    $data = array();
   
    require('conexion.php');

$sql = "SELECT count(*) as conteo FROM `pedidos` WHERE Cuenta_cerrada=0 and No_Mesa={$_POST['mesa']}";

mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['conteo'];

    $clientes[] = array('conteo'=> $pre);

}

$json_string = json_encode($clientes);
echo $json_string;
}

?>
