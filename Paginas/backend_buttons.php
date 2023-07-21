<?php

 include('conexion.php');

 header('Content-Type: application/json');
 try{
  //mysqli_query($link ,"SET @entero2=".$_POST['tipo_cuenta']."");
   /* 
  mysqli_query($link ,"SET @opcion=3");
  mysqli_query($link ,"SET @entero1=1");
  mysqli_query($link ,"SET @entero2=2");
  mysqli_query($link ,"SET @entero3=1");
  mysqli_query($link ,"SET @cadena1='a'");
  mysqli_query($link ,"SET @cadena2='a'");
  mysqli_query($link ,"SET @cadena3='a'");
  mysqli_query($link ,"SET @cadena4='a'");
  mysqli_query($link ,"SET @cadena5='a'");
  mysqli_query($link ,"SET @cadena6='a'");
  mysqli_query($link ,"SET @cadena7='a'");
  $opcion=3;          
          */                  
                               
                                $opcion=$_POST['opcion'];
                                     mysqli_query($link ,"SET @opcion=".$_POST['opcion']."");
                                      mysqli_query($link ,"SET @entero1='".mysqli_real_escape_string($link,$_POST["int1"])."'");
                                      mysqli_query($link ,"SET @entero2='".mysqli_real_escape_string($link,$_POST["int2"])."'");
                                      mysqli_query($link ,"SET @entero3='".mysqli_real_escape_string($link,$_POST["btn"])."'");
                                      mysqli_query($link ,"SET @cadena1='".mysqli_real_escape_string($link,$_POST["cad1"])."'");
                                      mysqli_query($link ,"SET @cadena2='".mysqli_real_escape_string($link,$_POST["cad2"])."'");
                                      mysqli_query($link ,"SET @cadena3='".mysqli_real_escape_string($link,$_POST["cad3"])."'");
                                      mysqli_query($link ,"SET @cadena4='".mysqli_real_escape_string($link,$_POST["cad4"])."'");
                                      mysqli_query($link ,"SET @cadena5='".mysqli_real_escape_string($link,$_POST["cad5"])."'");
                                      mysqli_query($link ,"SET @cadena6='".mysqli_real_escape_string($link,$_POST["cad6"])."'");
                                      mysqli_query($link ,"SET @cadena7='".mysqli_real_escape_string($link,$_POST["cad7"])."'");
                             
                                    
                                    $result = mysqli_query($link,"call botones(@opcion,
                                                                                      @entero1, 
                                                                                      @entero2,       
                                                                                      @entero3,
                                                                                      @cadena1,  
                                                                                      @cadena2, 
                                                                                      @cadena3, 
                                                                                      @cadena4, 
                                                                                      @cadena5, 
                                                                                      @cadena6, 
                                                                                      @cadena7     
                                                                                      );
                                                        ");
 while($row = mysqli_fetch_assoc($result))
 {
  if($opcion===1 || $opcion==='1' || $opcion===2 || $opcion==='2' ){
    $events[] = $row["respuesta"];
  }
  if($opcion===3 || $opcion==='3' ){
    $x=$row['X'];
    $y=$row['Y'];
    $pos=$row['position'];
    $ml=$row['margin-left'];
    $mt=$row['margin-top'];
    $h=$row['height'];
    $w=$row['width'];
    $t=$row['top'];
    $lef=$row['left-'];
    $btn=$row['boton'];

    $events[] = array('X'=> $x, 'Y'=> $y, 'position'=> $pos,'margin-left'=> $ml, 'margin-top'=> $mt, 'height'=> $h,'width'=> $w, 'top'=> $t, 'left'=> $lef, 'boton'=> $btn);
  }
  if($opcion===4 || $opcion==='4' ){
    $x=$row['No_Mesa'];
    $y=$row['Descripcion'];
    $pos=$row['Ocupacion'];
    $ml=$row['Zona'];

    $events[] = array('No_mesa'=> $x, 'Descripcion'=> $y, 'Ocupacion'=> $pos,'Zona'=> $ml);
    
  }
 }// fin del while
 echo json_encode($events);
 exit;
} catch (Exception $e) {
  echo 'Ex',  $e->getMessage(), "\n";
}

?>
