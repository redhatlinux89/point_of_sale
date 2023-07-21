<?php
require('conexion.php');



//variables POST
  $plat1=$_POST['platillo1'];
  $plat2=$_POST['platillo2'];
  $plat3=$_POST['platillo3'];
  $plat4=$_POST['platillo4'];
  $plat5=$_POST['platillo5'];
  $plat6=$_POST['platillo6'];
  $bebida1=$_POST['bebida1'];
  $bebida2=$_POST['bebida2'];
  $bebida3=$_POST['bebida3'];
  $bebida4=$_POST['bebida4'];
  $bebida5=$_POST['bebida5'];
  $snack1=$_POST['snaks1'];
  $snack2=$_POST['snaks2'];
  $snack3=$_POST['snaks3'];
  $snack4=$_POST['snaks4'];
  $snack5=$_POST['snaks5'];
  $snack6=$_POST['snaks6'];
  $snack7=$_POST['snaks7'];
  $snack8=$_POST['snaks8'];
  $mesa=$_POST['mesa'];
  $tip_cuenta=$_POST['cuenta_tipo'];


//date_format($date, 'Y-m-d H:i:s');
  //$date = new DateTime(getdate([date]));
$fecha_actual="'".date('Y-m-d H:i:s')."'";
//$hora = (localtime(time(),true));
//$fecha_actual="'".$hora["tm_year"]."-".$hora["tm_mon"]."-".$hora["tm_mday"]." ".$hora["tm_hour"].":".$hora["tm_min"].":".$hora["tm_sec"]."'";//localtime(''

$vacio="' '";


     $update="UPDATE mesas SET Ocupacion=1 where No_Mesa=$mesa";
              mysql_query($update,$link) or die('Error. '.mysql_error());


       // inserta platillas simepre y cuando no venga en cero o vacio el parametro para cada caso
       IF($plat1>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat1), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat1), $plat1, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat1), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($plat2>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat2), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat2), $plat2, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat2), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($plat3>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat3), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat3), $plat3, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat3), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($plat4>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat4), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat4), $plat4, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat4), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($plat5>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat5), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat5), $plat5, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat5), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($plat6>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat6), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat6), $plat6, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat6), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
       }

       // inserta bebidas simepre y cuando no venga en cero o vacio el parametro para cada caso
       IF($bebida1>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$bebida1), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$bebida1), $bebida1, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$bebida1), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($bebida2>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$bebida2), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$bebida2), $bebida2, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$bebida2), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($bebida3>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$bebida3), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$bebida3), $bebida3, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$bebida3), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($bebida4>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$bebida4), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$bebida4), $bebida4, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$bebida4), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }
        IF($bebida5>0){
        $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$bebida5), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$bebida5), $bebida5, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$bebida5), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
        mysql_query($sql,$link) or die('Error. '.mysql_error());
        }

        // inserta snaks simepre y cuando no venga en cero o vacio el parametro para cada caso
        IF($snack1>0){
         $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                 VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$snack1), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$snack1), $snack1, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$snack1), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
         mysql_query($sql,$link) or die('Error. '.mysql_error());
         }
         IF($snack2>0){
         $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                 VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$snack1), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$snack2), $snack2, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$snack2), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
         mysql_query($sql,$link) or die('Error. '.mysql_error());
         }
         IF($snack3>0){
         $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                 VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$snack3), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$snack3), $snack3, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$snack3), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
         mysql_query($sql,$link) or die('Error. '.mysql_error());
         }
         IF($snack4>0){
         $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                 VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$snack4), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$snack4), $snack4, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$snack4), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,1)";
         mysql_query($sql,$link) or die('Error. '.mysql_error());
         }
         IF($snack5>0){
         $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero)
                 VALUES ($mesa, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$snack5), (SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$snack5), $snack5, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$snack5), $vacio,0 , 0, 0, $tip_cuenta, $fecha_actual ,0)";
         mysql_query($sql,$link) or die('Error. '.mysql_error());
         }


    //  $sql = "INSERT INTO pedidos (No_Mesa, Division, Sub_Divicion, Producto, Precio, Atendido, Fecha_Pedido, Mesero)
            //  VALUES (4, 1, 2, $plat2, 1, $nom, '2018-12-01' ,1)";

  // TERMINA DIVICIONES DE COMIDAS
//registra los datos del empleados
  //$sql="INSERT INTO empleados (nombre, apellido, web) VALUES ('$nom', '$ape', '$web')";
//mysql_query($sql,$con) or die('Error. '.mysql_error());


?>
