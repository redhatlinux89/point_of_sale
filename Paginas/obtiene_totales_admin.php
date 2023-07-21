<?php


require('conexion.php');

$fecha_ini="'".$_POST['fecha_ini']."'";
$fecha_finn="'".$_POST['fecha_fin']."'";
//$sql = "SELECT No_Mesa,Descripcion,Ocupacion FROM `mesas` WHERE Zona={$_POST['zona']}";
$sql = "SELECT ((IFNULL(SUM(precio),0))+
(SELECT IFNULL(SUM(Precio_Nvo_Ingred),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0 and Division =4)) as Total,
(SELECT SUM(precio) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0 and Division=1) as platillos,
(SELECT IFNULL(SUM(precio),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0 and Division=2) as bebidas,
(SELECT IFNULL(SUM(precio),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0 and Division=3) as snaks,
(SELECT IFNULL(SUM(Precio_Nvo_Ingred),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0 and Division=4) as otros,
((SELECT IFNULL(SUM(precio),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=1 and Division in(1,2,3))
+
(SELECT IFNULL(SUM(Precio_Nvo_Ingred),0) as total FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=1 and Division=4))
as anuladas
FROM `pedidos` where Date(Fecha_Pedido) BETWEEN $fecha_ini and $fecha_finn and Eliminados=0
and Division in(1,2,3)";

mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $tot=$row['Total'];
    $pla=$row['platillos'];
    $beb=$row['bebidas'];
    $sna=$row['snaks'];
    $otr=$row['otros'];
    $anul=$row['anuladas'];

    $clientes[] = array('Total'=> $tot,'platillos'=> $pla,'bebidas'=> $beb,'snaks'=> $sna,'otros'=> $otr,'anuladas'=> $anul);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
