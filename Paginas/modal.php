<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <!-- contenido de modal -->
    <div id="contenido_modal" >
     <div class="modal-body">
    <label  name="tipo_cuentas" id="tipo_cuentas" ></label>
     <!-- +++++++++++++++++++++++++++++++++++++++++++ -->

    <!--<h2><button type="button" onclick="" class="btn btn-success btn-cons" id="termina_cuenta">Terminar cuenta</button></h2>--><!--<h2>Agregar Pedido</h2>-->
        <table>
          <tr>
            <td><H2>MENÚ</H2></td>
            <td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td><button type="button" id="cambia_mesaJ" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal2">Cambiar cuenta de mesa</button></td>

          </tr>
        </table>

    <div class="panel-group" id="accordion">
    <div class="panel panel-default">
    <div class="panel-heading">
     <h4 class="panel-title">
       <a data-toggle="collapse" data-parent="#accordion" href="#collapse1_principal">PLATILLOS                       </a>
     </h4>
    </div>
    <div id="collapse1_principal" class="panel-collapse collapse in">
     <div class="panel-body">
       <table>
         <tr>
           <td>
             <label><strong>CAMARONES</strong></label>
             <select class="form-control" id="camarones" name="sel1">
              <option value="0">SELECCIONA UNA</option>
               <?php
               include("conexion.php");
               $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=1';
               $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
               while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
                   echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
                   }
                 mysql_free_result($result);
                 mysql_close($link);
                 ?>
             </select>
        </td>
        <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
          <td>
            <label><strong>FILETE DE PESCADO</strong></label>
      <select class="form-control" id="pescado">
        <option value="0">SELECCIONA UNA</option>
         <?php
         include("conexion.php");
         $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=2';
         $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
         while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
             echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
             }
           mysql_free_result($result);
           mysql_close($link);
           ?>
           </select>
       </td>
       <td>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </td>
         <td>
           <label><strong>CARNES</strong></label>
           <select class="form-control" id="carnes" name="carnes">
            <option value="0">SELECCIONA UNA</option>
             <?php
             include("conexion.php");
             $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=4';
             $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
             while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
                 echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
                 }
               mysql_free_result($result);
               mysql_close($link);
               ?>
           </select>
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
        <td>
          <label><strong>ENSALADAS</strong></label>
    <select class="form-control" id="ensaladas" name="carnes">
      <option value="0">SELECCIONA UNA</option>
       <?php
       include("conexion.php");
       $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=3';
       $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
       while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
           echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
           }
         mysql_free_result($result);
         mysql_close($link);
         ?>
         </select>
     </td>
     </tr>
     </table>
     <br>
     <br>
     <table>
    <tr>
      <td>
        <label><strong>ESPECIAL</strong></label>
        <select class="form-control" id="especial" name="carnes">
         <option value="0">SELECCIONA UNA</option>
          <?php
          include("conexion.php");
          $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=5';
          $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
          while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
              echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
              }
            mysql_free_result($result);
            mysql_close($link);
            ?>
        </select>
   </td>
   <td>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   </td>
     <td>
       <label><strong>POSTRES</strong></label>
 <select class="form-control" id="postres" name="postres">
   <option value="0">SELECCIONA UNA</option>
    <?php
    include("conexion.php");
    $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=1 and Sub_Divicion=6';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
        echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
        }
      mysql_free_result($result);
      mysql_close($link);
      ?>
      </select>
  </td>
  </tr>
  </table>
     </div>
    </div>
    </div>
    <div class="panel panel-default">
    <div class="panel-heading">
     <h4 class="panel-title">
       <a data-toggle="collapse" data-parent="#accordion" href="#collapse2_principal">BEBIDAS                      </a>
     </h4>
    </div>
    <div id="collapse2_principal" class="panel-collapse collapse">
     <div class="panel-body">
       <table>
         <tr>
           <td>
         <label><strong>CERVEZA</strong></label>
       <select class="form-control" id="cerveza">
         <option value="0">SELECCIONA UNA</option>
          <?php
          include("conexion.php");
          $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=2 and Sub_Divicion=7';
          $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
          while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
              echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
              }
            mysql_free_result($result);
            mysql_close($link);
            ?>
            </select>
        </td>
        <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
          <td>
            <label><strong>REFRESCOS</strong></label>
      <select class="form-control" id="refrescos">
        <option value="0">SELECCIONA UNA</option>
         <?php
         include("conexion.php");
         $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=2 and Sub_Divicion=8';
         $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
         while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
             echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
             }
           mysql_free_result($result);
           mysql_close($link);
           ?>
           </select>
       </td>
       <td>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </td>
         <td>
       <label><strong>COPAS DE TEQUILA</strong></label>
     <select class="form-control" id="tequila_copas">
       <option value="0">SELECCIONA UNA</option>
        <?php
        include("conexion.php");
        $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=2 and Sub_Divicion=10';
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
        while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
            }
          mysql_free_result($result);
          mysql_close($link);
          ?>
          </select>
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
        <td>
          <label><strong>BOTELLAS DE TEQUILA</strong></label>
    <select class="form-control" id="tequila_botellas">
      <option value="0">SELECCIONA UNA</option>
       <?php
       include("conexion.php");
       $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=2 and Sub_Divicion=9';
       $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
       while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
           echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
           }
         mysql_free_result($result);
         mysql_close($link);
         ?>
         </select>
     </td>
     </tr>
     </table>
     <br>
     <br>
   </table>
   <tr>
     <td>
       <label><strong>BEBIDAS PREPARADAS</strong></label>
 <select class="form-control" id="preparadas">
   <option value="0">SELECCIONA UNA</option>
    <?php
    include("conexion.php");
    $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=2 and Sub_Divicion=11';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
        echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
        }
      mysql_free_result($result);
      mysql_close($link);
      ?>
      </select>
  </td>
  </tr>
  </table>
     </div>
    </div>
    </div>
    <div class="panel panel-default">
    <div class="panel-heading">
     <h4 class="panel-title">
       <a data-toggle="collapse" data-parent="#accordion" href="#collapse3_principal">SNAKS</a>
     </h4>
    </div>
    <div id="collapse3_principal" class="panel-collapse collapse">
     <div class="panel-body">

       <table>
         <tr>
           <td>
         <label><strong>SNAKS INDIVIDUALES</strong></label>
       <select class="form-control" id="snaks_ind">
         <option value="0">SELECCIONA UNA</option>
          <?php
          include("conexion.php");
          $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=20';
          $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
          while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
              echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
              }
            mysql_free_result($result);
            mysql_close($link);
            ?>
            </select>
        </td>
        <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
          <td>
            <label><strong>ALITAS MARINADAS</strong></label>
      <select class="form-control" id="alitas">
        <option value="0">SELECCIONA UNA</option>
         <?php
         include("conexion.php");
         $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=12';
         $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
         while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
             echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
             }
           mysql_free_result($result);
           mysql_close($link);
           ?>
           </select>
       </td>
       <td>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </td>
         <td>
       <label><strong>NACHOS</strong></label>
     <select class="form-control" id="nachos">
       <option value="0">SELECCIONA UNA</option>
        <?php
        include("conexion.php");
        $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=13';
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
        while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
            }
          mysql_free_result($result);
          mysql_close($link);
          ?>
          </select>
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
        <td>
          <label><strong>HAMBURGUESAS</strong></label>
    <select class="form-control" id="hamburguesas">
      <option value="0">SELECCIONA UNA</option>
       <?php
       include("conexion.php");
       $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=14';
       $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
       while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
           echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
           }
         mysql_free_result($result);
         mysql_close($link);
         ?>
         </select>
     </td>
     </tr>
   </table>

   <br>
   <br>

   <table>
     <tr>
       <td>
     <label><strong>TOSTADAS</strong></label>
   <select class="form-control" id="tostadas">
     <option value="0">SELECCIONA UNA</option>
      <?php
      include("conexion.php");
      $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=15';
      $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
      while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
          echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
          }
        mysql_free_result($result);
        mysql_close($link);
        ?>
        </select>
    </td>
    <td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </td>
      <td>
        <label><strong>CEVICHE</strong></label>
  <select class="form-control" id="ceviche">
    <option value="0">SELECCIONA UNA</option>
     <?php
     include("conexion.php");
     $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=16';
     $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
     while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
         echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
         }
       mysql_free_result($result);
       mysql_close($link);
       ?>
       </select>
   </td>
   <td>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   </td>
     <td>
   <label><strong>COCTEL DE CAMARON</strong></label>
 <select class="form-control" id="coctel">
   <option value="0">SELECCIONA UNA</option>
    <?php
    include("conexion.php");
    $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=17';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
        echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
        }
      mysql_free_result($result);
      mysql_close($link);
      ?>
      </select>
  </td>
  <td>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </td>
    <td>
      <label><strong>CAMARONES AL AGUACHILE</strong></label>
<select class="form-control" id="cam_aguachile">
  <option value="0">SELECCIONA UNA</option>
   <?php
   include("conexion.php");
   $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=18';
   $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
   while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
       echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
       }
     mysql_free_result($result);
     mysql_close($link);
     ?>
     </select>
 </td>
 </tr>
</table>

<br>
<br>

<table>
  <tr>
    <td>
  <label><strong>CAMARONES PA' PELAR</strong></label>
<select class="form-control" id="cam_pelar">
  <option value="0">SELECCIONA UNA</option>
   <?php
   include("conexion.php");
   $query = 'SELECT ID_Producto,Descripcion FROM cl_productos WHERE Divicion=3 and Sub_Divicion=19';
   $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
   while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
       echo '<option value="'.$line['ID_Producto'].'">'.$line['Descripcion'].'</option>';
       }
     mysql_free_result($result);
     mysql_close($link);
     ?>
     </select>
 </td>
 <td>
</tr>
</table>

     </div>
    </div>
    </div>
    </div>
     <!-- +++++++++++++++++++++++++++++++++++++++++++ -->
     <div class="form-group row">
         <div class="col-md-10">
         <input class="form-control" type="text" name="descrp_add" id="descrp_add" placeholder="Describe que añadiste">
         </div>
         <div class="col-md-2">
         <input class="form-control" type="number" name="precio_add" id="precio_add" placeholder="Precio" size="30" maxlength="30" onkeypress="return permite(event, 'num')">
         <!--<button type="button" class="btn btn-success" onclick="guarda_ing_extra();">Añadirdd</button>-->
          </div>

     </div>
    </div> <!-- TERMINA **** BODY  DE MODAL -->
     <div class="modal-footer">
       <button type="button" class="btn btn-success" onclick="imprimecocina(); setTimeout('cambia_estaus_pedido()',1000);">Enviar pedido</button>
       <!--<button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>-->
       <button type="submit" name="Submit" class="btn btn-primary"  onclick="guarda_ing_extra(); enviarDatosEmpleados(); setTimeout('consultas()',1000); setTimeout('oculta_Columna();',1200);">Agregar</button>
       <!--<input type="submit" name="Submit" value="Grabar" />-->
       <!-- TERMINA MODAL -->

       <!--  PEDIDOS TABLA -->
       <div id="resultado"></div>
    <table>
    <tr>
    <td>
      <h2>PEDIDO</h2>
    </td>
    <td>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </td>
    <td>
      <button type="button" onclick="trae_total_(); setTimeout('limpia_tabla_pedido()',2000);" class="btn btn-success btn-cons" id="termina_cuenta">Terminar cuenta</button>
    </td>
    </tr>
    </table>
      <table class="table table-hover" id="applendData">
        <thead>
          <tr>
            <th class="ids_ped">ID</th>
            <th>Platillo</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

       <!-- TERMINA PEDIDOS TABLA -->
     </div>
    </div>
    <!-- termina contenido de modal -->

  </body>
</html>
