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
echo date("Y-m-d H:i:s");

//echo $NuevaFecha;

/*
	Una pequeña clase para
	trabajar mejor con
	los productos
	Nota: esta clase no es requerida, puedes
	imprimir usando puro texto de la forma
	que tú quieras
*/
$events=[];

class Producto{


	public function __construct($nombre, $precio, $cantidad){
		$this->nombre = $nombre;
		$this->precio = $precio;
		$this->cantidad = $cantidad;
	}
}



/*CONSULTA Y CONEXION A LA BASE DE DATOS*/
$st='';
	//try {

		require('../conexion.php');
		
		header('Content-Type: application/json');
/*
		
		mysqli_query($link ,"SET @opcion=5");
		mysqli_query($link ,"SET @entero1=1");
		mysqli_query($link ,"SET @entero2=5");
		mysqli_query($link ,"SET @entero3=0");
		mysqli_query($link ,"SET @entero4=0");
		mysqli_query($link ,"SET @cadena1='k'");
		mysqli_query($link ,"SET @cadena2='k'");
		mysqli_query($link ,"SET @cadena3='k'");
		
		*/
		
	
		
		                                    mysqli_query($link ,"SET @opcion=5");
											 mysqli_query($link ,"SET @entero1=".$_POST['mesa']."");
											 mysqli_query($link ,"SET @entero2=".$_POST['tipo_cuenta']."");
											 mysqli_query($link ,"SET @entero3=0");
											 mysqli_query($link ,"SET @entero4=0");
											 mysqli_query($link ,"SET @cadena1='k'");
											 mysqli_query($link ,"SET @cadena2='k'");
											 mysqli_query($link ,"SET @cadena3='k'");
											 
		
										   $result = mysqli_query($link,"call opera_base(@opcion,
																							 @entero1,
																							 @entero2,
																							 @entero3,
																							 @entero4,
																							 @cadena1,
																							 @cadena2,
																							 @cadena3
																							 );
																	  ");
		
		
		
		
		while($row = mysqli_fetch_assoc($result))
		{
			
			$Prod=new Producto($row["Divicion_tipo"].' '.$row["Descripcion"],$row["Precio"],$row["cantidad"]);
			$productos[] = $Prod;	
			
			$st=$row["RESULTADO"];
			
			//$events[]  = array('resultado'=> $st);
			//$events[] = array('ID_Divicion'=> $div, 'Descripcion'=> $des, 'Status'=> $st);
		}
		
		
	
		
		
		/*} catch (Exception $e) {
			echo 'Excepción capturada: ',  $e->getMessage(), "\n";
			
		}*/
		//echo 'hola '.$st;
 if($st===1 || $st==='1'){ // si es 1 es que hay platillo para cocina y se imprime el tiket, en caso de que no no hace nada
//echo "imprime";
$mesa_num;
	

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
$mesa_num = $_POST['mesa'];

//$printer->text("Charros Restaurante & Bar" . "\n");
$mifecha=date("Y-m-d H:i:s");
$NuevaFecha = strtotime ( '-1 hour' , strtotime ($mifecha) ) ; 
$NuevaFecha = date ( 'Y-m-d H:i:s' , $NuevaFecha); 

$printer->text("\n");
$printer->text("TIKET DE COCINA"."\n");
$printer->text("\n");
$printer->text("PEDIDO MESA  ".$mesa_num. "\n");
$printer->text("Fecha: ".$NuevaFecha . "\n");
$printer->text("\n");
$printer->text("\n");
#La fecha también



/*
	Ahora vamos a imprimir los
	productos
*/

# Para mostrar el total
$total = 0;
foreach ($productos as $producto) {
	$total += $producto->cantidad * $producto->precio;

	/*Alinear a la izquierda para la cantidad y el nombre*/
	if($producto->cantidad==0){
		$printer->setJustification(Printer::JUSTIFY_LEFT);
	    $printer->text($producto->nombre . "\n");
	}
	else{
	$printer->setJustification(Printer::JUSTIFY_LEFT);
    $printer->text($producto->cantidad . " " . $producto->nombre ."  $". $producto->precio. "\n");
	echo $producto->nombre."  ";
	}

if($producto->cantidad==0){

	}
	else{
	    /*Y a la derecha para el importe*/
	    $printer->setJustification(Printer::JUSTIFY_RIGHT);
	   // $printer->text(' $' . $producto->precio . "\n");
		}
}

/*
	Terminamos de imprimir
	los productos, ahora va el total
*/



/*
	Podemos poner también un pie de página
*/
$printer->text("\n");




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

} // termina if que evalua si se imprime o no el tiket de cocina





?>
