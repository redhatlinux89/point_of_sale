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


        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head3">
          <div class="form-group row">
              <label for="full_name" class="col-md-4 col-form-label text-md-right">Mesa</label>
              <div class="col-md-3">
              <input class="form-control" type="text" name="mesa_valor" id="mesa_valor">
              </div>
            </div>
            <div class="form-group row">
              <label for="full_name" class="col-md-4 col-form-label text-md-right">Cliente</label>
              <div class="col-md-8">
              <input class="form-control" type="text" name="cliente" id="cliente">
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head4">


            <div class="form-group row">

                <div class="col-md-12">
                <input class="form-control" type="text" name="prod_desc" id="prod_desc" placeholder="Describe el producto">
                </div>
                <div class="col-md-8">
                <input class="form-control" type="number" name="prod_prec" id="prod_prec" placeholder="$">
                </div>
                <div class="col-md-4">
                <button type="button" class="btn btn-primary  btn-sm" onclick="add_nuevo_prod();">agregar</button>
              </div>
            </div>


        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head5">

          <div class="form-group row">
            <label for="full_name" class="col-md-6 col-form-label text-md-right">Total</label>
            <div class="col-md-6">
            <input class="form-control" type="text" name="total" value="0" id="total" disabled>
            </div>
          </div>
            <div class="form-group row">
              <div class="col-md-6">
              <button type="button" class="btn btn-success  btn-sm" onclick="imprime_ticket();">Terminar cuenta</button>
            </div>
            <div class="col-md-6">
            <button type="button" class="btn btn-success  btn-sm" onclick="imprime_ticket_cocina();">Enviar pedido</button>
           </div>
           </div>

          </div>


        </div>
      </div>
      </div>

    <div class="row" id="body">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="body2">
      <div class="row">


      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="head3" >


        <div id="accordion">
           <h3>PLATILLOS</h3>
      <div>
      <div style="width:220px; height:320px; overflow:auto; margin-left:-33%;">
               <div class="container">
                 <div id="inserta_bts_platillos">

                 </div>



   </div>
 </div>
</div>



  <h3>BEBIDAS</h3>
  <div>
    <p>
      <div style="width:220px; height:320px; overflow:auto; margin-left:-33%;">
               <div class="container">
                 <div id="inserta_bts_bebidas">

                 </div>
        </div>


   </div>
    </p>
  </div>
  <h3>SNAKS</h3>
  <div>
    <p>
      <div style="width:220px; height:320px; overflow:auto; margin-left:-33%;">
               <div class="container">
                 <div id="inserta_bts_snaks">

                 </div>
        </div>


   </div>
    </p>

  </div>
  <h3>OTROS</h3>
<div>
<div style="width:220px; height:320px; overflow:auto; margin-left:-33%;">
      <div class="container">
        <div id="inserta_bts_otros">

        </div>



</div>
</div>
</div>

</div>

      </div> <!-- termina div izquierdo panel acordion -->
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" id="head4">

<div style="height:450px; overflow:auto;">
    <div class="container">

   <div class="row">
  	 <div class="col-md-4">
       <div id="inserta_contenido1">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido2">

        </div>
       </div>
       <div class="col-md-4">
         <div id="inserta_contenido3">

         </div>
        </div>
   </div>
  <br>
   <div class="row">
    <div class="col-md-4">
       <div id="inserta_contenido4">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido5">

        </div>
       </div>
       <div class="col-md-4">
         <div id="inserta_contenido6">

         </div>
        </div>
   </div>
  <br>
   <div class="row">
    <div class="col-md-4">
       <div id="inserta_contenido7">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido8">

        </div>
       </div>
       <div class="col-md-4">
         <div id="inserta_contenido9">

         </div>
        </div>
   </div>
  <br>
   <div class="row">
    <div class="col-md-4">
       <div id="inserta_contenido10">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido11">

        </div>
       </div>
       <div class="col-md-4">
         <div id="inserta_contenido12">

         </div>
        </div>
   </div>
  <br>
   <div class="row">
    <div class="col-md-4">
       <div id="inserta_contenido13">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido14">

        </div>
       </div>
       <div class="col-md-4">
         <div id="inserta_contenido15">

         </div>
        </div>
   </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido16">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido17">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido18">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido19">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido20">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido21">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido22">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido23">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido24">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido25">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido26">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido27">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido28">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido29">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido30">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido31">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido32">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido33">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido34">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido35">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido36">

        </div>
       </div>
  </div>
  <br>
  <div class="row">
   <div class="col-md-4">
      <div id="inserta_contenido37">

      </div>
     </div>
     <div class="col-md-4">
       <div id="inserta_contenido38">

       </div>
      </div>
      <div class="col-md-4">
        <div id="inserta_contenido39">

        </div>
       </div>
  </div>

</div> <!-- cirra container -->
</div> <!-- termina overflow -->

    </div>  <!-- panel central contenido -->
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head4">
      <div class="row">

        <div class="table-wrapper-scroll-y">

          <table class="table table-striped table-bordered table-sm" id="applendData" style='font-size:12px'>
            <thead>
              <tr>
                <th>Cant</th>
                <th>Platillo</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>

</div>

      </div>
    </div> <!-- termina tabla de ventas -->
    </div>
  </div>
</div>
</div><!-- termina conteiner -->

  </body>
</html>
