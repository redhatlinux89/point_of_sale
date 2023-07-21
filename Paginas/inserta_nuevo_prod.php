<?php

require('conexion.php');

$des = "'".$_POST['descripcion']."'";
  $div=$_POST['divicion'];
  $sub_div=$_POST['subdivicion'];
  $pre=$_POST['precio'];

        $sql="INSERT INTO cl_productos (ID_Producto, Divicion, Sub_Divicion, Precio, Descripcion)
                VALUES (Null,$div, $sub_div, $pre, $des)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());


?>
