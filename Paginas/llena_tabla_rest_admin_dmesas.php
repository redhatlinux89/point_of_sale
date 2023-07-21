<?php


require('conexion.php');

$mesa="'".$_POST['mesa']."'";
$fecha_ini="'".$_POST['fecha_ini']."'";
$fecha_finn="'".$_POST['fecha_fin']."'";




$sql = "SELECT p.Fecha_Pedido,p.Folio,p.Nombre_Clientes,count(pro.Descripcion) as conteo,cls.Descripcion as Divicion,pro.Descripcion,sum(p.Precio) as tot FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE   No_Mesa=$mesa and Eliminados=0 and Cuenta_cerrada=1
              and Date(p.Fecha_Pedido) BETWEEN date($fecha_ini) and date($fecha_finn)
              GROUP by cls.Descripcion,pro.Descripcion,p.Precio,p.Nombre_Clientes,p.Folio,
              p.Fecha_Pedido
              order by p.Folio";



mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $fecha=$row['Fecha_Pedido'];
    $folio=$row['Folio'];
    $nom_cli=$row['Nombre_Clientes'];
    $cont=$row['conteo'];
    $div=$row['Divicion'];
    $desc=$row['Descripcion'];
    $tot=$row['tot'];

    $clientes[] = array('Fecha_Pedido'=> $fecha,'Folio'=> $folio,'Nombre_Clientes'=> $nom_cli,'conteo'=> $cont, 'Divicion'=> $div,'Descripcion'=> $desc,'tot'=> $tot);

}

$json_string = json_encode($clientes);
echo $json_string;

 ?>
