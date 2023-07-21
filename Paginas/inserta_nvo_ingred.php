<?php

require('conexion.php');

$desc_nvo="'".$_POST['descr_nvo']."'";
$precio_nvo=$_POST['prec_nvo'];
$mesa=$_POST['mesa'];
$tip_cuenta=$_POST['cuenta_tipo'];

echo $desc_nvo;

$fecha_actual="'".date('Y-m-d H:i:s')."'";


// validacion para adicion de ingredinetes
//IF($desc_nvo!="" && $precio_nvo !=""){
    $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
          VALUES ($mesa, 4, 203, 203, 0,$desc_nvo, $precio_nvo, 0, 0,$tip_cuenta, $fecha_actual ,0)";
  mysql_query($sql,$link) or die('Error. '.mysql_error());
//}


 ?>
