<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- para no gurdar cahce -->
    <meta http-equiv="Expires" content="0">

    <meta http-equiv="Last-Modified" content="0">

    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">

    <meta http-equiv="Pragma" content="no-cache">
    <!-- terminar guarda cache -->
    <!--<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->

<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="../JS/jquery-1.11.1.min.js"></script>
  <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">-->
  <!--<link href="../Estilos/bootstrap/bootstrap.min.css" rel="stylesheet"> <!-- este srive para que s ehaga mas equeo modal -->
  <!--  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
      <script src="../JS/bootstrap/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../Estilos/Menu_Horizontal/Estilo_personalizado.css">

    <link rel="stylesheet" type="text/css" href="../Estilos/Menu_Horizontal/styles.css" media="all" />
    <!-- jQuery lib from google server ===================== -->
    <link rel="stylesheet" type="text/css" href="../Estilos/mesas.css" media="all" />


    <!--<script src="../JS/Menu_horizontal/jquery-1.7.2.min.js"></script>-->


  <script src="../JS/mesas_nuevo.js"></script>

    <!-- para tabs -->
    <!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
        <link rel="stylesheet" href="../Estilos/jquery/jquery-ui.css">
<!--<link rel="stylesheet" href="/resources/demos/style.css">-->
<!--<script src="https://code.jquery.com/jquery-1.12.4.js"></script>-->
<!--<script src="../JS/jquery/jquery_3_3_1.min.js"></script>
<!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
<script src="../JS/jquery/jquery-ui.js"></script>
    <!-- termna taps -->
    <link href="../Estilos/x0popup.min.css" rel="stylesheet">
      <script src="../JS/x0popup.min.js"></script>

      <!-- links para contenido 2 -->
      <link rel="stylesheet" href="../Estilos/bootstrap/bootstrap.min2.css">
      <!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>-->
      <script src="../JS/bootstrap/bootstrap.min2.js"></script>
      <!-- termina links para contenido 2 -->

    <script>


    $( function() {
        $( "#tabs" ).tabs();
          $( "#tabs_2" ).tabs();
            $( "#tabs_3" ).tabs();
      } );

      function admin(){
        var person = prompt("Escribe la contraseña");
        if(person==='admins'){
          location.href="http://localhost:80/Restaurante_nuevo/PAGINAS/administracion.php";
        }
        else{
          alert("clave incorrecta!");
        }
      }

    </script>
  <body>
    <style media="screen">
      .fondo img{
         background-size:     cover;
      }

      .modalDialog {
      position: fixed;
      font-family: Arial, Helvetica, sans-serif;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,0.8);
      z-index: 99998;
      opacity:0;
      -webkit-transition: opacity 400ms ease-in;
      -moz-transition: opacity 400ms ease-in;
      transition: opacity 400ms ease-in;
      pointer-events: none;
    }
    .modalDialog:target {
      opacity:1;
      pointer-events: auto;
    }
    .modalDialog > div {
      width: 100%;
      height: 85%;
      position: relative;
      margin: 1% auto;
      padding: 5px 20px 13px 20px;
      border-radius: 10px;
      background: #fff;
      background: -moz-linear-gradient(#fff, #999);
      background: -webkit-linear-gradient(#fff, #999);
      background: -o-linear-gradient(#fff, #999);
      -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    }
    .close {
      background: #606061;
      color: #FFFFFF;
      line-height: 25px;
      position: absolute;
      right: 10px;
      text-align: center;
      top: 5px;
      width: 50px;
      height: 30px;
      text-decoration: none;
      font-weight: bold;
      -webkit-border-radius: 12px;
      -moz-border-radius: 12px;
      border-radius: 12px;
      -moz-box-shadow: 1px 1px 3px #000;
      -webkit-box-shadow: 1px 1px 3px #000;
      box-shadow: 1px 1px 3px #000;
      z-index: 10000;
    }
    .close:hover { background: #00d9ff; }

    .modalDialog3 {
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }
  .modalDialog3:target {
    opacity:1;
    pointer-events: auto;
  }
  .modalDialog3 > div {
    width: 100%;
    position: relative;
    margin: 1% auto;
    padding: 5px 20px 13px 20px;
    border-radius: 10px;
    background: #fff;
    background: -moz-linear-gradient(#fff, #999);
    background: -webkit-linear-gradient(#fff, #999);
    background: -o-linear-gradient(#fff, #999);
    -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  }

    </style>
    <input type="hidden" name="tipo_cuentas" id="tipo_cuentas" >

    <div class="container">


         <div class="fondo">
           <figure>
      <picture>
     <img
     sizes="(max-width: 1400px) 100vw, 1400px"
     srcset="
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1112w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1373w,
     ../Imagenes/Fondo_Menu.jpg 1400w"
     src="../Imagenes/Fondo_Menu.jpg"
     alt="">
     </picture>
   </figure>
         </div>
         <div class="contenedor">

           <header>
             <div id="fdw">
                 <!--nav-->
                   <nav>
                     <ul>
                       <li class="current"><a href="http://localhost/Restaurante_nuevo/index.html">inicio<span class="arrow"></span></a>
                        </li>
                       <li><a href="#">restaurant</a></li>
                       <li><a href="#" onclick="admin()"> Administración</a></li>
                     </ul>
                   </nav>
             </div><!-- end fdw -->
           </header><!-- end header -->
<div id="contenedor2">
  <div id="indvs"><a href="#openModal2"><button type="button" class="btn btn-primary" onclick="modal2();">INDIVIDUALES</button></a></div>
           <div id="lado_izquierdo">
             <div id="lado_isquierdo_titulo">
             <h2>
                 E
                 Q
                 U
                 I
                 P
                 A
                 L
                 E
                 S
               </H2>
              </div>
          <?php
           //include("conexion.php");
           require("conexion.php");
           $query = 'SELECT Ocupacion FROM mesas WHERE Zona=1';
           $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
           $cuenta = 0;
           while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

               foreach ($line as $col_value) {
                 $cuenta += 1;
                 if($col_value==1){
                   echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn2 mesas'.$cuenta.'" >MESA '.$cuenta.'</button></a></div>';
                    echo "<script>";

                    echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                    echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                    echo "</script>";

                 } else{
                   echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn mesas'.$cuenta.'" >MESA '.$cuenta.'</button></a></div>';
                   echo "<script>";
                   echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                   echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                   echo "</script>";
                 }
               }
              /*$cuenta%2==0*/
               if($cuenta==2)
                      {
                        echo "<script>";
                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "50px";';
                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "65px";';
                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                        echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "9999999";';
                        echo "</script>";
                      }
              if($cuenta==4)
                             {
                               echo "<script>";
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "330px";';
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-225px";';
                                 echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                 echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "9999999";';
                               echo "</script>";
                             }

               if($cuenta==3){
                        echo "<script>";
                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "50px";';
                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "65px";';
                          echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                        echo "</script>";
                      }
              if($cuenta==5){
                               echo "<script>";
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "330px";';
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "55px";';
                                 echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                               echo "</script>";
                             }


                      if($cuenta==1)
                             {
                               echo "<script>";
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "13%";';
                               echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "80px";';
                                 echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                 echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "9999999";';
                               echo "</script>";
                             }
                                if($cuenta==6)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "123%";';
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-14%";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "0";';
                                      echo "</script>";
                                    }


                /*    if($cuenta==5 || $cuenta==4){
                      echo "<script>";
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "28px";';
                      echo "</script>";
                    }
*/

           }
           mysqli_free_result($result);
           mysqli_close($link);
           ?>
         </div>

         <div id="central_baja">
           <div id="central_baja_titulo">
             <h2>ESENARIO</h2>
           </div>

         <?php
         require("conexion.php");
         $query = 'SELECT Ocupacion FROM mesas WHERE Zona=2';
         $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
         $cuenta = 6;
         while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

             foreach ($line as $col_value) {
               $cuenta += 1;
               if($col_value==1){
                 echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
                  echo "<script>";
                  echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
                  echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                  echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "10";';
                  echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                  echo "</script>";

               } else{
                 echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
                 echo "<script>";
                 echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
                 echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                 echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                 echo "</script>";
               }
             }

             if($cuenta%2==0)
                    {
                      echo "<script>";
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "35%";';
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-13%";';
                       echo 'document.getElementById("mesa'.$cuenta.'").style.width = "190px";';
                      echo "</script>";
                    }else{
                      echo "<script>";
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-55%";';
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "1%";';
                      echo "</script>";
                    }
         }
         mysqli_free_result($result);
         mysqli_close($link);
         ?>
       </div>

       <div id="lado_derecho">
         <div id="lado_derecho_titulo">
         <h2>
            G
            R
            A
            D
            A
            S
           </H2>
          </div>
          <div id="botones_derecho">


       <?php
       require("conexion.php");
       $query = 'SELECT Ocupacion FROM mesas WHERE Zona=3';
       $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
       $cuenta = 12;
       while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

           foreach ($line as $col_value) {
             $cuenta += 1;
             if($col_value==1){
               echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
                echo "<script>";
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "30px";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                echo "</script>";

             } else{
               echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
               echo "<script>";
               echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "30px";';
               echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
               echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "15%";';
               echo "</script>";
             }
           }

          /* if($cuenta%2==0)
                  {
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "40%";';
                    echo "</script>";
                  }else{
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "10px";';
                    echo "</script>";
                  }
                  */
       }
       mysqli_free_result($result);
       mysqli_close($link);
       ?>

        <?php
       require("conexion.php");
       $query = 'SELECT Ocupacion FROM mesas WHERE Zona=10';
       $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
       $cuenta = 8;
       while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

           foreach ($line as $col_value) {
             $cuenta += 1;
             if($col_value==1){
               echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
                echo "<script>";
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "30px";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
                echo "</script>";

             } else{
               echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></a></div>';
               echo "<script>";
               echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "30px";';
               echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
               echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
               echo "</script>";
             }
           }

          /* if($cuenta%2==0)
                  {
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "40%";';
                    echo "</script>";
                  }else{
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "10px";';
                    echo "</script>";
                  }
                  */
                      if($cuenta==9)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-55%";';
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-117%";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "-10";';
                                          echo 'document.getElementById("mesa'.$cuenta.'").style.width = "200px";';
                                      echo "</script>";
                                    }

                      if($cuenta==10)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-80%";';
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-37%";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999998";';
                                      echo "</script>";
                                    }

                       if($cuenta==11){
                                      echo "<script>";
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-80%";';
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "16%";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999997";';
                                      echo "</script>";
                                    }

                      if($cuenta==12){
                          echo "<script>";
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-80%";';
                                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "15%";';
                                        echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999997";';
                                      echo "</script>";
                        }
       }
       mysqli_free_result($result);
       mysqli_close($link);
       ?>

     </div> <!-- termina lado derecho botones -->
     </div>

     <div id="ruedo">

       <!--<h2>RUEDO</h2>-->
     <?php
     require("conexion.php");
     $query = 'SELECT Ocupacion FROM mesas WHERE Zona=4';
     $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
     $cuenta = 17;
     while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

         foreach ($line as $col_value) {
           $cuenta += 1;
           if($col_value==1){
             echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_c4 mesas'.$cuenta.'">RUEDO</button></a></div>';
              echo "<script>";
              echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
              echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
              echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "10";';
              echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
              echo "</script>";

           } else{
             echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_c3 mesas'.$cuenta.'">RUEDO</button></a></div>';
             echo "<script>";
             echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
             echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
             echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
             echo "</script>";
           }
         }

         if($cuenta%2==0)
                {
                  echo "<script>";
                  echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-60%";';
                  echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-2%";';
                  echo "</script>";
                }else{
                  echo "<script>";
                  echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "60%";';
                  echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-11%";';
                  echo "</script>";
                }
     }
     mysqli_free_result($result);
     mysqli_close($link);
     ?>
   </div>

   <div id="corral">

     <!--<h2>RUEDO</h2>-->
   <?php
   require("conexion.php");
   $query = 'SELECT Ocupacion FROM mesas WHERE Zona=5';
   $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
   $cuenta = 18;
   while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

       foreach ($line as $col_value) {
         $cuenta += 1;
         if($col_value==1){
           echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_c2 mesas'.$cuenta.'">CORRAL</button></a></div>';
            echo "<script>";
            echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
            echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
            echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "10";';
            echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
            echo "</script>";

         } else{
           echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_c mesas'.$cuenta.'">CORRAL</button></a></div>';
           echo "<script>";
           echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
           echo 'document.getElementById("mesa'.$cuenta.'").style.opacity = "9";';
           echo 'document.getElementById("mesa'.$cuenta.'").style.textAlign = "center";';
           echo "</script>";
         }
       }

       if($cuenta%2==0)
              {
                echo "<script>";
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-60%";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-2%";';
                echo "</script>";
              }else{
                echo "<script>";
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "60%";';
                echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-11%";';
                echo "</script>";
              }
   }
   mysqli_free_result($result);
   mysqli_close($link);
   ?>
 </div>

 <div id="barra">

   <h2>BARRA</h2>
 <?php
 require("conexion.php");
 $query = 'SELECT Ocupacion FROM mesas WHERE Zona=6';
 $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
 $cuenta = 19;
 $espacio = 20;
 while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

     foreach ($line as $col_value) {
       $cuenta += 1;

       if($cuenta==20){
       $top = -0.5;
       $espacio += 55;
     }else if($cuenta==21){
       $top = -7.3;
       $espacio += 55;
     }else if($cuenta==22){
       $top = -7.6;
      $espacio += 55;
    }else if($cuenta==23){
       $top = -7.7;
      $espacio += 55;
    }else if($cuenta==24){
       $top = -7.9;
       $espacio += 55;
     }else if($cuenta==25){
       $top = -7.5;
       $espacio += 55;
     }else if($cuenta==26){
       $top = -7.9;
       $espacio += 55;
       }

       if($col_value==1){
         echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_R2 mesas'.$cuenta.'">B '.$cuenta.'</button></a></div>';
         echo "<script>";
         echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "'.$espacio.'px";';
           echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop =  "'.$top.'%";';
         echo "</script>";

       } else{
         echo '<div id="mesa'.$cuenta.'"><a href="#openModal"><button type="button" onclick="titulo_mesa(this.id); cargar_modal();" id="mesa'.$cuenta.'" class="butn_R mesas'.$cuenta.'">B '.$cuenta.'</button></a></div>';
         echo "<script>";
         echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "'.$espacio.'px";';
           echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop =  "'.$top.'%";';
         echo "</script>";
       }
     }


 }
 mysqli_free_result($result);
 mysqli_close($link);
 ?>
</div>

</div> <!-- contenedor 2 -->
</div>  <!-- termina contenedor -->

<!-- INICIO MODAL  -->
<!-- Modal -->
<form name="nuevo_empleado" action="" onsubmit="return false"> <!--  enviarDatosEmpleado(); -->


  <div id="openModal" class="modalDialog">
    <input type="hidden" id="mesas_s">
    <input type="hidden" id="tipo_cuenta">
    <div>
      <a href="#" onclick="eliminas();" title="Close"  class="close">X</a>
      <div id="contenidomm">
        <!-- SECCIONES DE PESTAÑAS INICIA -->
        <div id="tabs">
          <ul>
            <li class="active"><a href="#tabs-1" id="tab_1_">CUENTA PRINCIPAL</a></li>
            <li><a href="#tabs-2" id="tab_2_">CTA INDIV 1</a></li>
            <li><a href="#tabs-3" id="tab_3_">CTA INDIV 2</a></li>
            <li><a href="#tabs-4" id="tab_4_">CTA INDIV 3</a></li>
            <li><a href="#tabs-5" id="tab_5_">CTA INDIV 4</a></li>
            <li><a href="#tabs-6" id="tab_6_">CTA INDIV 5</a></li>
          </ul>
          <div id="tabs-1">

          </div> <!-- termina tab 1 -->
      <div id="tabs-2">

    </div> <!-- termina tab 2 -->
    <div id="tabs-3">

  </div> <!-- termina tab 3 -->
  <div id="tabs-4">

  </div> <!-- termina tab 3 -->
  <div id="tabs-5">

  </div> <!-- termina tab 4 -->
  <div id="tabs-6">

  </div> <!-- termina tab 4 -->

    </div> <!-- termina contenedor de tabs-->

      </div>
    </div>
  </div>


  <!-- modal individuales -->
  <div id="openModal2" class="modalDialog">
    <div>
      <a href="#"  title="Close"  class="close">X</a>
      <div id="contenidomm2">
        <!-- SECCIONES DE PESTAÑAS INICIA -->
        <div id="tabs_2">
          <ul>
            <li class="active"><a href="#tabs-1_2" id="tab_1_2">CUENTAS INDIVIDUALES</a></li>
          </ul>
          <div id="tabs-1_2">
            <div id="interno_2">

            </div>
          </div> <!-- termina tab 1 -->
    </div> <!-- termina contenedor de tabs-->

      </div>
    </div>
  </div>
  <!--  -->

  <!-- cambio de mesa -->
  <div id="openModal3" class="modalDialog">
    <div>
      <a href="#"  title="Close"  class="close" onclick="borra_datos()">X</a>
      <div id="contenidomm3">
        <!-- SECCIONES DE PESTAÑAS INICIA -->
        <div id="tabs_3">
          <ul>
            <li class="active"><a href="#tabs-1_3" id="tab_1_3">CUENTA INDIVIDUAL</a></li>
          </ul>
            <div id="tabs_cont">
          <div id="tabs-1_3">
            <div id="interno_3">

            </div>
            </div> <!-- termina tab 1 -->
          </div> <!-- termina tab 1 -->
    </div> <!-- termina contenedor de tabs-->

      </div>
    </div>
  </div>
  <!--  -->


  <!-- cambio de mesa VERDADERO -->
  <div id="openModal4" class="modalDialog">
    <div>
      <a href="#"  title="Close"  class="close">X</a>

        <!-- SECCIONES DE PESTAÑAS INICIA -->

        <div class="container">
          <div class="row"  >

              <div id="lado_izquierdo_2_nuevos">
                <div id="lado_isquierdo_titulo_2_nuevos">
                 <h2>
                 E
                 Q
                 U
                 I
                 P
                 A
                 L
                 E
                 S
               </H2>
              </div>
          <?php
           require("conexion.php");
           $query = 'SELECT Ocupacion FROM mesas WHERE Zona=1';
           $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
           $cuenta = 0;
           while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

               foreach ($line as $col_value) {
                 $cuenta += 1;
                 if($col_value==1){
                   echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn2 mesas'.$cuenta.'" >MESA '.$cuenta.'</button></div>';
                    echo "<script>";

                    echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                    echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                    echo "</script>";

                 } else{
                   echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn mesas'.$cuenta.'" >MESA '.$cuenta.'</button></div>';
                   echo "<script>";
                   echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                   echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                   echo "</script>";
                 }
               }
              /*$cuenta%2==0*/
               if($cuenta==2)
                      {
                        echo "<script>";
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-200px";';
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "65px";';
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "9999999";';
                        echo "</script>";
                      }
              if($cuenta==4)
                             {
                               echo "<script>";
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "40px";';
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-225px";';
                                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "9999999";';
                               echo "</script>";
                             }

               if($cuenta==3){
                        echo "<script>";
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-200px";';
                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "65px";';
                          echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                        echo "</script>";
                      }
              if($cuenta==5){
                               echo "<script>";
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "30px";';
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "55px";';
                                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                               echo "</script>";
                             }


                      if($cuenta==1)
                             {
                               echo "<script>";
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-200px";';
                               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "80px";';
                                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "9999999";';
                               echo "</script>";
                             }
                                if($cuenta==6)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "123%";';
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-14%";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "0";';
                                      echo "</script>";
                                    }


                /*    if($cuenta==5 || $cuenta==4){
                      echo "<script>";
                      echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "28px";';
                      echo "</script>";
                    }
*/

           }
           mysqli_free_result($result);
           mysqli_close($link);
           ?>
         </div>

         <div id="central_baja_2">
              <div id="central_baja_titulo_2">
             <h2>ESENARIO</h2>
           </div>

         <?php
         require("conexion.php");
         $query = 'SELECT Ocupacion FROM mesas WHERE Zona=2';
         $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
         $cuenta = 6;
         while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

             foreach ($line as $col_value) {
               $cuenta += 1;
               if($col_value==1){
                 echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
                  echo "<script>";
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "18px";';
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "10";';
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                  echo "</script>";

               } else{
                 echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
                 echo "<script>";
                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "18px";';
                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                 echo "</script>";
               }
             }

             if($cuenta%2==0)
                    {
                      echo "<script>";
                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "60%";';
                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-14%";';
                       echo 'document.getElementById("mesa_c'.$cuenta.'").style.width = "190px";';
                      echo "</script>";
                    }else{
                      echo "<script>";
                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-55%";';
                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "1%";';
                      echo "</script>";
                    }
         }
         mysqli_free_result($result);
         mysqli_close($link);
         ?>
       </div>

       <div id="lado_derecho_2">


             <div id="botones_2_gradas">


       <?php
       require("conexion.php");
       $query = 'SELECT Ocupacion FROM mesas WHERE Zona=3';
       $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
       $cuenta = 12;
       while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

           foreach ($line as $col_value) {
             $cuenta += 1;
             if($col_value==1){
               echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id); id="mesa_c'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
                echo "<script>";
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "30px";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                 echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "35%";';
                echo "</script>";

             } else{
               echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
               echo "<script>";
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "30px";';
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
               echo "</script>";
             }
           }

          /* if($cuenta%2==0)
                  {
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "40%";';
                    echo "</script>";
                  }else{
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "10px";';
                    echo "</script>";
                  }
                  */
       }
       mysqli_free_result($result);
       mysqli_close($link);
       ?>

        <?php
       require("conexion.php");
       $query = 'SELECT Ocupacion FROM mesas WHERE Zona=10';
       $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
       $cuenta = 8;
       while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

           foreach ($line as $col_value) {
             $cuenta += 1;
             if($col_value==1){
               echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id); id="mesa_c'.$cuenta.'" class="butn2 mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
                echo "<script>";
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "30px";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
                echo "</script>";

             } else{
               echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn mesas'.$cuenta.'">MESA '.$cuenta.'</button></div>';
               echo "<script>";
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "30px";';
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
               echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
               echo "</script>";
             }
           }

          /* if($cuenta%2==0)
                  {
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "40%";';
                    echo "</script>";
                  }else{
                    echo "<script>";
                    echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "10px";';
                    echo "</script>";
                  }
                  */
                      if($cuenta==9)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-55%";';
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-140%";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "-10";';
                                          echo 'document.getElementById("mesa_c'.$cuenta.'").style.width = "200px";';
                                      echo "</script>";
                                    }

                      if($cuenta==10)
                                    {
                                      echo "<script>";
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-110%";';
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "1%";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "999998";';
                                      echo "</script>";
                                    }

                       if($cuenta==11){
                                      echo "<script>";
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-110%";';
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "16%";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                                       echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "999997";';
                                      echo "</script>";
                                    }

                      if($cuenta==12){
                          echo "<script>";
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-110%";';
                                      echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "15%";';
                                        echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "15px";';
                                       echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "999997";';
                                      echo "</script>";
                        }
       }
       mysqli_free_result($result);
       mysqli_close($link);
       ?>
         <div id="lado_derecho_titulo_2">
         <h2>
            G
            R
            A
            D
            A
            S
           </H2>
          </div>

     </div> <!-- termina lado derecho botones -->
     </div>

     <div id="ruedo_2">

       <!--<h2>RUEDO</h2>-->
     <?php
     require("conexion.php");
     $query = 'SELECT Ocupacion FROM mesas WHERE Zona=4';
     $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
     $cuenta = 17;
     while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

         foreach ($line as $col_value) {
           $cuenta += 1;
           if($col_value==1){
             echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_c4 mesas'.$cuenta.'">RUEDO</button></div>';
              echo "<script>";
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "18px";';
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "10";';
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
              echo "</script>";

           } else{
             echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_c3 mesas'.$cuenta.'">RUEDO</button></div>';
             echo "<script>";
             echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "18px";';
             echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
             echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
             echo "</script>";
           }
         }

         if($cuenta%2==0)
                {
                  echo "<script>";
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-60%";';
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-2%";';
                  echo "</script>";
                }else{
                  echo "<script>";
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "60%";';
                  echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-11%";';
                  echo "</script>";
                }
     }
     mysqli_free_result($result);
     mysqli_close($link);
     ?>
   </div>

   <div id="corral_2">

     <!--<h2>RUEDO</h2>-->
   <?php
   require("conexion.php");
   $query = 'SELECT Ocupacion FROM mesas WHERE Zona=5';
   $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
   $cuenta = 18;
   while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

       foreach ($line as $col_value) {
         $cuenta += 1;
         if($col_value==1){
           echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_c2 mesas'.$cuenta.'">CORRAL</button></div>';
            echo "<script>";
            echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "18px";';
            echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
            echo 'document.getElementById("mesa_c'.$cuenta.'").style.zIndex = "10";';
            echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
            echo "</script>";

         } else{
           echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_c mesas'.$cuenta.'">CORRAL</button></div>';
           echo "<script>";
           echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginBottom = "18px";';
           echo 'document.getElementById("mesa_c'.$cuenta.'").style.opacity = "9";';
           echo 'document.getElementById("mesa_c'.$cuenta.'").style.textAlign = "center";';
           echo "</script>";
         }
       }

       if($cuenta%2==0)
              {
                echo "<script>";
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "-60%";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-2%";';
                echo "</script>";
              }else{
                echo "<script>";
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "60%";';
                echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop = "-11%";';
                echo "</script>";
              }
   }
   mysqli_free_result($result);
   mysqli_close($link);
   ?>
 </div>

 <div id="barra_2">
  <div id="titulo_barra_2">


   <h2>BARRA</h2>
   </div>
 <?php
   require("conexion.php");
    $query = 'SELECT Ocupacion FROM mesas WHERE Zona=6';
    $result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysqli_error());
    $cuenta = 19;
    $espacio = 20;
    while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {

        foreach ($line as $col_value) {
          $cuenta += 1;

          if($cuenta==20){
          $top = -0.5;
          $espacio += 55;
        }else if($cuenta==21){
          $top = -8.6;
          $espacio += 55;
        }else if($cuenta==22){
          $top = -8.6;
         $espacio += 55;
       }else if($cuenta==23){
          $top = -8.5;
         $espacio += 55;
       }else if($cuenta==24){
          $top = -9.1;
          $espacio += 55;
        }else if($cuenta==25){
          $top = -8.5;
          $espacio += 55;
        }else if($cuenta==26){
          $top = -8.9;
          $espacio += 55;
          }

          if($col_value==1){
            echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_R2 mesas'.$cuenta.'">B '.$cuenta.'</button></div>';
            echo "<script>";
            echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "'.$espacio.'px";';
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop =  "'.$top.'%";';
            echo "</script>";

          } else{
            echo '<div id="mesa_c'.$cuenta.'"><button type="button" onclick="cambia_cuenta(this.id);" id="mesa_c'.$cuenta.'" class="butn_R mesas'.$cuenta.'">B '.$cuenta.'</button></div>';
            echo "<script>";
            echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginLeft = "'.$espacio.'px";';
              echo 'document.getElementById("mesa_c'.$cuenta.'").style.marginTop =  "'.$top.'%";';
            echo "</script>";
          }
        }


    }
    mysqli_free_result($result);
    mysqli_close($link);

 ?>
</div>


          </div> <!-- termina conteiner -->
          </div>


    </div>
  </div>
  <!--  -->






</form>
<!-- TERMINA MODAL-->




</div>
  </body>
</html>
