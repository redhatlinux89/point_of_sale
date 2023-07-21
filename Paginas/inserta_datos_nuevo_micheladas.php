<?php

//Configuracion de la conexion a base de datos
$usuario = "root";
$contrasena = "";  // en mi caso tengo contraseña pero en casa caso introducidla aquí.
$servidor = "localhost";
$basededatos = "micheladas_charros";


$con = mysql_connect($servidor, $usuario, $contrasena);
mysql_select_db($basededatos, $con);

//variables POST
date_default_timezone_set('America/Mexico_City');

  $plat1=$_POST['valor_producto'];
  $mesa=$_POST['mesa'];
  $tip_cuenta=$_POST['cuenta_tipo'];
  $nom_cliente="'".$_POST['cliente']."'";
  $desc_nvo_prod="'".$_POST['nvo_prod']."'";
  $prec_nvo_prod="'".$_POST['nvo_precio']."'";

/*  $plat1=3;
  $mesa=1;
  $tip_cuenta=5;
  $nom_cliente="'yy'";
  $desc_nvo_prod="'gg'";
  $prec_nvo_prod="'12'"; */

//date_format($date, 'Y-m-d H:i:s');
  //$date = new DateTime(getdate([date]));(date("Y-m-d H:i:s") . "\n");
$fecha_actual="'".date('Y-m-d H:i:s')."'";
//$hora = (localtime(time(),true));
//$fecha_actual="'".$hora["tm_year"]."-".$hora["tm_mon"]."-".$hora["tm_mday"]." ".$hora["tm_hour"].":".$hora["tm_min"].":".$hora["tm_sec"]."'";//localtime(''

$vacio="' '";
$nombre_;
if($nom_cliente==="''"){
  $nombre_=1;
}else{
  $nombre_=1;
}


     $update="UPDATE mesas SET Ocupacion=1 where No_Mesa=$mesa";
              mysql_query($update,$con) or die('Error. '.mysql_error());


       // inserta platillas simepre y cuando no venga en cero o vacio el parametro para cada caso

        $sql = "INSERT INTO pedidos (Folio, No_Mesa, Nombre_Clientes, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero,Con_o_Sin_nombre,Eliminados)
                VALUES (0,$mesa, $nom_cliente, (SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat1),(SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat1), $plat1, (SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat1), $desc_nvo_prod,$prec_nvo_prod, 0, 0, $tip_cuenta, $fecha_actual ,0,$nombre_,0)";
              /*  $sql = "INSERT INTO pedidos (Folio, No_Mesa, Nombre_Clientes, Division, Sub_Divicion, Producto, Precio, Descrp_Nvo_Ingred, Precio_Nvo_Ingred, Atendido, Cuenta_cerrada, Cuenta_individual, Fecha_Pedido, Mesero,Con_o_Sin_nombre,Eliminados)
                        VALUES ((SELECT cont FROM (SELECT IFNULL(max(Folio),0)+1 as cont FROM `pedidos` WHERE No_Mesa=$mesa and Cuenta_individual=$tip_cuenta and Cuenta_cerrada=1)x),$mesa, 'g',(SELECT Divicion FROM `cl_productos` WHERE ID_Producto=$plat1),(SELECT Sub_Divicion FROM `cl_productos` WHERE ID_Producto=$plat1), $plat1,(SELECT Precio FROM `cl_productos` WHERE ID_Producto=$plat1),$desc_nvo_prod,$prec_nvo_prod, 0, 0, $tip_cuenta,$fecha_actual ,0,$nombre_,0)";
             */
        mysql_query($sql,$con) or die('Error. '.mysql_error());

// consulta en json_encode

$data = array();
//database details
$dbHost     = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName     = 'micheladas_charros';

//create connection and select DB
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if($db->connect_error){
    die("Unable to connect database: " . $db->connect_error);
}

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

mysqli_set_charset($db, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($db, $sql2)) die();

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


//Creamos el JSON
//https://ejemplocodigo.com/ejemplo-php-crear-y-leer-json-de-una-tabla-mysql/
$json_string = json_encode($clientes);
echo $json_string;



//http://soyautodidacta.com/2013/03/insertar-datos-en-mysql-con-php-usando-ajax-para-evitar-recargar-la-pagina/
?>
