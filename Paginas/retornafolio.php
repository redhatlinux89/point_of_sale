<?php

require('conexion.php');

$clientes2 = array();

$consultas_="SELECT max(Folio) as Folio,0 as valor FROM `pedidos` WHERE Cuenta_cerrada=1 and Folio<>0
and No_Mesa={$_POST['mesa']} and Cuenta_individual={$_POST['tipo_cuenta']}"; // tiket max en genearl

/*
$consultas_="SELECT max(Folio) as Folio,0 as valor FROM `pedidos` WHERE Cuenta_cerrada=1 and Folio<>0
and No_Mesa=28 and Cuenta_individual=5"; // tiket max en genearl*/
//mysqli_query($db, $consultas_);
if(!$result2 = mysqli_query($link, $consultas_)) die();
while($row = mysqli_fetch_array($result2))
{
    $fol=$row['Folio'];
    $val=$row['valor'];
    $clientes2[] = array('Folio'=> $fol,'valor'=> $val);

}

$json_string2 = json_encode($clientes2);
echo $json_string2;

 ?>
