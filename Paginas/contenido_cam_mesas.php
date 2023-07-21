<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  <!--  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">-->
<link rel="stylesheet" href="../Estilos/bootstrap/bootstrap.min2.css">
<!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>-->
<script src="../JS/bootstrap/bootstrap.min2.js"></script>
<!--<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>-->

<!-- acordion -->
<!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
<!--<link rel="stylesheet" href="../Estilos/jquery/jquery-ui.css">-->
 <!--<link rel="stylesheet" href="/resources/demos/style.css">-->
 <!--<script src="https://code.jquery.com/jquery-1.12.4.js"></script>-->
 <!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
 <!--<script src="../JS/jquery/jquery-ui.js"></script>-->

  <script src="../JS/mesas_nuevo.js"></script>



 <script>
 $( function() {
   $( "#accordion" ).accordion({
   collapsible: true,
     active: 4
 });
 } );
 </script>

<style>
#head{
    border: 1px solid #dfdfdf;
}
#head2{
    border: 1px solid #dfdfdf;
}
#head3{
    border: 1px solid #dfdfdf;
}
#head4{
    border: 1px solid #dfdfdf;
}
#head5{
    border: 1px solid #dfdfdf;
}
#body{
    border: 1px solid #dfdfdf;
}
.table-wrapper-scroll-y {
display: block;
max-height: 450px;
overflow-y: auto;
-ms-overflow-style: -ms-autohiding-scrollbar;
}

.butt-mesas {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 1px 1px 15px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: -10px;
  padding: 5px 10px;
  background: #88dd77;
  border: solid #000000 1px;
  text-decoration: none;
  width: 100%;
}

.butt-mesas4 {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 1px 1px 15px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: -10px;
  padding: 5px 10px;
  background: #F39814;
  border: solid #000000 1px;
  text-decoration: none;
  width: 100%;
}

.butt-mesas:hover {
  background: #9ae288;
  text-shadow: 1px 1px 15px #666666;
  text-decoration: none;
}

.butt-mesas2 {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 1px 1px 15px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: -10px;
  padding: 2.5px 5.5px;
  background: #88dd77;
  border: solid #000000 1px;
  text-decoration: none;
  width: 105%;
  height: 100px;
}


</style>

  </head>
  <body>
    <div class="container">
      <div class="row"  id="head">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="head2">
        <div class="row">

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
          include("conexion.php");
          $query = 'SELECT Ocupacion FROM mesas WHERE Zona=1';
          $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
          $cuenta = 0;
          while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {

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
                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "250px";';
                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-90px";';
                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                       echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "99998";';
                       echo "</script>";
                     }
             if($cuenta==4)
                            {
                              echo "<script>";
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "250px";';
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "45px";';
                                echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "99998";';
                              echo "</script>";
                            }
             if($cuenta==7)
                                   {
                                     echo "<script>";
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "250px";';
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-15px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999998";';
                                     echo "</script>";
                                   }
              if($cuenta==3){
                       echo "<script>";
                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "50px";';
                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-50px";';
                         echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                       echo "</script>";
                     }
             if($cuenta==5){
                              echo "<script>";
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "50px";';
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-50px";';
                                echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                              echo "</script>";
                            }
           if($cuenta==8){
                                     echo "<script>";
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-380px";';
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "-42px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                     echo "</script>";
                                   }

                       if($cuenta==9){
                         echo "<script>";
                         echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "-150px";';
                         echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "35px";';
                         echo "</script>";
                       }

                     if($cuenta==1)
                            {
                              echo "<script>";
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "95%";';
                              echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "70px";';
                                echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "15px";';
                                echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999999";';
                              echo "</script>";
                            }
                     if($cuenta==6)
                                   {
                                     echo "<script>";
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginLeft = "95%";';
                                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginTop = "10px";';
                                       echo 'document.getElementById("mesa'.$cuenta.'").style.zIndex = "999999";';
                                     echo "</script>";
                                   }

               /*    if($cuenta==5 || $cuenta==4 || $cuenta==7 || $cuenta==8){
                     echo "<script>";
                     echo 'document.getElementById("mesa'.$cuenta.'").style.marginBottom = "28px";';
                     echo "</script>";
                   }
*/

          }
          mysql_free_result($result);
          mysql_close($link);
          ?>
        </div>


      </div>

    </div>
  </div>


</div>







  </body>
</html>
