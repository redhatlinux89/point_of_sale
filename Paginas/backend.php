<?php
try {

require('conexion.php');

header('Content-Type: application/json');
/*
mysqli_query($link ,"SET @opcion=6");
mysqli_query($link ,"SET @entero1=1");
mysqli_query($link ,"SET @entero2=5");
mysqli_query($link ,"SET @entero3=0");
mysqli_query($link ,"SET @entero4=0");
mysqli_query($link ,"SET @cadena1='k'");
mysqli_query($link ,"SET @cadena2='k'");
mysqli_query($link ,"SET @cadena3='k'");

$opcion=6;
*/
$opcion=$_POST["opcion"];
                                     mysqli_query($link ,"SET @opcion=".$_POST["opcion"]."");
                                     mysqli_query($link ,"SET @entero1=".$_POST["int1"]."");
                                     mysqli_query($link ,"SET @entero2=".$_POST["int2"]."");
                                     mysqli_query($link ,"SET @entero3=".$_POST["int3"]."");
                                     mysqli_query($link ,"SET @entero4=".$_POST["int4"]."");
                                     mysqli_query($link ,"SET @cadena1='".mysqli_real_escape_string($link,$_POST["var1"])."'");
                                     mysqli_query($link ,"SET @cadena2='".mysqli_real_escape_string($link,$_POST["var2"])."'");
                                     mysqli_query($link ,"SET @cadena3='".mysqli_real_escape_string($link,$_POST["var3"])."'");

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

  IF($opcion === 1 || $opcion === '1' || $opcion === 2 || $opcion === '2'){

        $divsub=$row['ID_Sub_Divicion'];
        $div=$row['id_Divicion'];
        $des=$row['Descripcion'];
        $st=$row['Status'];

       $events[] = array('ID_Sub_Divicion'=> $divsub, 'id_Divicion'=> $div, 'Descripcion'=> $des, 'Status'=> $st);
  }

  IF($opcion === 3 || $opcion === '3'){



        $div=$row['ID_Divicion'];
        $des=$row['Descripcion'];
        $st=$row['Status'];

        $events[] = array('ID_Divicion'=> $div, 'Descripcion'=> $des, 'Status'=> $st);
  }

  IF($opcion === 6 || $opcion === '6'){


    $st=$row["RESULTADO"];

    $events[] = array('resultado'=> $st);
}



  //  $events[] = $row;
}
//echo json_encode($events);

$json_string = json_encode($events);
echo $json_string;

exit;

} catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}

?>
