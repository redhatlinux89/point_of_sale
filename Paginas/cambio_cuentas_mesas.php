<?php
if(!empty($_POST['mesa_nueva'])  && !empty($_POST['mesa_original'])){

include("conexion.php");



$update="UPDATE pedidos SET No_Mesa={$_POST['mesa_nueva']}
         where No_Mesa={$_POST['mesa_original']} and Cuenta_cerrada=0";
         mysql_query($update,$link) or die('Error. '.mysql_error());

$update="UPDATE mesas SET Ocupacion=1
                  where No_Mesa={$_POST['mesa_nueva']}";
                  mysql_query($update,$link) or die('Error. '.mysql_error());

$update="UPDATE mesas SET Ocupacion=0
                  where No_Mesa={$_POST['mesa_original']}";
                  mysql_query($update,$link) or die('Error. '.mysql_error());


}
 ?>
