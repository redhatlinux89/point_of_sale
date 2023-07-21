<?php

require('conexion.php');

$sql = "SELECT m.No_Mesa,Descripcion,Ocupacion,
   IFNULL((select Nombre_Clientes from pedidos where No_Mesa=m.No_Mesa and Cuenta_cerrada=0 LIMIT 1),0)AS Nombre_Clientes
FROM `mesas` as m
WHERE Zona={$_POST['zona']}";

//SELECT No_Mesa,Descripcion,Ocupacion FROM `mesas` WHERE Zona={$_POST['zona']}";
mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['No_Mesa'];
    $div=$row['Descripcion'];
    $ocup=$row['Ocupacion'];
    $nom_cliente=$row['Nombre_Clientes'];
    $clientes[] = array('No_Mesa'=> $pre,'Descripcion'=> $div,'Ocupacion'=> $ocup, 'Nombre_Clientes'=> $nom_cliente);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
