<?php

include("conexion.php");


$mesas = $_POST['mesa'];
$tip_cuenta = $_POST['cuenta_tipo'];


     $update="UPDATE pedidos SET Atendido=1 where No_Mesa=$mesas and Cuenta_individual=$tip_cuenta and Atendido=0";
              mysql_query($update,$link) or die('Error. '.mysql_error());

?>
