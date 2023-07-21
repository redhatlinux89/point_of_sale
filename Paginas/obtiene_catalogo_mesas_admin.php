<?php


require('conexion.php');
/*$tipo="'".$_POST['Tipo']."'";
$fecha_ini="'".$_POST['fecha_ini']."'";
$fecha_finn="'".$_POST['fecha_fin']."'";
*/


$sql = "SELECT No_Mesa, Descripcion FROM mesas WHERE No_Mesa<=26";



mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $tot=$row['No_Mesa'];
    $pla=$row['Descripcion'];

    $clientes[] = array('No_Mesa'=> $tot,'Descripcion'=> $pla);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
