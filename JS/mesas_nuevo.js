  var bandera_nombre=0;

  var retorno;

$(document).ready(function(){
  $("#folio_post").hide();
bandera_nombre=0;

 $("ul.tabs").tabs().tabs($("div.panes > div"), { history: true });

var a;

//promtm_paswword();



     $("#cliente").attr('disabled','disabled');
     $("#mesa_valor").attr('disabled','disabled');

     $("#tab_1_").click(function(event) {
            eliminas();
          $('#tabs-1').append('<div id="quita_1"></div>');
          //$("#quita_1").load("contenido_modal_2.php .container");
          llena_modal2('#quita_1');
          $(".ui-accordion-content").height(250);
          $("#tipo_cuenta").val("5");
        setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
          setTimeout("obtiene_pedido()",60);
          $("#mesa_valor").attr('disabled','disabled');
         });

      $("#tab_2_").click(function(event) {
        eliminas();
             $('#tabs-2').append('<div id="quita_2"></div>');
             llena_modal2('#quita_2');
             $(".ui-accordion-content").height(250);
               $("#tipo_cuenta").val("1");
               setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
               setTimeout("obtiene_pedido()",60);
               $("#mesa_valor").attr('disabled','disabled');
           });



      $("#tab_3_").click(function(event) {
                    eliminas();
                   $('#tabs-3').append('<div id="quita_3"></div>');
                   //$("#quita_3").load("contenido_modal_2.php .container");
                   llena_modal2('#quita_3');
                   $(".ui-accordion-content").height(250);
                   $("#tipo_cuenta").val("2");
                setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
                   setTimeout("obtiene_pedido()",60);
                  $("#mesa_valor").attr('disabled','disabled');
                 });

      $("#tab_4_").click(function(event) {
        eliminas();
                   $('#tabs-4').append('<div id="quita_4"></div>');
                   //$("#quita_4").load("contenido_modal_2.php .container");
                   llena_modal2('#quita_4');
                   $(".ui-accordion-content").height(250);
                   $("#tipo_cuenta").val("3");
                   setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
                   setTimeout("obtiene_pedido()",60);
                   $("#mesa_valor").attr('disabled','disabled');
                             });

        $("#tab_5_").click(function(event) {
                               eliminas();
                               $('#tabs-5').append('<div id="quita_5"></div>');
                               llena_modal2('#quita_5');
                               $(".ui-accordion-content").height(250);
                               $("#tipo_cuenta").val("4");
                               setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
                               setTimeout("obtiene_pedido()",60);
                               $("#mesa_valor").attr('disabled','disabled');
                             });

        $("#tab_6_").click(function(event) {
                               eliminas();
                               $('#tabs-6').append('<div id="quita_6"></div>');
                               llena_modal2('#quita_6');
                               $(".ui-accordion-content").height(250);
                               $("#tipo_cuenta").val("6");
                               setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
                               setTimeout("obtiene_pedido()",60);
                               $("#mesa_valor").attr('disabled','disabled');

                              });


});

function cargar_modal(){
  eliminas();
   $("ul.tabs").tabs().tabs($("div.panes > div"), { history: true });
  $('#tabs-1').append('<div id="quita_1"></div>');
  //$("#quita_1").load("contenido_modal_2.php .container");
llena_modal2('#quita_1');
$(".ui-accordion-content").height(250);
setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
  $("#mesa_valor").attr('disabled','disabled');
 $("#tipo_cuenta").val("5");
 $("#folio_post").hide();
 setTimeout("obtiene_pedido()",60);
$ ( "#tabs" ).tabs( "option" , "active" , id2Index ( "#tabs" , "#tabs-1" ) ) ;

}



function llena_modal2(div_param){
  $(div_param).append('<link rel="stylesheet" href="../Estilos/bootstrap/bootstrap.min2.css">'
      +'<script src="../JS/bootstrap/bootstrap.min2.js"></script>'
    +'<script>'
    +'$( function() {'
      +'$("#accordion").accordion({'
      +'collapsible: true,'
        +'active: 4'
    +'});'
    +'} );'
    +'</script>'
    +'<style>'
    +'::-webkit-scrollbar {'
      +'width: 25px;'
      +'height: 25px;'
    +'}'
    +'::-webkit-scrollbar-button {'
      +'width: 0px;'
      +'height: 0px;'
    +'}'
    +'::-webkit-scrollbar-thumb {'
      +'background: #d2d2d2;'
      +'border: 0px none #ffffff;'
      +'border-radius: 45px;'
    +'}'
    +'::-webkit-scrollbar-thumb:hover {'
      +'background:  #d08c0d;'
    +'}'
    +'::-webkit-scrollbar-thumb:active {'
      +'background: #d08c0d;'
    +'}'
    +'::-webkit-scrollbar-track {'
      +'background: #666666;'
      +'border: 0px none #ffffff;'
      +'border-radius: 45px;'
    +'}'
    +'::-webkit-scrollbar-track:hover {'
      +'background: #666666;'
    +'}'
    +'::-webkit-scrollbar-track:active {'
      +'background: #333333;'
    +'}'
    +'::-webkit-scrollbar-corner {'
      +'background: transparent;'
    +'}'
    +'#accordion .ui-accordion-content {'
    +'max-height: 500px;'
    +'}'
    +'#head{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'#head2{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'#head3{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'#head4{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'#head5{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'#body{'
        +'border: 1px solid #dfdfdf;'
    +'}'
    +'.table-wrapper-scroll-y {'
    +'display: block;'
    +'max-height: 450px;'
    +'overflow-y: auto;'
    +'-ms-overflow-style: -ms-autohiding-scrollbar;'
    +'}'
    +'.butt-mesas {'
      +'-webkit-border-radius: 4;'
      +'-moz-border-radius: 4;'
      +'border-radius: 4px;'
      +'text-shadow: 1px 1px 15px #666666;'
      +'font-family: Arial;'
      +'color: #ffffff;'
      +'font-size: -10px;'
      +'padding: 5px 10px;'
      +'background: #88dd77;'
      +'border: solid #000000 1px;'
      +'text-decoration: none;'
      +'width: 100%;'
    +'}'

    +'.butt-mesas4 {'
      +'-webkit-border-radius: 4;'
      +'-moz-border-radius: 4;'
      +'border-radius: 4px;'
      +'text-shadow: 1px 1px 15px #666666;'
      +'font-family: Arial;'
      +'color: #ffffff;'
      +'font-size: -10px;'
      +'padding: 5px 10px;'
      +'background: #F39814;'
      +'border: solid #000000 1px;'
      +'text-decoration: none;'
      +'width: 100%;'
    +'}'

    +'.butt-mesas:hover {'
      +'background: #9ae288;'
      +'text-shadow: 1px 1px 15px #666666;'
      +'text-decoration: none;'
    +'}'

    +'.butt-mesas2 {'
      +'-webkit-border-radius: 4;'
      +'-moz-border-radius: 4;'
      +'border-radius: 4px;'
      +'text-shadow: 1px 1px 15px #666666;'
      +'font-family: Arial;'
      +'color: #ffffff;'
      +'font-size: -10px;'
      +'padding: 2.5px 5.5px;'
      +'background: #88dd77;'
      +'border: solid #000000 1px;'
      +'text-decoration: none;'
      +'width: 105%;'
      +'height: 100px;'
    +'}'
    +'</style>'
    +'<div class="container">'
                //nuevo cocina
                +'<div class="row"  id="head">'
                   +'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="head5">'
                     +'<div class="col-md-4">'
                       +'<button type="button" class="btn btn-info btn-lg" onclick="respuesta_cocina();">Enviar a Cocina</button>'
                     +'</div>'
                   +'</div>' 
                +'</div>'
                   // termina nuevo cocina
      +'<div class="row"  id="head">'
    +'  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="head2">'
      +' <div class="row">'
        +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head3">'
          +'<div class="form-group row">'
              +'<label for="full_name" class="col-md-4 col-form-label text-md-right">Mesa</label>'
              +'<div class="col-md-3">'
              +'<input class="form-control" type="text" name="mesa_valor" id="mesa_valor">'
              +'</div>'
            +'</div>'
            +'<div class="form-group row">'
              +'<label for="full_name" class="col-md-4 col-form-label text-md-right">Cliente</label>'
              +'<div class="col-md-8">'
              +'<input class="form-control" type="text" name="cliente" id="cliente">'
              +'<a href="#openModal4"><button type="button" class="btn btn-primary" id="cambio_mesas_">Cambio de mesa</button></a>'
              +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head4">'
            +'<div class="form-group row">'
                +'<div class="col-md-12">'
                +'<input class="form-control" type="text" name="prod_desc" id="prod_desc" placeholder="Describe el producto">'
                +'</div>'
                +'<div class="col-md-8">'
                +'<input class="form-control" type="number" name="prod_prec" id="prod_prec" placeholder="$">'
                +'</div>'
                +'<div class="col-md-4">'
                +'<button type="button" class="btn btn-primary  btn-sm" onclick="add_nuevo_prod();">agregar</button>'
                +'<input class="form-control" type="text" disabled="disabled" name="folio_post" id="folio_post">'
              +'</div>'
            +'</div>'
        +'</div>'
        +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head5">'
         /* +'<div class="form-group row">'
            +'<label for="full_name" class="col-md-6 col-form-label text-md-right">Total</label>'
            +'<div class="col-md-6">'
            +'<input class="form-control" type="text" name="total" value="0" id="total" disabled>'
            +'</div>'
          +'</div>'*/
            +'<div class="form-group row">'
              +'<div class="col-md-6">'
                +'<button type="button" class="btn btn-success  btn-lg" onclick="imprime_ticket();">Terminar cuenta</button>'
              +'</div>'
             /*+'<div class="col-md-4">'
              +'<button type="button" class="btn btn-info btn-sm" onclick="imprime_ticket_cocina();">Enviar a Cocina</button>'
             +'</div>'*/
             +'<div class="col-md-6">'
              +'<button type="button" class="btn btn-danger  btn-lg" onclick="reimprime_ticket();">Reimprimir ticket</button>'
             +'</div>'
             
           +'</div>'
                //
             +'<div class="form-group row">'
             +'<label for="full_name" class="col-md-6 col-form-label text-md-right"><Strong>Total</Strong></label>'
              +'<div class="col-md-6">'
               +'<Strong><input class="form-control" type="text" name="total" value="0" id="total" disabled></Strong>'
              +'</div>'
           +'</div>'
             //
          +'</div>'
        +'</div>' //termina head 5
       
      +'</div>'
      +'</div>'
    +'<div class="row" id="body">'
    +'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="body2">'
      +'<div class="row">'
      +'<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="head3" >'
        +'<div id="accordion">'
        /*------------------------------------------------------------------------------------*/
           +'<h3>PLATILLOS</h3>'
      +'<div>'
      +'<div style="width:220px; height:1000px; overflow:auto; margin-left:-40%;">'
               +'<div class="container">'
                 +'<div id="inserta_bts_platillos">'
                +'</div>'
   +'</div>'
 +'</div>'
+'</div>'
  +'<h3>BEBIDAS</h3>'
  +'<div>'
    +'<p>'
      +'<div style="width:220px; height:800px; overflow:auto; margin-left:-40%;">'
               +'<div class="container">'
                 +'<div id="inserta_bts_bebidas">'
                 +'</div>'
        +'</div>'
   +'</div>'
    +'</p>'
  +'</div>'
  +'<h3>SNAKS</h3>'
  +'<div>'
    +'<p>'
      +'<div style="width:220px; height:820px; overflow:auto; margin-left:-40%;">'
               +'<div class="container">'
                 +'<div id="inserta_bts_snaks">'
                 +'</div>'
        +'</div>'
   +'</div>'
    +'</p>'
  +'</div>'
  +'<h3>OTROS</h3>'
+'<div>'
+'<div style="width:220px; height:820px; overflow:auto; margin-left:-40%;">'
      +'<div class="container">'
        +'<div id="inserta_bts_otros">'
        +'</div>'
+'</div>'
+'</div>'
+'</div>'

/*------------------------------------------------------------------------------------**********************************************************************************************/
+'</div>'
      +'</div> <!-- termina div izquierdo panel acordion -->'
      +'<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" id="head4">'
+'<div style="height:330px; overflow:auto;">'
    +'<div class="container scroll2">'
   +'<div class="row">'
  	 +'<div class="col-md-4">'
       +'<div id="inserta_contenido1">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido2">'
        +'</div>'
       +'</div>'
       +'<div class="col-md-4">'
         +'<div id="inserta_contenido3">'
         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
    +'<div class="col-md-4">'
       +'<div id="inserta_contenido4">'
       +'</div>'
      +'</div>'
    +'<div class="col-md-4">'
        +'<div id="inserta_contenido5">'
        +'</div>'
       +'</div>'
       +'<div class="col-md-4">'
         +'<div id="inserta_contenido6">'
         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
    +'<div class="col-md-4">'
       +'<div id="inserta_contenido7">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido8">'
        +'</div>'
       +'</div>'
       +'<div class="col-md-4">'
         +'<div id="inserta_contenido9">'
         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
    +'<div class="col-md-4">'
       +'<div id="inserta_contenido10">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido11">'
        +'</div>'
       +'</div>'
       +'<div class="col-md-4">'
         +'<div id="inserta_contenido12">'
         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
    +'<div class="col-md-4">'
       +'<div id="inserta_contenido13">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido14">'
        +'</div>'
       +'</div>'
       +'<div class="col-md-4">'
         +'<div id="inserta_contenido15">'
         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido16">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido17">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido18">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
    +'<div id="inserta_contenido19">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido20">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido21">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido22">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido23">'
      +' </div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido24">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido25">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido26">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido27">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido28">'
      +'</div>'
     +'</div>'
    +' <div class="col-md-4">'
       +'<div id="inserta_contenido29">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido30">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
  +' <div class="col-md-4">'
      +'<div id="inserta_contenido31">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido32">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido33">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido34">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido35">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido36">'
        +'</div>'
       +'</div>'
+'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido37">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido38">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido39">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido40">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido41">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido42">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido43">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido44">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido45">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido46">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido47">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido48">'
        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido49">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido50">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido51">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido52">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido53">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido54">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido55">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido56">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido57">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido58">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido59">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido60">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido61">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido62">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido63">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido64">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido65">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido66">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido67">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido68">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido69">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido70">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido71">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido72">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido73">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido74">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido75">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido76">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido77">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido78">'
        +'</div>'
       +'</div>'
  +'</div>'
    +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="inserta_contenido79">'
      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="inserta_contenido80">'
       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="inserta_contenido81">'
        +'</div>'
       +'</div>'
  +'</div>'
+'</div> <!-- cirra container -->'
+'</div> <!-- termina overflow -->'
    +'</div>  <!-- panel central contenido -->'
    +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head4">'
      +'<div class="row">'
        +'<div class="table-wrapper-scroll-y">'
          +'<table class="table table-striped table-bordered table-sm" id="applendData" style="font-size:12px">'
          +'<thead>'
              +'<tr>'
              +'<th>Cant</th>'
                +'<th>Platillo</th>'
                +'<th>Descripcion</th>'
              +'</tr>'
            +'</thead>'
            +'<tbody>'
            +'</tbody>'
          +'</table>'
        +'</div>'
      +'</div>'
    +'</div> <!-- termina tabla de ventas -->'
    +'</div>'
  +'</div>'
+'</div>'
+'</div><!-- termina conteiner -->');

for (var i = 1; i < 6; i++) {
     botones_menu_secciones(i);
}
btns_individuales();

}

function eliminas(){
  $("#quita_4").remove(); // cuenta principal
  $("#quita_1").remove(); // cuenta principal
  $("#quita_2").remove(); // cuenta principal
  $("#quita_3").remove(); // cuenta principal
  $("#quita_5").remove(); // cuenta principal
  $("#quita_6").remove();
  bandera_nombre=0;
}





// fuente
//http://www.riksoft.it/wikiriks/jquery/select-ui-tab-by-id-and-index
function id2Index ( tabsId , srcId )
{
  var index =- 1 ;
  var i = 0 , tbH = $ ( tabsId ) .  find ( "li a" ) ;
  var lntb = tbH.  length ;
  if ( lntb > 0 ) {
    for ( i = 0 ; i < lntb ; i ++ ) {
      o = tbH [ i ] ;
      if ( o. href . search ( srcId ) > 0 ) {
        index = i ;
      }
    }
  }
  return index ;
}

function botones_menu_secciones(param){



  $.ajax({
      type:'POST',
      url:'obtiene_btns.php',
      dataType: "json",
      data:{id_Divicion:param},
      success:function(data){
        //console.log(data);
            /* Vemos que la respuesta no este vacía y sea una arreglo */
               if(data != null && $.isArray(data)){

                /* Recorremos tu respuesta con each */
               $.each(data, function(index, value){

                 if(param===1){
                   jQuery('#inserta_bts_platillos').append('<div class="row"><div class="col-md-12">'
                   +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,1);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                 }else if (param===2) {
                   jQuery('#inserta_bts_bebidas').append('<div class="row"><div class="col-md-12">'
                   +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,2);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                 }else if (param===3) {
                   jQuery('#inserta_bts_snaks').append('<div class="row"><div class="col-md-12">'
                   +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,3);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                 }
                 else if (param===5) {
                   jQuery('#inserta_bts_otros').append('<div class="row"><div class="col-md-12">'
                   +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,5);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                 }
               });
            }

      },
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
        console.log("Falló la conversión JSON.");
    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}
  });


}

function cambia_color(id){

  for (var i = 0; i < 25; i++) {
  $("#"+i).removeClass();
  $("#"+i).toggleClass("butt-mesas");
}
$("#"+id).removeClass();
$("#"+id).toggleClass("butt-mesas4");
}

function selecciona_contenido(param1,param2){
	for (var i = 1; i < 82; i++) {
    $("#inserta_contenido"+i).empty();
  }

//  console.log(param1+" "+param2);
  contador=0;
  $.ajax({
      type:'POST',
      url:'obtiene_btns_contenido.php',
      dataType: "json",
      data:{id_Divicion:param2,id_sub_Divicion:param1},
      success:function(data){
        //console.log(data);
            /* Vemos que la respuesta no este vacía y sea una arreglo */
               if(data != null && $.isArray(data)){

                /* Recorremos tu respuesta con each */
               $.each(data, function(index, value){
                  contador+=1;
                //  console.log(contador);


                    jQuery('#inserta_contenido'+contador).append('<button onclick="selecciona_productos(this.id)" id="'+value.ID_Producto+
                    '" style="color:red;height:55px; width:100px; font-size:12px;'+
                    '-webkit-border-radius: 4;'+
                    '-moz-border-radius: 4;'+
                    'border-radius: 4px;'+
                    'text-shadow: 1px 1px 15px #666666;'+
                    'font-family: Arial;'+
                    'color: #ffffff;'+
                    'padding: 2.5px 5.5px;'+
                    'background: #88dd77;'+
                    'border: solid #000000 1px;'+
                    'text-decoration: none;'+
                    '">'
                    +value.Descripcion+'</button>');


               });
            }

      },
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
        console.log("Falló la conversión JSON.");
    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}
  });
}


function selecciona_productos(param){

  $("table#applendData tbody").empty();
//retorno=checha_nombre();

  if(bandera_nombre===0 || bandera_nombre==='0'){
    promtm();
    bandera_nombre=1;
  }else{
  clientes=$("#cliente").val();

  /*if(clientes===''){
    console.log(clientes);
    clientes='0';
    console.log(clientes);
  }*/


  $.ajax({
      type:'POST',
      url:'inserta_datos_nuevo.php',
      dataType: "json",
      data:{valor_producto:param,mesa:$("#mesa_valor").val(),cuenta_tipo:$("#tipo_cuenta").val(),cliente:clientes,nvo_prod:'',nvo_precio:0},
      success:function(data){
        //console.log(data+" seleciona_productos");
        if(data != null && $.isArray(data)){

         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){
         /* Vamos agregando a nuestra tabla las filas necesarias */
      //  $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");

            if(value.conteo==='0' && value.Divicion==='0' && value.Descripcion=='total'){
                 $("#total").val("$"+value.tot);
            }
            else{
              $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");
            }

        //validacion para clientes
      $("#cliente").val(value.Nombre_Clientes);
      if($("#cliente").val()!=""){
         $("#cliente").attr('disabled','disabled');
    } else{
       $("#cliente").attr('disabled','disabled');

    }


      });
     }

      },
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
        console.log("Falló la conversión JSON.");
    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}
  });
}
}



function add_nuevo_prod(){

  $("table#applendData tbody").empty();
  desc_prod=$("#prod_desc").val();
  prec_prod=$("#prod_prec").val();
  clientes=$("#cliente").val();

  $.ajax({
      type:'POST',
      url:'inserta_datos_nuevo.php',
      dataType: "json",
      data:{valor_producto:203,mesa:$("#mesa_valor").val(),cuenta_tipo:$("#tipo_cuenta").val(),cliente:clientes,nvo_prod:desc_prod,nvo_precio:prec_prod},
      success:function(data){


        if(data != null && $.isArray(data)){

         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){
         /* Vamos agregando a nuestra tabla las filas necesarias */
      //  $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");

            if(value.conteo==='0' && value.Divicion==='0' && value.Descripcion=='total'){
                 $("#total").val('$'+value.tot);
            }
            else{
              $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");
            }

            $("#prod_desc").val("");
            $("#prod_prec").val("");
            $("#cliente").val(value.Nombre_Clientes);
            if($("#cliente").val()!=""){
               $("#cliente").attr('disabled','disabled');
          } else{
             $("#cliente").attr('disabled','disabled');
             if(value.Con_o_Sin_nombre==='1'){
               bandera_nombre=1;
          }
          }

      });
     }

      },
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
        console.log("Falló la conversión JSON.");
    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}
  });
}

function transformarEnEditable(nodo) {
//    $("table#applendData tbody").empty();
           //El nodo recibido es SPAN
           var valor;
           var retorno;
           x0p({
            title: 'Ingresa Password',
            type: 'warning',
            inputType: 'password',
            inputPlaceholder: 'Ingresa clave',
            inputColor: '#F29F3F',
            inputPromise: function(button, value) {
                var p = new Promise(function(resolve, reject) {
                  valor=value;
                    if(value == '' || isNaN(value))
                        resolve('Not a number!');
                    resolve(null);
                });
                return p;
            }
         }, function(button, text) {
            if(button == 'warning') {
              if(valor == '0306'){
                x0p('CORRECTO!',
                    '',
                    'ok', false);

           //var editando=false;
           //if (editando == false) {
               var nodoTd = nodo.parentNode; //Nodo TD
               var nodoTr = nodoTd.parentNode; //Nodo TR
            //   var nodoContenedorForm = document.getElementById('contenedorForm2'); //Nodo DIV
               var nodosEnTr = nodoTr.getElementsByTagName('td');
               var tipo_plat = nodosEnTr[1].textContent; var elemento_desc= nodosEnTr[2].textContent;
              console.log("mesa:"+ $("#mesa_valor").val()+" cuenta:"+$("#tipo_cuenta").val()+" tipo platillo:"+tipo_plat+" desc_pltillo:"+elemento_desc);
               $.ajax({
                   type:'POST',
                   url:'elimina_productos_nuevo.php',
                   dataType: "json",
                   data:{divicion:tipo_plat,descp:elemento_desc,mesa:$("#mesa_valor").val(),cuenta_tipo:$("#tipo_cuenta").val()},
                   success:function(data){
                     if(data != null && $.isArray(data)){
                      // console.log("entro al if del data");
                       $("table#applendData tbody").empty();
                      /* Recorremos tu respuesta con each */
                     $.each(data, function(index, value){
                      /* Vamos agregando a nuestra tabla las filas necesarias */
                     if(value.conteo==='0' && value.Divicion==='0' && value.Descripcion==='total'){
                       $("#total").val('$'+value.tot);
                     }
                     else{
                       $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");
                     }
                     $("#cliente").val(value.Nombre_Clientes);
                     if($("#cliente").val()!=""){
                        $("#cliente").attr('disabled','disabled');
                   } else{
                      $("#cliente").attr('disabled','disabled');
                      if(value.Con_o_Sin_nombre==='1'){
                        bandera_nombre=1;
                   }
                   }

                   });
                  }
                  else{
                    //console.log("nada");
                    a=1;
                  }
                   },
                   error: function (xhr, error) {
                 if (xhr.status === 0) {
                     //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
                     alert("Por favor verifica tu conexión a la red.")
                 } else if (xhr.status === 404) {
                     //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
                     alert("sitio no encontrado")
                 } else if (xhr.status === 500) {
                     //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
                     alert("interno " + error)
                 } else if (error === 'parsererror') {
                  console.log("error");

                 } else if (error === 'timeout') {
                     //return ($("#mensajeError").html('<center>Error time out.</center>'));
                     alert("Error time out.")
                 } else if (error === 'abort') {
                     // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
                     alert("Peticion Ajax cancelada.")
                 } else {
                     //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
                     alert("Uncaught")
                 }

             }
               });

           //}
         }else {
           x0p('incorrecto!',
               'Password incorrecto!',
               'error', false);
         }
       }

    });

       }


function promtm(){
   x0p('Ingresa nombre del cliente', null, 'input',
       function(button, text) {
           if(button == 'info') {
               x0p('CORRECTO!',
                   'Cliente guardado!',
                   'ok', false);
                   bandera_nombre=1;
                   $("#cliente").val(text);
                   $("#cliente").attr('disabled','disabled');
           }
           if(button == 'cancel') {
               x0p('CUENTA SIN NOMBRE',
                   'Esta cuenta no tendra nombre.',
                   'error', false);
                      bandera_nombre=1;
                      $("#cliente").attr('disabled','disabled');
           }
       });
     }


function titulo_mesa(id){
       var res = id.substring(4, 6);

        //mesa_.innerHTML=res;
            $("#mesas_s").val(res);
        $("#mesa_valor").val($("#mesas_s").val());
        $("#mesa_valor").attr('disabled','disabled');
     }

     function titulo_mesa2(id){
            var res = id.substring(0,2);
         //console.log(id+" "+res+" titulo_mesa2");
             //mesa_.innerHTML=res;
                 $("#mesas_s").val(res);
             $("#mesa_valor").val($("#mesas_s").val());
             $("#mesa_valor").attr('disabled','disabled');

             $("#individual"+id).attr("value",$("#cliente").val());//val($("#cliente").val());

          }





     function obtiene_pedido(){
$("table#applendData tbody").empty();
       $.ajax({
           type:'POST',
           url:'obtiene_pedido_nuevo.php',
           dataType: "json",
           data:{valor_producto:0,mesa:$("#mesa_valor").val(),cuenta_tipo:$("#tipo_cuenta").val(),cliente:'',nvo_prod:'',nvo_precio:0},
           success:function(data){
             if(data != null && $.isArray(data)){
              /* Recorremos tu respuesta con each */
             $.each(data, function(index, value){
              /* Vamos agregando a nuestra tabla las filas necesarias */
           //  $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");

                 if(value.conteo==='0' && value.Divicion==='0' && value.Descripcion=='total'){
                      $("#total").val("$"+value.tot);
                 }
                 else{
                   $("table#applendData tbody").append("<tr><td align='left'>"+ value.conteo +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td class='text-center'><a href='javascript:void(0)' onclick='transformarEnEditable(this);' class='btn btn-danger btn-sm'>X</a></td></tr>");
                 }

            // console.log(value.Con_o_Sin_nombre);
             if(value.Con_o_Sin_nombre===0 || value.Con_o_Sin_nombre==='0'){
               bandera_nombre=1;
               promtm();
             }//validacion para clientes
             else{
               bandera_nombre=1;
               $("#cliente").val(value.Nombre_Clientes);
               if($("#cliente").val()!=""){
                  $("#cliente").attr('disabled','disabled');
             } else{
                $("#cliente").attr('disabled','disabled');

             }
            }



           });
          }

           },
           error: function (xhr, error) {
         if (xhr.status === 0) {
             //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
             alert("Por favor verifica tu conexión a la red.")
         } else if (xhr.status === 404) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("sitio no encontrado")
         } else if (xhr.status === 500) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("interno " + error)
         } else if (error === 'parsererror') {
             //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
             console.log("Falló la conversión JSON.");
         } else if (error === 'timeout') {
             //return ($("#mensajeError").html('<center>Error time out.</center>'));
             alert("Error time out.")
         } else if (error === 'abort') {
             // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
             alert("Peticion Ajax cancelada.")
         } else {
             //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
             alert("Uncaught")
         }

     }
       });

     }

     function checha_nombre(){
       //console.log($("#mesa_valor").val()+" "+$("#tipo_cuenta").val());
       $.ajax({
           type:'POST',
           url:'obtiene_pedido_nuevo.php',
           dataType: "json",
           data:{valor_producto:0,mesa:$("#mesa_valor").val(),cuenta_tipo:$("#tipo_cuenta").val(),cliente:'',nvo_prod:'',nvo_precio:0},
           success:function(data){
             $.each(data, function(index, value){
              if(value.Con_o_Sin_nombre==='1'){
                retorno=1;

           } else {
             retorno=0;
           }
         });
           },
           error: function (xhr, error) {
         if (xhr.status === 0) {
             //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
             alert("Por favor verifica tu conexión a la red.")
         } else if (xhr.status === 404) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("sitio no encontrado")
         } else if (xhr.status === 500) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("interno " + error)
         } else if (error === 'parsererror') {
             //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
             console.log("Falló la conversión JSON.");
         } else if (error === 'timeout') {
             //return ($("#mensajeError").html('<center>Error time out.</center>'));
             alert("Error time out.")
         } else if (error === 'abort') {
             // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
             alert("Peticion Ajax cancelada.")
         } else {
             //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
             alert("Uncaught")
         }

     }
       });
//console.log(retorno+" retorno");
return retorno;
     }


function btns_individuales(){

 var contador=0;
       $.ajax({
           type:'POST',
           url:'obtiene_btns_indv.php',
           dataType: "json",
           data:{zona:7},
           success:function(data){
                 /* Vemos que la respuesta no este vacía y sea una arreglo */
                    if(data != null && $.isArray(data)){

                     /* Recorremos tu respuesta con each */
                    $.each(data, function(index, value){
                       contador+=1;
                       $("#"+value.No_Mesa+"").remove();
//console.log(value.Ocupacion+" "+contador);
                      if(value.Ocupacion==='1'){
                        jQuery('#individual'+contador).append('<a href="#openModal3" onclick="cargar_modal3()"><button id="'+value.No_Mesa+
                        '" style="color:red;height:55px; width:100px; font-size:12px;'+
                        '-webkit-border-radius: 4;'+
                        '-moz-border-radius: 4;'+
                        'border-radius: 4px;'+
                        'text-shadow: 1px 1px 15px #666666;'+
                        'font-family: Arial;'+
                        'color: #ffffff;'+
                        'padding: 2.5px 5.5px;'+
                        'background: #FFA500;'+
                        'border: solid #000000 1px;'+
                        'text-decoration: none;'+
                        '" onclick="titulo_mesa2(this.id);">'
                        +value.Nombre_Clientes+'</button></a>');

                      } else {
                        jQuery('#individual'+contador).append('<a href="#openModal3" onclick="cargar_modal3()"><button id="'+value.No_Mesa+
                        '" style="color:red;height:55px; width:100px; font-size:12px;'+
                        '-webkit-border-radius: 4;'+
                        '-moz-border-radius: 4;'+
                        'border-radius: 4px;'+
                        'text-shadow: 1px 1px 15px #666666;'+
                        'font-family: Arial;'+
                        'color: #ffffff;'+
                        'padding: 2.5px 5.5px;'+
                        'background: #88dd77;'+
                        'border: solid #000000 1px;'+
                        'text-decoration: none;'+
                        '" onclick="titulo_mesa2(this.id);">'
                        +value.Descripcion+'</button></a>');

                      }


                    });
                 }

           },
           error: function (xhr, error) {
         if (xhr.status === 0) {
             //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
             alert("Por favor verifica tu conexión a la red.")
         } else if (xhr.status === 404) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("sitio no encontrado")
         } else if (xhr.status === 500) {
             //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
             alert("interno " + error)
         } else if (error === 'parsererror') {
             //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
             console.log("Falló la conversión JSON.");
         } else if (error === 'timeout') {
             //return ($("#mensajeError").html('<center>Error time out.</center>'));
             alert("Error time out.")
         } else if (error === 'abort') {
             // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
             alert("Peticion Ajax cancelada.")
         } else {
             //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
             alert("Uncaught")
         }

     }
       });


     }

  function modal2(){

      btns_individuales();
     $('#interno_2').remove();
    $('#tabs-1_2').append('<div id="interno_2"></div>');
  //  $("#interno_2").load("contenido_modal_3.php");
    $("#interno_2").append('<div class="container">'
   +'<div class="row">'
     +'<div class="col-md-2">'
       +'<div id="individual1">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual2">'

        +'</div>'
       +'</div>'
       +'<div class="col-md-2">'
         +'<div id="individual3">'

         +'</div>'
        +'</div>'
    +'<div class="col-md-2">'
       +'<div id="individual4">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual5">'

        +'</div>'
       +'</div>'
       +'<div class="col-md-2">'
         +'<div id="individual6">'

         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
  +'<div class="col-md-2">'
       +'<div id="individual7">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual8">'

        +'</div>'
       +'</div>'
       +'<div class="col-md-2">'
         +'<div id="individual9">'

         +'</div>'
        +'</div>'
    +'<div class="col-md-2">'
       +'<div id="individual10">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual11">'

        +'</div>'
       +'</div>'
       +'<div class="col-md-2">'
         +'<div id="individual12">'

         +'</div>'
        +'</div>'
   +'</div>'
  +'<br>'
   +'<div class="row">'
    +'<div class="col-md-2">'
       +'<div id="individual13">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual14">'

        +'</div>'
       +'</div>'
       +'<div class="col-md-2">'
         +'<div id="individual15">'

         +'</div>'
        +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual16">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual17">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual18">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-2">'
      +'<div id="individual19">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual20">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual21">'

        +'</div>'
       +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual22">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual23">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual24">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="individual25">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="individual26">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="individual27">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="individual28">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="individual29">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="individual30">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="individual31">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="individual32">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="individual33">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="individual34">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="individual35">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="individual36">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-4">'
      +'<div id="individual37">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-4">'
       +'<div id="individual38">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-4">'
        +'<div id="individual39">'

        +'</div>'
       +'</div>'
  +'</div>'

    +'</div>   <!-- cirra container -->');
  }
function borra_datos(){
$('#tabs-1_3').remove();

}
  function cargar_modal3(){

$('#tabs_cont').append('<div id="tabs-1_3"></div>');
     location.href="http://localhost/Restaurante_nuevo/Paginas/mesas.php#openModal3";
    $('#interno_3').remove();
   $('#tabs-1_3').append('<div id="interno_3"></div>');
   //$("#interno_3").load("contenido_modal_2.php");
   llena_modal2('#tabs-1_3');
   $(".ui-accordion-content").height(250);
    setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
      $("#mesa_valor").attr('disabled','disabled');
     $("#tipo_cuenta").val("5");
     $("#cambio_mesas_").hide();
      setTimeout("obtiene_pedido()",50);
  }


function muestra_nombres(){
  $.ajax({
      type:'POST',
      url:'obtiene_btns_nombres.php',
      dataType: "json",
      data:{zona:7},
      success:function(data){
            /* Vemos que la respuesta no este vacía y sea una arreglo */
               if(data != null && $.isArray(data)){

                /* Recorremos tu respuesta con each */
               $.each(data, function(index, value){
                  contador+=1;

                    jQuery('#individual'+contador).append('<a href="#openModal3" onclick="cargar_modal3()"><button id="'+value.No_Mesa+
                    '" style="color:red;height:55px; width:100px; font-size:12px;'+
                    '-webkit-border-radius: 4;'+
                    '-moz-border-radius: 4;'+
                    'border-radius: 4px;'+
                    'text-shadow: 1px 1px 15px #666666;'+
                    'font-family: Arial;'+
                    'color: #ffffff;'+
                    'padding: 2.5px 5.5px;'+
                    'background: #88dd77;'+
                    'border: solid #000000 1px;'+
                    'text-decoration: none;'+
                    '" onclick="titulo_mesa2(this.id);">'
                    +value.Descripcion+'</button></a>');


               });
            }

      },
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
        console.log("Falló la conversión JSON.");
    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}
  });
}

function imprime_ticket(){
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = $("#tipo_cuenta").val();
  $("#applendData").empty();
  $("#total").val("$0");
      revisa_cuentas(user_id);
      $("#cliente").val("");
  $.ajax({
      type:'POST',
      url: 'impresion_php/index.php',
      dataType: 'JSON',
      data:{mesa:user_id,tipo_cuenta:tipo_cuen},
      success: function(data){
         console.log("nada");


      }, // termina success
      error: function (xhr, error) {
           //console.log("entro a error");
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {


     console.log("imprime_ticket");


    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });

        //setTimeout("retorna_folio_mesas()",1600);


}

function retorna_folio_mesas(){
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = $("#tipo_cuenta").val();
  $("#applendData").empty();
  $("#total").val("$0");
      revisa_cuentas(user_id);
      $("#cliente").val("");
console.log("mesa "+user_id+" tipo cuenta "+tipo_cuen);
  $.ajax({
      type:'POST',
      url: 'retornafolio.php',
      dataType: 'JSON',
      data:{mesa:user_id,tipo_cuenta:tipo_cuen},
      success: function(data){
        if(data != null && $.isArray(data)){

         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){
			$("#folio_post").val("");
           $("#folio_post").val(value.Folio);
               console.log("folio retornado -> "+value.Folio);
          });
        }

      }, // termina success
      error: function (xhr, error) {
          // console.log("entro a error");
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {


     console.log("imprime_ticket");


    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });
$("#folio_post").hide();
}

function imprime_ticket_cocina(parametro1, parametro2){

  $.ajax({
    type:'POST',
    url: 'impresion_php/imprime_cocina.php',
    dataType: 'JSON',
    data:{mesa:parametro1,tipo_cuenta:parametro2},
    success: function(data){
    var loquesea=0;
      /* Recorremos tu respuesta con each */
      $.each(data, function(index, value){
       // console.log("RESPUESTA -> "+value.resultado);


            });
    }, // termina success
    error: function (xhr, error,data) {
  if (xhr.status === 0) {
      //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
      alert("Por favor verifica tu conexión a la red.")
  } else if (xhr.status === 404) {
      //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
      alert("sitio no encontrado")
  } else if (xhr.status === 500) {
      //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
      alert("interno " + error)
  } else if (error === 'parsererror') {
      console.log("Error retorno json");
     
     // x0p('SISTEMA', 'El pedido se envio a cocina, el ticket esta en la impresora!');

  } else if (error === 'timeout') {
      //return ($("#mensajeError").html('<center>Error time out.</center>'));
      alert("Error time out.")
  } else if (error === 'abort') {
      // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
      alert("Peticion Ajax cancelada.")
  } else {
      //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
      alert("Uncaught")
  }

}

    });

}

function respuesta_cocina(){
  var cad1="''", cad2="''", cad3="''", int1=0, int2=0, int3=0, int4=0;
  var int1 = $('#mesa_valor').val();
  var int2 = $("#tipo_cuenta").val();
  var respuesta;

  x0p({
    title: 'Operación',
    text: '¿Deseas enviar a cocina el pedido?.',
    icon: 'info',
    animationType: 'fadeIn',
    buttons: [
        {
            type: 'cancel'
        },
        {
            type: 'info',
            text: 'Enviar',
            showLoading: true
        }
    ]
}).then(function(data) {
    if(data.button == 'info') {
      
   


  $.ajax({
      type:'POST',
      url: 'backend.php',
      dataType: 'JSON',
      data:{opcion:6,int1:int1,int2:int2,int3:int3,int4:int4,var1:cad1,var2:cad2,var3:cad3},
      success: function(data){
      var loquesea=0;
        /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){
         // console.log("RESPUESTA -> "+value.resultado);

           // Simulate Delay
        setTimeout(function() {
          if ((value.resultado)===1 || (value.resultado)==='1'){
            imprime_ticket_cocina(int1,int2);
            x0p('SISTEMA', 'El pedido se envió a cocina, el tiket esta en la impresora!', 'ok', false);
          } else {
            x0p('SISTEMA', '!No hay nuevos platillos por enviar a la cocina!');
          }
            
        }, 2500);

              });
      }, // termina success
      error: function (xhr, error,data) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        console.log("Error retorno json");
       
       // x0p('SISTEMA', 'El pedido se envio a cocina, el ticket esta en la impresora!');

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });
    //} // termina else
  }// fin del if de la funcion grafica en caso de que el botonpresinado sea info
  });// termina validacion si o no hace el pedido
}

function respuesta_cocina(){
  var cad1="''", cad2="''", cad3="''", int1=0, int2=0, int3=0, int4=0;
  var int1 = $('#mesa_valor').val();
  var int2 = $("#tipo_cuenta").val();
  var respuesta;

  $.ajax({
      type:'POST',
      url: 'backend.php',
      dataType: 'JSON',
      data:{opcion:6,int1:int1,int2:int2,int3:int3,int4:int4,var1:cad1,var2:cad2,var3:cad3},
      success: function(data){
      var loquesea=0;
        /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){
         // console.log("RESPUESTA -> "+value.resultado);

           // Simulate Delay
        setTimeout(function() {
          if ((value.resultado)===1 || (value.resultado)==='1'){
            imprime_ticket_cocina(int1,int2);
            x0p('SISTEMA', 'El pedido se envió a cocina, el tiket esta en la impresora!', 'ok', false);
          } else {
            x0p('SISTEMA', '!No hay nuevos platillos por enviar a la cocina!');
          }
            
        }, 1200);

              });
      }, // termina success
      error: function (xhr, error,data) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        console.log("Error retorno json");
       
       // x0p('SISTEMA', 'El pedido se envio a cocina, el ticket esta en la impresora!');

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });
    //} // termina else
  

}

/*
function respuesta_cocina(){
  var cad1="''", cad2="''", cad3="''", int1=0, int2=0, int3=0, int4=0;
  var int1 = $('#mesa_valor').val();
  var int2 = $("#tipo_cuenta").val();
  var respuesta;

  x0p({
    title: 'Operación',
    text: '¿Deseas enviar a cocina el pedido?.',
    icon: 'info',
    animationType: 'fadeIn',
    buttons: [
        {
            type: 'cancel'
        },
        {
            type: 'info',
            text: 'Enviar',
            showLoading: true
        }
    ]
}).then(function(data) {
    if(data.button == 'info') {
      
   


  $.ajax({
      type:'POST',
      url: 'backend.php',
      dataType: 'JSON',
      data:{opcion:6,int1:int1,int2:int2,int3:int3,int4:int4,var1:cad1,var2:cad2,var3:cad3},
      success: function(data){
      var loquesea=0;
        
        $.each(data, function(index, value){
         // console.log("RESPUESTA -> "+value.resultado);

           // Simulate Delay
        setTimeout(function() {
          if ((value.resultado)===1 || (value.resultado)==='1'){
            imprime_ticket_cocina(int1,int2);
            x0p('SISTEMA', 'El pedido se envió a cocina, el tiket esta en la impresora!', 'ok', false);
          } else {
            x0p('SISTEMA', '!No hay nuevos platillos por enviar a la cocina!');
          }
            
        }, 2500);

              });
      }, // termina success
      error: function (xhr, error,data) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        console.log("Error retorno json");
       
       // x0p('SISTEMA', 'El pedido se envio a cocina, el ticket esta en la impresora!');

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });
    //} // termina else
  }// fin del if de la funcion grafica en caso de que el botonpresinado sea info
  });// termina validacion si o no hace el pedido
}*/

function permite(elEvento, permitidos) {
  // Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];
  // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha


  // Seleccionar los caracteres a partir del parámetro de la función
  switch(permitidos) {
    case 'num':
      permitidos = numeros;
      break;
    case 'car':
      permitidos = caracteres;
      break;
    case 'num_car':
      permitidos = numeros_caracteres;
      break;
  }

  // Obtener la tecla pulsada
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter);

  // Comprobar si la tecla pulsada es alguna de las teclas especiales
  // (teclas de borrado y flechas horizontales)
  var tecla_especial = false;
  for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}

//  actualizacion a la pagina para ver disponibilidad
var inter = function(){

    setInterval(
        function() {
            poll1()
            poll2()
            poll3()
            poll4()
            poll5()
            poll6()
            poll10()
        }, 3000);

}

var poll1 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:1},
      success: function(data){
      //  $("#cambia_mesa").attr("disabled", "disabled");
        //  console.log(data);
           var i=0;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn2');
                   $('.mesas'+i).removeClass('butn');
                  // $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn');
                    $('.mesas'+i).removeClass('butn2');
               }

                });
       }

} // termna succes

  });
}; // termina poll1

var poll2 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:2},
      success: function(data){
      //  $("#cambia_mesa").attr("disabled", "disabled");
        //  console.log(data);
           var i=6;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn2');
                   $('.mesas'+i).removeClass('butn');
                //   $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn');
                    $('.mesas'+i).removeClass('butn2');
               }

                });
       }

} // termna succes

  });
}; // termina poll2

var poll3 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:3},
      success: function(data){

        //$("#cambia_mesa").attr("disabled", "disabled");
        //  console.log(data);
           var i=12;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn2');
                   $('.mesas'+i).removeClass('butn');
                  // $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn');
                    $('.mesas'+i).removeClass('butn2');
               }

                });
       }

} // termna succes

  });
}; // termina poll3

var poll4 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:4},
      success: function(data){
      //  $("#cambia_mesa").attr("disabled", "disabled");
        //  console.log(data);
           var i=17;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn_c4');
                   $('.mesas'+i).removeClass('butn_c3');
                //   $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn_c3');
                    $('.mesas'+i).removeClass('butn_c4');
               }

                });
       }

} // termna succes

  });
}; // termina poll4

var poll5 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:5},
      success: function(data){
        //  console.log(data);
        //$("#cambia_mesa").attr("disabled", "disabled");
           var i=18;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn_c2');
                   $('.mesas'+i).removeClass('butn_c');
                  // $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn_c');
                    $('.mesas'+i).removeClass('butn_c2');
               }

                });
       }
    /*
                if ($('.mesas'+i).hasClass('butn_c2')){
                     $('.mesas'+i).addClass('butn_c');
                     $('.mesas'+i).removeClass('butn_c2');
                   }else {
                     $('.mesas'+i).addClass('butn_c2');
                     $('.mesas'+i).removeClass('butn_c');
                   }
    */
} // termna succes

  });
}; // termina poll5

var poll6 = function(){
    $.ajax({
        type:'POST',
        url: 'mesas_disponibles.php',
        dataType: 'JSON',
        data:{mesa:6},
        success: function(data){

          //  $("#cambia_mesa").attr("disabled", "disabled");
          //  console.log(data);
             var i=19;
            if(data != null && $.isArray(data)){
            $.each(data, function(index, value){
                  i=(i+1);

                  if(value.Ocupacion === "1"){
                      $('.mesas'+i).addClass('butn_R2');
                      $('.mesas'+i).removeClass('butn_R');
                    //  $("#cambia_mesa").removeAttr("disabled");

                  }

                  if(value.Ocupacion === "0"){
                       $('.mesas'+i).addClass('butn_R');
                       $('.mesas'+i).removeClass('butn_R2');
                  }

                  });
         }
  } // termna succes

    });

};

var poll10 = function(){

  $.ajax({
      type:'POST',
      url: 'mesas_disponibles.php',
      dataType: 'JSON',
      data:{mesa:10},
      success: function(data){

        //$("#cambia_mesa").attr("disabled", "disabled");
        //  console.log(data);
           var i=8;
          if(data != null && $.isArray(data)){
          $.each(data, function(index, value){
                i=(i+1);

               if(value.Ocupacion === "1"){
                   $('.mesas'+i).addClass('butn2');
                   $('.mesas'+i).removeClass('butn');
                  // $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn');
                    $('.mesas'+i).removeClass('butn2');
               }

                });
       }

} // termna succes

  });
}; // termina poll3

inter();



//termina actualizacion a la pagina para ver disponibilidad

//termina actualizacion a la pagina para ver disponibilidad

function revisa_cuentas(mesas){
  $.ajax({
      type:'POST',
      url: 'valida_mesas_sin_cuentas.php',
      dataType: 'JSON',
      data:{mesa:mesas},
      success: function(data){
        //console.log(data);

        if(data != null && $.isArray(data)){
        $.each(data, function(index, value){

          if(mesas>=1 && mesas <=17){
            //console.log(mesas+"  "+value.conteo);
            if(value.conteo >= '1'){
              //console.log("entro al uno");
                $('.mesas'+mesas).addClass('butn2');
                $('.mesas'+mesas).removeClass('butn');
            }

            if(value.conteo === '0'){
            //  console.log("entro al cero");
                $('.mesas'+mesas).addClass('butn');
                $('.mesas'+mesas).removeClass('butn2');
                  update_mesas_sin_cuentas(mesas);
            }
          }

           if(mesas==='18'){
             if(value.conteo >= "1"){

                 $('.mesas'+mesas).addClass('butn_c4');
                 $('.mesas'+mesas).removeClass('butn_c3');
             }


             if(value.conteo === "0"){

                 $('.mesas'+mesas).addClass('butn_c3');
                 $('.mesas'+mesas).removeClass('butn_c4');
                   update_mesas_sin_cuentas(mesas);
             }
           }

           if(mesas==='19'){
             if(value.conteo >= "1"){

                 $('.mesas'+mesas).addClass('butn_c2');
                 $('.mesas'+mesas).removeClass('butn_c');
             }


             if(value.conteo === "0"){

                 $('.mesas'+mesas).addClass('butn_c');
                 $('.mesas'+mesas).removeClass('butn_c2');
                   update_mesas_sin_cuentas(mesas);
             }
           }

           if(mesas>=20 && mesas <=27){
             if(value.conteo >= "1"){
             //  console.log("ocupacion = 1");
                 $('.mesas'+mesas).addClass('butn_R2');
                 $('.mesas'+mesas).removeClass('butn_R');
             }

             if(value.conteo === "0"){
                 $('.mesas'+mesas).addClass('butn_R');
                 $('.mesas'+mesas).removeClass('butn_R2');
                   update_mesas_sin_cuentas(mesas);
             }
           }

            });
          }

      }, // termina success
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
       // consultas(tipo_cuen);
      console.log("Error retorna json");
        //console.log(xhr.status);

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

}


      });
}

function update_mesas_sin_cuentas(mesas){
  $.ajax({
      type:'POST',
      url: 'actualiza_mesa_sin_cuentas.php',
      dataType: 'JSON',
      data:{mesa:mesas},
      success: function(data){
      }, // termina success
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {

       console.log("retorno json update_mesas_sin_cuentas");

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });
}


function cambia_cuenta(id){

  var nueva_original=$("#mesa_valor").val();
    var res=id.toString();
    var cambios;
  //alert(nueva_original+"  "+res);
if(res.length===7){

  cambios=res.substring(6,7);
}
if(res.length===8){

  cambios=res.substring(6,8);
}

  $.ajax({
      type:'POST',
      url: 'cambio_cuentas_mesas.php',
      dataType: 'JSON',
      data:{mesa_original:nueva_original,mesa_nueva:cambios},
      success: function(data){
        inter();
      }, // termina success
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
       // consultas(tipo_cuen);

        //console.log(xhr.status);
        var loquesea=0;
        inter();

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });

}

function reimprime_ticket(){
	retorna_folio_mesas();
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = $("#tipo_cuenta").val();
  var tiket = $("#folio_post").val();
  console.log("Valor del tiket ->"+tiket);
  $("#applendData").empty();
  $("#total").val("$0");
      revisa_cuentas(user_id);
      $("#cliente").val("");
//console.log("reimprime");
  $.ajax({
      type:'POST',
      url: 'impresion_php/reimprime_ticket.php',
      dataType: 'JSON',
      data:{mesa:user_id,tipo_cuenta:tipo_cuen,folio:tiket},
      success: function(data){
console.log("añ");

      }, // termina success
      error: function (xhr, error) {
    if (xhr.status === 0) {
        //return ($("#mensajeError").html("<center>No conectado.\nPor favor verifica tu conexión a la red.</center>"));
        alert("Por favor verifica tu conexión a la red.")
    } else if (xhr.status === 404) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error404.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("sitio no encontrado")
    } else if (xhr.status === 500) {
        //return ($("#muestraSeccion").html("<center><img src='../Images/error500.png' width='500px' height='350px' class='img img-responsive'/></center>").hide().fadeIn('slow'));
        alert("interno " + error)
    } else if (error === 'parsererror') {


console.log("error reimprime_ticket");
console.log("Valor del tiket ->"+tiket);

    } else if (error === 'timeout') {
        //return ($("#mensajeError").html('<center>Error time out.</center>'));
        alert("Error time out.")
    } else if (error === 'abort') {
        // return ($("#mensajeError").html('<center>Peticion Ajax cancelada.</center>'));;
        alert("Peticion Ajax cancelada.")
    } else {
        //return ($("#mensajeError").html('<center>Uncaught Error.\n' + xhr.responseText + '</center>'));
        alert("Uncaught")
    }

  }

      });

}
