<?php


require('conexion.php');

$tipo="'".$_POST['Tipo']."'";
$fecha_ini="'".$_POST['fecha_ini']."'";
$fecha_finn="'".$_POST['fecha_fin']."'";


  $sql = "SELECT count(p.Descrp_Nvo_Ingred) as conteo,cls.Descripcion as Divicion,p.Descrp_Nvo_Ingred as Descripcion,sum(p.Precio_Nvo_Ingred) as tot FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE  (p.Atendido=0 or p.Atendido=1)
              and p.Cuenta_cerrada=1 and p.Producto=203 and p.Eliminados=0 and p.Division=4
              and Date(p.Fecha_Pedido) BETWEEN date($fecha_ini) and date($fecha_finn)
GROUP by cls.Descripcion,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred
     union all
     SELECT 	0,0,'total',SUM(x.tot) from(
 SELECT count(p.Descrp_Nvo_Ingred),cls.Descripcion as Divicion,p.Descrp_Nvo_Ingred,sum(p.Precio_Nvo_Ingred) as tot FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE  (p.Atendido=0 or p.Atendido=1)
              and p.Cuenta_cerrada=1 and p.Producto=203 and p.Eliminados=0 and p.Division=4
              and Date(p.Fecha_Pedido) BETWEEN date($fecha_ini) and date($fecha_finn)
GROUP by cls.Descripcion,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred ) as x";



mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
  $tot=$row['conteo'];
  $pla=$row['Divicion'];
  $beb=$row['Descripcion'];
  $sna=$row['tot'];

  $clientes[] = array('conteo'=> $tot,'Divicion'=> $pla,'Descripcion'=> $beb,'tot'=> $sna);

}

$json_string = json_encode($clientes);
echo $json_string;

?>
