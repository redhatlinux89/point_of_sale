<?php

       require("conexion.php");

      $div="'".$_POST['divicion']."'";
      $desc="'".$_POST['descp']."'";
      $mesa=$_POST['mesa'];
      $tip_cuenta=$_POST['cuenta_tipo'];

  /*  $div="'CERVEZA'";
      $desc="'CORONA'";
        $mesa=1;
        $tip_cuenta=5;*/




      /*$sql = "DELETE FROM Pedidos where ID_Pedido = (SELECT IDS from (SELECT ID_Pedido as IDS FROM pedidos
      where Producto=(select ID_Producto from cl_productos where Descripcion=$desc
        and Sub_Divicion=(SELECT ID_Sub_Divicion from cl_sub_diviciones where Descripcion=$div))
        LIMIT 1)x)";*/
        $sql = "UPDATE Pedidos set Eliminados=1 where ID_Pedido = (SELECT IDS from (SELECT ID_Pedido as IDS FROM pedidos
        where Producto=(select ID_Producto from cl_productos where Descripcion=$desc
          and Sub_Divicion=(SELECT ID_Sub_Divicion from cl_sub_diviciones where Descripcion=$div) and Status=0 )
          and Eliminados=0 and No_Mesa=$mesa and Cuenta_individual=$tip_cuenta and Cuenta_cerrada=0
          LIMIT 1)x)";

      mysqli_query($link,$sql);

        /* $sql3 = "DELETE FROM pedidos where ID_Pedido=(select ids from(
         SELECT ID_Pedido as ids FROM pedidos where Descrp_Nvo_Ingred=$desc and Sub_Divicion=203 LIMIT 1)x)";*/
         $sql3 = "UPDATE Pedidos set Eliminados=1 where ID_Pedido=(select ids from(
          SELECT ID_Pedido as ids FROM pedidos where Descrp_Nvo_Ingred=$desc and Sub_Divicion=203 and Eliminados=0
          and No_Mesa=$mesa and Cuenta_individual=$tip_cuenta and Cuenta_cerrada=0 LIMIT 1)x)";

       mysqli_query($link,$sql3);

    



$sql2 = "SELECT count(pro.Descripcion) as conteo,cls.Descripcion as Divicion,pro.Descripcion,sum(p.Precio) as tot, p.Nombre_Clientes,IFNULL(p.Con_o_Sin_nombre,0)as Con_o_Sin_nombre FROM cl_productos as pro
    left join pedidos as p on p.Producto= pro.ID_Producto
    left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
    WHERE p.No_Mesa=$mesa and (p.Atendido=0 or p.Atendido=1) and p.Cuenta_individual=$tip_cuenta
          and p.Cuenta_cerrada=0 and p.Producto<>203 and p.Eliminados=0
          GROUP by cls.Descripcion,pro.Descripcion,p.Precio,p.Nombre_Clientes,p.Con_o_Sin_nombre
        union all
         SELECT count(p.Descrp_Nvo_Ingred),cls.Descripcion as Divicion,p.Descrp_Nvo_Ingred,sum(p.Precio_Nvo_Ingred),p.Nombre_Clientes,p.Con_o_Sin_nombre FROM cl_productos as pro
    left join pedidos as p on p.Producto= pro.ID_Producto
    left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
    WHERE p.No_Mesa=$mesa and (p.Atendido=0 or p.Atendido=1)  and p.Cuenta_individual=$tip_cuenta
          and p.Cuenta_cerrada=0 and p.Producto=203 and p.Eliminados=0
GROUP by cls.Descripcion,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred,p.Nombre_Clientes,p.Con_o_Sin_nombre
union all
SELECT 	0,0,'total',SUM(x.tot),x.Nombre_Clientes,IFNULL(x.Con_o_Sin_nombre,0)as Con_o_Sin_nombre from(
SELECT count(pro.Descripcion) as conteo,cls.Descripcion as Divicion,pro.Descripcion,sum(p.Precio) as tot,p.Nombre_Clientes,p.Con_o_Sin_nombre FROM cl_productos as pro
    left join pedidos as p on p.Producto= pro.ID_Producto and p.Eliminados=0
    left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
    WHERE p.No_Mesa=$mesa and (p.Atendido=0 or p.Atendido=1) and p.Cuenta_individual=$tip_cuenta
          and p.Cuenta_cerrada=0 and p.Producto<>203 and p.Eliminados=0
          GROUP by cls.Descripcion,pro.Descripcion,p.Precio,p.Nombre_Clientes,p.Con_o_Sin_nombre
        union all
SELECT count(p.Descrp_Nvo_Ingred),cls.Descripcion as Divicion,p.Descrp_Nvo_Ingred,sum(p.Precio_Nvo_Ingred),p.Nombre_Clientes,p.Con_o_Sin_nombre FROM cl_productos as pro
    left join pedidos as p on p.Producto= pro.ID_Producto
    left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
    WHERE p.No_Mesa=$mesa and (p.Atendido=0 or p.Atendido=1)  and p.Cuenta_individual=$tip_cuenta
          and p.Cuenta_cerrada=0 and p.Producto=203 and p.Eliminados=0
GROUP by cls.Descripcion,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred,p.Nombre_Clientes,p.Con_o_Sin_nombre
) as x";

     mysqli_set_charset($link, "utf8"); //formato de datos utf8

     if(!$result = mysqli_query($link, $sql2)) die();

     $clientes = array(); //creamos un array

     while($row = mysqli_fetch_array($result))
     {
       $pre=$row['tot'];
       $des=$row['Descripcion'];
       $div=$row['Divicion'];
       $cont=$row['conteo'];
       $client=$row['Nombre_Clientes'];
       $s_n_nom=$row['Con_o_Sin_nombre'];

         $clientes[] = array('tot'=> $pre, 'Descripcion'=> $des, 'Divicion'=> $div, 'conteo'=> $cont, 'Nombre_Clientes'=> $client, 'Con_o_Sin_nombre'=> $s_n_nom);

     }


     
     $json_string = json_encode($clientes);
     echo $json_string;




    ?>
