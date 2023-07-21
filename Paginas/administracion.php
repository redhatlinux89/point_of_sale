<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Administracion charros</title>
    <meta name="description" content="Ela Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
    <script src="../JS/jquery/jquery-ui.js"></script>
    <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
    <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
    <link rel="stylesheet" href="../Estilos/administracion/assets/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="../Estilos/administracion/assets/css/style.css">
    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
    <link href="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css" rel="stylesheet" />

    <link rel="stylesheet" href="../Estilos/Menu_Horizontal/Estilo_personalizado.css">

    <link rel="stylesheet" type="text/css" href="../Estilos/Menu_Horizontal/styles.css" media="all" />

    <script type="text/javascript" src="../JS/admin/admin.js"></script>

<script type="text/javascript">



$( function() {
    $( "#tabs" ).tabs();
      $( "#tabs_2" ).tabs();
        $( "#tabs_3" ).tabs();
  } );

  function admin(){
    var person = prompt("Escribe la contraseña");
    if(person==='admins'){
      location.href="http://localhost:80/Restaurante_nuevo/PAGINAS/Productos.php";
    }
    else{
      alert("clave incorrecta!");
    }
  }

</script>
   <style>
    #weatherWidget .currentDesc {
        color: #ffffff!important;
    }
        .traffic-chart {
            min-height: 335px;
        }
        #flotPie1  {
            height: 150px;
        }
        #flotPie1 td {
            padding:3px;
        }
        #flotPie1 table {
            top: 20px!important;
            right: -10px!important;
        }
        .chart-container {
            display: table;
            min-width: 270px ;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        #flotLine5  {
             height: 105px;
        }

        #flotBarChart {
            height: 150px;
        }
        #cellPaiChart{
            height: 160px;
        }
     #fdw{
       margin-top:-3%;
       z-index: 99999;
     }
    </style>
</head>

<body>

    <!-- Left Panel -->
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <!-- menu-icon fa fa-cogs -->
                    <li class="menu-title">Administración</li><!-- /.menu-title -->
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-laptop"></i>Ventas</a>

                    </li>
                    <li class="menu-item-has-children">
                        <a href="admin_calendario.html" > <i class="menu-icon fa fa-table"></i>Calendario</a>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="admin_productos.html"> <i class="menu-icon fa fa-cogs"></i>Productos</a>

                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside>
    <!-- /#left-panel -->
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">
        <!-- Header-->
        <header id="header" class="header">
            <div class="top-left">
                <div class="navbar-header">
                    <a class="navbar-brand" href="./"><img src="images/logo.png" alt="Logo"></a>
                    <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"></a>
                    <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
                </div>
            </div>
            <div class="top-right">
              <div id="fdw">
                  <!--nav-->
                    <nav>
                      <ul>
                        <li><a href="http://charros.000webhostapp.com/index.html">inicio<span class="arrow"></span></a>
                         </li>
                      </ul>
                    </nav>
              </div><!-- end fdw -->

            </div>
        </header>
        <!-- /#header -->
        <!-- Content -->
        <div class="content">
            <!-- Animated -->
            <div class="animated fadeIn">
                <!-- Widgets  -->
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-1">
                                        <i class="pe-7s-cash"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="total"></div>
                                        <!--    <div class="stat-text">$<span class="count"></span></div>-->
                                            <div class="stat-heading">Ventas Totales</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-2">
                                        <i class="pe-7s-cart"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="platillos"></div>
                                            <!--<div class="stat-text"><span class="count">3435</span></div>-->
                                            <div class="stat-heading">Platillos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-3">
                                        <i class="pe-7s-browser"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="bebidas"></div>
                                            <!--<div class="stat-text"><span class="count">349</span></div>-->
                                            <div class="stat-heading">Bebidas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-4">
                                        <i class="pe-7s-users"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="snaks"></div>
                                            <!--<div class="stat-text"><span class="count">2986</span></div>-->
                                            <div class="stat-heading">Snaks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-4">
                                        <i class="pe-7s-users"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="otros"></div>
                                            <!--<div class="stat-text"><span class="count">2986</span></div>-->
                                            <div class="stat-heading">Otros</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-4">
                                        <i class="pe-7s-users"></i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                          <div id="anuladas"></div>
                                            <!--<div class="stat-text"><span class="count">2986</span></div>-->
                                            <div class="stat-heading">Anuladas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <input type="date" id="fecha1">
                        </div>
                        <div class="card">
                            <input type="date" id="fecha2" onchange="llena_encabezado()">
                        </div>
                    </div>

                </div>
                <!-- /Widgets -->
                <!--  Traffic  -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="box-title">Ventas </h4>
                            </div>
                            <!-- Orders -->
                            <div class="orders">
                                <div class="row">
                                    <div class="col-xl-12"> <!-- 8 -->
                                        <div class="card">
                                            <div class="card-body">
                                              <table>
                                                <tr>
                                                  <td>
                                                    <h4 class="box-title">Detalles de Vta Gral </h4>
                                                    <select name="select" id="select" onchange="llena_tabla()">
                                                        <option value="0" selected>Selecciona uno</option>
                                                        <option value="1">Platillos</option>
                                                        <option value="2" >Bebidas</option>
                                                        <option value="3">Snaks</option>
                                                        <option value="4">Otros</option>
                                                        <option value="5">Anuladas</option>
                                                    </select>
                                                  </td>
                                                  <td>
                                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </td>
                                                  <td>
                                                    <h4 class="box-title">Detalles de Vta por mesa </h4>
                                                    <select name="select2" id="select2" onchange="llena_tabla_detalle_mesas()">
                                                        <option value="0" selected>Selecciona uno</option>

                                                    </select>
                                                  </td>
                                                  <td>
                                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </td>
                                                  <td>
                                                    <h4 class="box-title">Detalles de vta x indv </h4>
                                                    <select name="select3" id="select3" onchange="llena_tabla_detalle_indv()">
                                                        <option value="0" selected>Selecciona uno</option>
                                                    </select>
                                                  </td>
                                                  <td>
                                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </td>
                                                  <td>
                                                  <input type="text" name="folio" maxlength="6" id="folio" placeholder="Ingresa folio">
                                                  <a href="#" onclick="busca_folio()" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-search"></span> </a>
                                                  </td>
                                                </tr>
                                              </table>

                                            </div>
                                            <div class="card-body--">
                                                <div class="table-stats order-table ov-h">
                                                    <table class="table " id="tablas">
                                                        <thead>
                                                            <tr>
                                                                <th class="serial">Piezas</th>
                                                                <th>Clase</th>
                                                                <th>Producto</th>
                                                                <th>Cantidad</th>
                                                            </tr>
                                                        </thead>
                                                      <tbody>
                                                            <!--  <tr>
                                                                <td class="serial">1.</td>
                                                                <td class="avatar">
                                                                    <div class="round-img">
                                                                        <a href="#"><img class="rounded-circle" src="images/avatar/1.jpg" alt=""></a>
                                                                    </div>
                                                                </td>
                                                                <td> #5469 </td>
                                                                <td>  <span class="name">Louis Stanley</span> </td>
                                                                <td> <span class="product">iMax</span> </td>
                                                                <td><span class="count">231</span></td>
                                                                <td>
                                                                    <span class="badge badge-complete">Complete</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="serial">2.</td>
                                                                <td class="avatar">
                                                                    <div class="round-img">
                                                                        <a href="#"><img class="rounded-circle" src="images/avatar/2.jpg" alt=""></a>
                                                                    </div>
                                                                </td>
                                                                <td> #5468 </td>
                                                                <td>  <span class="name">Gregory Dixon</span> </td>
                                                                <td> <span class="product">iPad</span> </td>
                                                                <td><span class="count">250</span></td>
                                                                <td>
                                                                    <span class="badge badge-complete">Complete</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="serial">3.</td>
                                                                <td class="avatar">
                                                                    <div class="round-img">
                                                                        <a href="#"><img class="rounded-circle" src="images/avatar/3.jpg" alt=""></a>
                                                                    </div>
                                                                </td>
                                                                <td> #5467 </td>
                                                                <td>  <span class="name">Catherine Dixon</span> </td>
                                                                <td> <span class="product">SSD</span> </td>
                                                                <td><span class="count">250</span></td>
                                                                <td>
                                                                    <span class="badge badge-complete">Complete</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="serial">4.</td>
                                                                <td class="avatar">
                                                                    <div class="round-img">
                                                                        <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""></a>
                                                                    </div>
                                                                </td>
                                                                <td> #5466 </td>
                                                                <td>  <span class="name">Mary Silva</span> </td>
                                                                <td> <span class="product">Magic Mouse</span> </td>
                                                                <td><span class="count">250</span></td>
                                                                <td>
                                                                    <span class="badge badge-pending">Pending</span>
                                                                </td>
                                                            </tr>
                                                            <tr class=" pb-0">
                                                                <td class="serial">5.</td>
                                                                <td class="avatar pb-0">
                                                                    <div class="round-img">
                                                                        <a href="#"><img class="rounded-circle" src="images/avatar/6.jpg" alt=""></a>
                                                                    </div>
                                                                </td>
                                                                <td> #5465 </td>
                                                                <td>  <span class="name">Johnny Stephens</span> </td>
                                                                <td> <span class="product">Monitor</span> </td>
                                                                <td><span class="count">250</span></td>
                                                                <td>
                                                                    <span class="badge badge-complete">Complete</span>
                                                                </td>
                                                            </tr>-->
                                                        </tbody>
                                                    </table>
                                                    <table class="table " id="tablas_mesas">
                                                        <thead>
                                                            <tr>
                                                                <th class="serial">Fecha</th>
                                                                <th>Folio</th>
                                                                <th>Nombre del cliente</th>
                                                                <th>Piezas</th>
                                                                <th>Clase</th>
                                                                <th>Producto</th>
                                                                <th>Cantidad</th>
                                                            </tr>
                                                        </thead>
                                                      <tbody>
                                                        </tbody>
                                                    </table>
                                                </div> <!-- /.table-stats -->
                                            </div>
                                        </div> <!-- /.card -->
                                    </div>  <!-- /.col-lg-8 -->

                                  <!-- <div class="col-xl-4">
                                        <div class="row">
                                            <div class="col-lg-6 col-xl-12">
                                                <div class="card br-0">
                                                    <div class="card-body">
                                                        <div class="chart-container ov-h">
                                                          <!--  <div id="flotPie1" class="float-chart"></div>--
                                                        </div>
                                                    </div>
                                                </div><!-- /.card --
                                            </div>


                                        </div>
                                    </div>   --> <!-- /.col-md-4 -->
                                </div>
                            </div>

                            <div class="card-body"></div>
                        </div>
                    </div><!-- /# column -->
                </div>
                <!--  /Traffic -->
                <div class="clearfix"></div>

                <!-- /.orders -->
                <!-- To Do and Live Chat -->

                <!-- /To Do and Live Chat -->
                <!-- Calender Chart Weather  -->
                <div class="row">




                <!-- /Calender Chart Weather -->

                <!-- Modal - Calendar - Add Category -->

            <!-- /#add-category -->
            </div>
            <!-- .animated -->
        </div>
        <!-- /.content -->
        <div class="clearfix"></div>
        <!-- Footer -->
        <footer class="site-footer">
            <div class="footer-inner bg-white">
                <div class="row">
                    <div class="col-sm-6">
                        Copyright &copy; 2019
                    </div>
                    <div class="col-sm-6 text-right">
                        CHARROS
                    </div>
                </div>
            </div>
        </footer>
        <!-- /.site-footer -->
    </div>
    <!-- /#right-panel -->

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
    <script src="../Estilos/administracion/assets/js/main.js"></script>

    <!--  Chart js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.7.3/dist/Chart.bundle.min.js"></script>

    <!--Chartist Chart-->
    <script src="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartist-plugin-legend@0.6.2/chartist-plugin-legend.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot-pie@1.0.0/src/jquery.flot.pie.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/simpleweather@3.1.0/jquery.simpleWeather.min.js"></script>
    <script src="../Estilos/administracion/assets/js/init/weather-init.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.js"></script>
    <script src="../Estilos/administracion/assets/js/init/fullcalendar-init.js"></script>

    <!--Local Stuff-->
    <script>
        jQuery(document).ready(function($) {
            "use strict";

            // Pie chart flotPie1
            var piedata = [
                { label: "Desktop visits", data: [[1,32]], color: '#5c6bc0'},
                { label: "Tab visits", data: [[1,33]], color: '#ef5350'},
                { label: "Mobile visits", data: [[1,35]], color: '#66bb6a'}
            ];

            $.plot('#flotPie1', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        innerRadius: 0.65,
                        label: {
                            show: true,
                            radius: 2/3,
                            threshold: 1
                        },
                        stroke: {
                            width: 0
                        }
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
            // Pie chart flotPie1  End


            // Traffic Chart using chartist
            if ($('#traffic-chart').length) {
                var chart = new Chartist.Line('#traffic-chart', {
                  labels: ['Ene', 'Feb', 'Marz', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic'],
                  series: [
                  [0, 18000, 0,  25000,  22000,  0], //platillos
                  [0, 33000, 15000,  20000,  15000,  300], // bebidas
                  [0, 15000, 28000,  15000,  30000,  5000], //snacks
                  [0, 15000, 28000,  15000,  30000,  5000] //otros
                  ]
              }, {
                  low: 0,
                  showArea: true,
                  showLine: false,
                  showPoint: false,
                  fullWidth: true,
                  axisX: {
                    showGrid: true
                }
            });

                chart.on('draw', function(data) {
                    if(data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                                begin: 2000 * data.index,
                                dur: 2000,
                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                to: data.path.clone().stringify(),
                                easing: Chartist.Svg.Easing.easeOutQuint
                            }
                        });
                    }
                });
            }
            // Traffic Chart using chartist End
            //Traffic chart chart-js
            if ($('#TrafficChart').length) {
                var ctx = document.getElementById( "TrafficChart" );
                ctx.height = 150;
                var myChart = new Chart( ctx, {
                    type: 'line',
                    data: {
                        labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
                        datasets: [
                        {
                            label: "Visit",
                            borderColor: "rgba(4, 73, 203,.09)",
                            borderWidth: "1",
                            backgroundColor: "rgba(4, 73, 203,.5)",
                            data: [ 0, 2900, 5000, 3300, 6000, 3250, 0 ]
                        },
                        {
                            label: "Bounce",
                            borderColor: "rgba(245, 23, 66, 0.9)",
                            borderWidth: "1",
                            backgroundColor: "rgba(245, 23, 66,.5)",
                            pointHighlightStroke: "rgba(245, 23, 66,.5)",
                            data: [ 0, 4200, 4500, 1600, 4200, 1500, 4000 ]
                        },
                        {
                            label: "Targeted",
                            borderColor: "rgba(40, 169, 46, 0.9)",
                            borderWidth: "1",
                            backgroundColor: "rgba(40, 169, 46, .5)",
                            pointHighlightStroke: "rgba(40, 169, 46,.5)",
                            data: [1000, 5200, 3600, 2600, 4200, 5300, 0 ]
                        }
                        ]
                    },
                    options: {
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        }

                    }
                } );
            }
            //Traffic chart chart-js  End

        });
    </script>

</body>
</html>
