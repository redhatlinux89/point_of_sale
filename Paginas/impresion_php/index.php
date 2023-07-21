<?php

// PASO 1= INSTALAR Y COMPARTIR IMPRESORA CON EL MISMO NOMBRE DE LA IMPRESORA
//INICIAR CON INDEX.PHP
//URL https://parzibyte.me/blog/2017/09/10/imprimir-ticket-en-impresora-termica-php/

require __DIR__ . '/autoload.php'; //Nota: si renombraste la carpeta a algo diferente de "ticket" cambia el nombre en esta línea
use Mike42\Escpos\Printer;
use Mike42\Escpos\EscposImage;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

/*
	Este ejemplo imprime un
	ticket de venta desde una impresora térmica
*/

date_default_timezone_set('America/Mexico_City');
/*
	Una pequeña clase para
	trabajar mejor con
	los productos
	Nota: esta clase no es requerida, puedes
	imprimir usando puro texto de la forma
	que tú quieras
*/

class Producto{


	public function __construct($nombre, $precio, $cantidad){
		$this->nombre = $nombre;
		$this->precio = $precio;
		$this->cantidad = $cantidad;
	}
}



/*CONSULTA Y CONEXION A LA BASE DE DATOS*/

//if(!empty($_POST['user_id']) && !empty($_POST['tipo'])){
    $data = array();
    //database details
    $dbHost     = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName     = 'restaurant_charros';

    //create connection and select DB
    $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    if($db->connect_error){
        die("Unable to connect database: " . $db->connect_error);
    }
	//}
	$Producto = array();
	//generamos la consulta


									$sql = "SELECT divs.Descripcion as divicion,cls.Descripcion as Divicion_tipo,pro.Descripcion,(p.Precio * count(*)) as Precio,count(*) as cantidad,
										        p.No_mesa,Nombre_Clientes FROM cl_productos as pro
										        left join pedidos as p on p.Producto= pro.ID_Producto
										        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
									            left JOIN cl_diviciones as divs on divs.ID_Divicion=cls.id_Divicion
										        WHERE p.No_Mesa={$_POST['mesa']} and (p.Atendido=1 or p.Atendido=0) and p.Cuenta_individual={$_POST['tipo_cuenta']}
										              and p.Cuenta_cerrada=0 and p.Producto<>203 and p.Eliminados=0
									                  group by cls.ID_Sub_Divicion,cls.Descripcion,pro.Descripcion,p.Precio
									                  UNION
									 SELECT divs.Descripcion as divicion,cls.Descripcion as Divicion_tipo,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred,1 as cantidad,
										p.No_mesa, Nombre_Clientes FROM cl_productos as pro
										        left join pedidos as p on p.Producto= pro.ID_Producto
										        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
									            left JOIN cl_diviciones as divs on divs.ID_Divicion=cls.id_Divicion
										        WHERE p.No_Mesa={$_POST['mesa']} and (p.Atendido=1 or p.Atendido=0)and p.Cuenta_individual={$_POST['tipo_cuenta']}
										              and p.Cuenta_cerrada=0 and p.Producto=203 and p.Eliminados=0";


	mysqli_set_charset($db, "utf8"); //formato de datos utf8
	if(!$result = mysqli_query($db, $sql)) die();
	$con_platillos=false;
	$con_bebidas=false;
	$con_extras=false;
  $con_snak=false;
	$mesa_num;
	$nombre_cliente;

	while($row = mysqli_fetch_array($result))
	{
		if($row["divicion"]=="PLATILLOS" ){

		if($con_platillos==false){
			$con_platillos=true;
			$Prod=new Producto("...................".$row['divicion']."...................",0 , 0);
			$productos[] = $Prod;
		}
		$Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
}


			if($row["divicion"]=="BEBIDAS"){

			  if($con_bebidas==false){
				$con_bebidas=true;
				$Prod=new Producto("...................".$row['divicion']."...................",0 , 0);
				$productos[] = $Prod;
			}
			  $Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
  }

	if($row["divicion"]=="EXTRAS"){

		if($con_extras==false){
		$con_extras=true;
		$Prod=new Producto("...................".$row['divicion']."...................",0 , 0);
		$productos[] = $Prod;
	}
		$Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
}

if($row["divicion"]=="SNAKS"){

	if($con_snak==false){
	$con_snak=true;
	$Prod=new Producto("...................".$row['divicion']."...................",0 , 0);
	$productos[] = $Prod;
}
	$Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
}

if($row["divicion"]=="CIGARROS"){

	if($con_snak==false){
	$con_snak=true;
	$Prod=new Producto("...................".$row['divicion']."...................",0 , 0);
	$productos[] = $Prod;
}
	$Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
}

        //$Prod=new Producto($row["Descripcion"],$row["Precio"],$row["cantidad"]);

		$productos[] = $Prod;

   $mesa_num = $row["No_mesa"];
   $nombre_cliente = $row["Nombre_Clientes"];
/*
	Vamos a simular algunos productos. Estos
	podemos recuperarlos desde $_POST o desde
	cualquier entrada de datos. Yo los declararé
	aquí mismo
*/

}// TERMINA WHILE

//update para cerrar la cuenta

//$update="UPDATE pedidos SET Cuenta_cerrada=1 where No_Mesa={$_POST['mesa']} and Cuenta_individual={$_POST['tipo_cuenta']}";
//mysqli_query($db, $update); original

//$update="UPDATE pedidos SET Cuenta_cerrada=1, Folio=(SELECT cont FROM (SELECT IFNULL(max(Folio),0)+1 as cont FROM `pedidos` WHERE No_Mesa={$_POST['mesa']} and Cuenta_individual={$_POST['tipo_cuenta']} and Cuenta_cerrada=1)x) where Folio=0
//and No_Mesa={$_POST['mesa']} and Cuenta_individual={$_POST['tipo_cuenta']}"; tiket max por mesa

$update="UPDATE pedidos SET Cuenta_cerrada=1, Folio=(SELECT cont FROM (SELECT IFNULL(max(Folio),0)+1 as cont FROM `pedidos` WHERE Cuenta_cerrada=1)x) where Folio=0
and No_Mesa={$_POST['mesa']} and Cuenta_individual={$_POST['tipo_cuenta']}"; // tiket max en genearl
mysqli_query($db, $update);

$update2="UPDATE mesas SET Ocupacion=0 where No_Mesa={$_POST['mesa']}";
mysqli_query($db, $update2);
/*$productos = array(
		new Producto("...................BEBIDAS...................",0 , 0),
		new Producto("cerveza corona", 22, 2),
		new Producto("Tequila Herradura copa", 10, 1),
		new Producto("...................PLATILLOS.................",0 , 0),
		new Producto("Camarones a la diabla", 10, 1),
		new Producto("Filete frito", 22, 2),
		/*
			El nombre del siguiente producto es largo
			para comprobar que la librería
			bajará el texto por nosotros en caso de
			que sea muy largo
		*/
	//	new Producto(" saladas con un sabor muy salado y un precio excelente", 10, 1.5),

	//);

/*
	Aquí, en lugar de "POS-58" (que es el nombre de mi impresora)
	escribe el nombre de la tuya. Recuerda que debes compartirla
	desde el panel de control
*/

$nombre_impresora = "POS 02";


$connector = new WindowsPrintConnector($nombre_impresora);
$printer = new Printer($connector);


/*
	Vamos a imprimir un logotipo
	opcional. Recuerda que esto
	no funcionará en todas las
	impresoras

	Pequeña nota: Es recomendable que la imagen no sea
	transparente (aunque sea png hay que quitar el canal alfa)
	y que tenga una resolución baja. En mi caso
	la imagen que uso es de 250 x 250
*/

# Vamos a alinear al centro lo próximo que imprimamos
$printer->setJustification(Printer::JUSTIFY_CENTER);

/*
	Intentaremos cargar e imprimir
	el logo
*/
try{
	$logo = EscposImage::load("logo.png", false);
    $printer->bitImage($logo);
}catch(Exception $e){/*No hacemos nada si hay error*/}

/*
	Ahora vamos a imprimir un encabezado
*/

$printer->text("Aldama #25, 47750 Atotonilco el Alto" . "\n");
$printer->text("Tel 33-10-65-72-79" . "\n");
#La fecha también
$printer->text(date("Y-m-d H:i:s") . "\n");

$printer->text("MESA ". $mesa_num ."       Cliente: ".$nombre_cliente."\n");


/*
	Ahora vamos a imprimir los
	productos
*/

# Para mostrar el total
$total = 0;
foreach ($productos as $producto) {
	//$total += $producto->cantidad * $producto->precio;
	$total += $producto->precio;

	/*Alinear a la izquierda para la cantidad y el nombre*/
	if($producto->cantidad==0){
		$printer->setJustification(Printer::JUSTIFY_LEFT);
	    $printer->text($producto->nombre . "\n");
	}
	else{
	$printer->setJustification(Printer::JUSTIFY_LEFT);
    $printer->text($producto->cantidad . " " . $producto->nombre . "\n");
	}

if($producto->cantidad==0){

	}
	else{
	    /*Y a la derecha para el importe*/
	    $printer->setJustification(Printer::JUSTIFY_RIGHT);
	    $printer->text(' $' . $producto->precio . "\n");
		}
}

/*
	Terminamos de imprimir
	los productos, ahora va el total
*/
$printer->text("--------\n");
$printer->setTextSize(2, 2);
$printer->text("TOTAL: $". $total ."\n");


/*
	Podemos poner también un pie de página
*/
$printer->setTextSize(1, 1);
$printer->text("\n");
$printer->text("GRACIAS POR SU PREFERENCIA.                  ");



/*Alimentamos el papel 3 veces*/
$printer->feed(3);

/*
	Cortamos el papel. Si nuestra impresora
	no tiene soporte para ello, no generará
	ningún error
*/
$printer->cut();

/*
	Por medio de la impresora mandamos un pulso.
	Esto es útil cuando la tenemos conectada
	por ejemplo a un cajón
*/
$printer->pulse();

/*
	Para imprimir realmente, tenemos que "cerrar"
	la conexión con la impresora. Recuerda incluir esto al final de todos los archivos
*/
$printer->close();



?>
