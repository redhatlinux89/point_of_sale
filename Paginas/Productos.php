<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script src="../JS/jquery-1.11.1.min.js"></script>


    <link rel="stylesheet" href="../Estilos/Menu_Horizontal/Estilo_personalizado.css">

    <link rel="stylesheet" type="text/css" href="../Estilos/Menu_Horizontal/styles.css" media="all" />
    <!-- jQuery lib from google server ===================== -->
    <link rel="stylesheet" type="text/css" href="../Estilos/productos.css" media="all" />


    <script src="../JS/Menu_horizontal/jquery-1.7.2.min.js"></script>

    <!-- form -->
    <!-- Fonts -->
 <link rel="dns-prefetch" href="https://fonts.gstatic.com">
 <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">



 <link rel="icon" href="Favicon.png">

 <!-- Bootstrap CSS -->
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <!-- termina form -->



    <title></title>

    <script>


    <!--  // building select nav for mobile width only -->
    $(function(){
		
       opera_base(2);
       opera_base(3);
       //opera_base(4);
      // building select menu
      $('<select />').appendTo('nav');

      // building an option for select menu
      $('<option />', {
        'selected': 'selected',
        'value' : '',
        'text': 'Choise Page...'
      }).appendTo('nav select');

      $('nav ul li a').each(function(){
        var target = $(this);

        $('<option />', {
          'value' : target.attr('href'),
          'text': target.text()
        }).appendTo('nav select');

      });

      // on clicking on link
      $('nav select').on('change',function(){
        window.location = $(this).find('option:selected').val();
      });
    });

    // show and hide sub menu
    $(function(){
      $('nav ul li').hover(
        function () {
          //show its submenu
          $('ul', this).slideDown(150);
        },
        function () {
          //hide its submenu
          $('ul', this).slideUp(150);
        }
      );
    });
    //end
    $( function() {
   $( "#tabs" ).tabs();
 } );

    </script>

  </head>
  <body>

    <div class="contenedor">





    <main class="my-form">
        <div class="cotainer">

          <div id="tabs">
<ul>
<li><a href="#tabs-1">DIVICIONES</a></li>
<li><a href="#tabs-2">PRODUCTOS</a></li>
</ul>
<div id="tabs-1">


  <div class="row justify-content-center">


  <div class="col-md-8">
          <div class="card">
            <!-- https://bootsnipp.com/snippets/z8MPd --> <!-- form -->
              <div class="card-header">NUEVAS SUB-DIVICIONES</div>
              <div class="card-body">
                  <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                    <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Divición</label>
                        <div class="col-md-6">
                          <select class="form-control" id="diviciones_agregar" onchange="opera_base(2)">
                          <option value="0">SELECCIONA UNA</option>

                         </select>
                        </div>
                    </div>

                      <div class="form-group row">
                          <label for="full_name" class="col-md-4 col-form-label text-md-right">Nombre de subdivición:</label>
                          <div class="col-md-6">
                          <input class="form-control" type="text" name="divicion" id="sub_divs">
                          </div>
                      </div>
                      <div class="form-group row">
                           
						   
						  <button type="button" class="btn btn-info" onclick="opera_base(2)">Actualizar</button>
                          
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						  <button type="button" class="btn btn-success" onclick="opera_base(1)">Guardar</button>


                      </div>



                      <div class="form-group row">
                        <!-- https://programacion.net/articulo/crear_tablas_editables_con_jquery-_php_y_mysql_1944 --> <!-- tabla editable -->

                        <!-- https://markcell.github.io/jquery-tabledit/-->

                        <table id="data_table2" class="table table-striped">
                         <thead>
                          <tr>
                           <th>Descripción</th>
                          </tr>
                         </thead>
                         <tbody>



                        </tbody>
                        </table>

                           <script type="text/javascript" src="../JS/productos.js"></script>

                      </div> <!-- form-group row -->



                          <div class="col-md-6 offset-md-4">
                            <!-- aqui estaba el boton -->
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        </div>

</div>
<div id="tabs-2">
            <div class="row justify-content-center">





                <div class="col-md-8">
                        <div class="card">
                          <!-- https://bootsnipp.com/snippets/z8MPd --> <!-- form -->
                            <div class="card-header">Registrar/Editar precios y productos</div>
                            <div class="card-body">
                                <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                                    <div class="form-group row">
                                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Divición</label>
                                        <div class="col-md-6">
                                          <select class="form-control" id="diviciones" onchange="filtra_sub_diviciones()">
                                          <option value="0">SELECCIONA UNA</option>

                                         </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Sub-divición</label>
                                        <div class="col-md-6">
                                          <select class="form-control" id="sub_diviciones" onchange="filtra();">
                                          <option value="0">SELECCIONA UNA</option>

                                         </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Producto:</label>
                                        <div class="col-md-6">
                                        <input class="form-control" type="text" name="Producto" id="Producto">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Precio:</label>
                                        <div class="col-md-6">
                                        <input class="form-control" type="number" name="Precio" id="Precio" placeholder="Sólo el importe sin simbolos">
                                        </div>
                                        <button type="button" class="btn btn-success" onclick="inserta_nuevo()">Guardar</button>


                                    </div>



                                    <div class="form-group row">
                                      <!-- https://programacion.net/articulo/crear_tablas_editables_con_jquery-_php_y_mysql_1944 --> <!-- tabla editable -->

                                      <!-- https://markcell.github.io/jquery-tabledit/-->

                                      <table id="data_table" class="table table-striped">
                                       <thead>
                                        <tr>
                                         <th>Precio</th>
                                         <th>Descripción</th>
                                        </tr>
                                       </thead>
                                       <tbody>



                                      </tbody>
                                      </table>

                                         <script type="text/javascript" src="../JS/productos.js"></script>

                                    </div> <!-- form-group row -->



                                        <div class="col-md-6 offset-md-4">
                                          <!-- aqui estaba el boton -->
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                      </div><!-- TERMINA TAB 2 -->

                    </div>  <!-- TERMINA TABS -->

            </div>
        </div>

    </main>



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

    <!-- links para tabla edit live -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   <script type="text/javascript" src="../JS/jquery.tabledit.js"></script>
    <script type="text/javascript" src="../JS/custom_table_edit.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    </body>

  </body>
</html>
