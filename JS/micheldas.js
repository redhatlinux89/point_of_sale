var bandera_nombre;

$(document).ready(function(){
  modal2();
  $("#folio_post").hide();
});


function reimprime_ticket(){
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = 5;
  var tiket = $("#folio_post").val();
  $("#applendData").empty();
  $("#total").val("$0");
      //revisa_cuentas(user_id);
      $("#cliente").val("");
console.log("mesa:"+user_id+ "  tipo cuenta:" +tipo_cuen+ " tiket:" +tiket);
  $.ajax({
      type:'POST',
      url: 'impresion_php/reimprime_ticket_micheladas.php',
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


function btns_individuales(){

 var contador=0;
       $.ajax({
           type:'POST',
           url:'obtiene_btns_indv_micheladas.php',
           dataType: "json",
           data:{zona:1},
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

//console.log("entro a interno");
     $('#interno').remove();
    $('#princ').append('<div id="interno"></div>');
  //  $("#interno_2").load("contenido_modal_3.php");
    $("#interno").append('<div class="container" style="margin-left:-15%; margin-top:-15%;">'
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
   +'<div class="col-md-2">'
      +'<div id="individual25">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual26">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual27">'

        +'</div>'
       +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual28">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual29">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual30">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-2">'
      +'<div id="individual31">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual32">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual33">'

        +'</div>'
       +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual34">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual35">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual36">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-2">'
      +'<div id="individual37">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual38">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual39">'

        +'</div>'
       +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual40">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual41">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual42">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-2">'
      +'<div id="individual43">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual44">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual45">'

        +'</div>'
       +'</div>'
   +'<div class="col-md-2">'
      +'<div id="individual46">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual47">'

       +'</div>'
      +'</div>'
      +'<div class="col-md-2">'
        +'<div id="individual48">'

        +'</div>'
       +'</div>'
  +'</div>'
  +'<br>'
  +'<div class="row">'
   +'<div class="col-md-2">'
      +'<div id="individual49">'

      +'</div>'
     +'</div>'
     +'<div class="col-md-2">'
       +'<div id="individual50">'

       +'</div>'
      +'</div>'
  +'</div>'
  +'<br>'
    +'<br>'
      +'<br>'
        +'<br>'
    +'</div>   <!-- cirra container -->');

      btns_individuales();
  }

  function cargar_modal3(){
    eliminas();
     location.href="http://localhost/Restaurante_nuevo/Paginas/micheladas.php#openModal3";
    $('#interno_3').remove();
   $('#tabs-1_3').append('<div id="interno_3"></div>');
   //$("#interno_3").load("contenido_modal_2.php");
   llena_modal2('#interno_3');
   $(".ui-accordion-content").height(250);
    setTimeout('$("#mesa_valor").val($("#mesas_s").val())',30);
      $("#mesa_valor").attr('disabled','disabled');
     $("#tipo_cuenta").val("5");
     //$("#cambio_mesas_").hide();
      setTimeout("obtiene_pedido()",50);
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
      +'max-height: 300px;'
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
        +'<div class="row"  id="head">'
      +'  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="head2">'
        +' <div class="row">'
          +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head3">'
            +'<div class="form-group row">'
                +'<label for="full_name" class="col-md-4 col-form-label text-md-right">Lugar</label>'
                +'<div class="col-md-3">'
                +'<input class="form-control" type="text" name="mesa_valor" id="mesa_valor">'
                +'</div>'
              +'</div>'
              +'<div class="form-group row">'
                +'<label for="full_name" class="col-md-4 col-form-label text-md-right">Cliente</label>'
                +'<div class="col-md-8">'
                +'<input class="form-control" type="text" name="cliente" id="cliente">'
              //  +'<a href="#openModal4"><button type="button" class="btn btn-primary" id="cambio_mesas_">Cambio de mesa</button></a>'
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
                  +'<input class="form-control" type="text" name="folio_post" id="folio_post">'
                +'</div>'
              +'</div>'
          +'</div>'
          +'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="head5">'
            +'<div class="form-group row">'
              +'<label for="full_name" class="col-md-6 col-form-label text-md-right">Total</label>'
              +'<div class="col-md-6">'
              +'<input class="form-control" type="text" name="total" value="0" id="total" disabled>'
              +'</div>'
            +'</div>'
              +'<div class="form-group row">'
                +'<div class="col-md-4">'
                +'<button type="button" class="btn btn-success  btn-sm" onclick="imprime_ticket();">Terminar cuenta</button>'
              +'</div>'
            //  +'<div class="col-md-4">'
            //  +'<button type="button" class="btn btn-success  btn-sm" onclick="imprime_ticket_cocina();">Enviar pedido</button>'
             //+'</div>'
              +'<div class="col-md-4">'
              +'<button type="button" class="btn btn-danger  btn-sm" onclick="reimprime_ticket();">Reimprimir ticket</button>'
            +'</div>'
             +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'</div>'
      +'<div class="row" id="body">'
      +'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="body2">'
        +'<div class="row">'
        +'<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="head3" >'
          +'<div id="accordion">'
            /* +'<h3>PLATILLOS</h3>'
        +'<div>'
        +'<div style="width:220px; height:320px; overflow:auto; margin-left:-40%;">'
                 +'<div class="container">'
                   +'<div id="inserta_bts_platillos">'
                  +'</div>'
     +'</div>'
   +'</div>'
  +'</div>'*/
    +'<h3>BEBIDAS</h3>'
    +'<div>'
      +'<p>'
        +'<div style="width:220px; height:320px; overflow:auto; margin-left:-40%;">'
                 +'<div class="container">'
                   +'<div id="inserta_bts_bebidas">'
                   +'</div>'
          +'</div>'
     +'</div>'
      +'</p>'
    +'</div>'
    /*+'<h3>SNAKS</h3>'
    +'<div>'
      +'<p>'
        +'<div style="width:220px; height:320px; overflow:auto; margin-left:-40%;">'
                 +'<div class="container">'
                   +'<div id="inserta_bts_snaks">'
                   +'</div>'
          +'</div>'
     +'</div>'
      +'</p>'
    +'</div>' */
    +'<h3>OTROS</h3>'
  +'<div>'
  +'<div style="width:220px; height:320px; overflow:auto; margin-left:-40%;">'
        +'<div class="container">'
          +'<div id="inserta_bts_otros">'
          +'</div>'
  +'</div>'
  +'</div>'
  +'</div>'
  +'</div>'
        +'</div> <!-- termina div izquierdo panel acordion -->'
        +'<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" id="head4">'
  +'<div style="height:450px; overflow:auto;">'
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

  for (var i = 1; i < 3; i++) {
       botones_menu_secciones(i);
  }
  btns_individuales();

  }

  function botones_menu_secciones(param){

    $.ajax({
        type:'POST',
        url:'obtiene_btns_micheladas.php',
        dataType: "json",
        data:{id_Divicion:param},
        success:function(data){
          //console.log(data);
              /* Vemos que la respuesta no este vacía y sea una arreglo */
                 if(data != null && $.isArray(data)){

                  /* Recorremos tu respuesta con each */
                 $.each(data, function(index, value){

                   /*if(param===1){
                     jQuery('#inserta_bts_platillos').append('<div class="row"><div class="col-md-12">'
                     +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,1);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                   }else */if (param===1) {
                     jQuery('#inserta_bts_bebidas').append('<div class="row"><div class="col-md-12">'
                     +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,1);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                   /*}else if (param===3) {
                     jQuery('#inserta_bts_snaks').append('<div class="row"><div class="col-md-12">'
                     +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,3);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
                   */}
                   else if (param===2) {
                     jQuery('#inserta_bts_otros').append('<div class="row"><div class="col-md-12">'
                     +'<button id="'+value.ID_Sub_Divicion+'"  class="butt-mesas" onclick="selecciona_contenido(this.id,2);cambia_color(this.id);">'+value.Descripcion+'</button></div></div><br>');
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
    $("#inserta_contenido1").empty();
      $("#inserta_contenido2").empty();
        $("#inserta_contenido3").empty();
          $("#inserta_contenido4").empty();
            $("#inserta_contenido5").empty();
            $("#inserta_contenido6").empty();
            $("#inserta_contenido7").empty();
            $("#inserta_contenido8").empty();
            $("#inserta_contenido9").empty();
            $("#inserta_contenido10").empty();
            $("#inserta_contenido11").empty();
            $("#inserta_contenido12").empty();
            $("#inserta_contenido13").empty();
            $("#inserta_contenido14").empty();
            $("#inserta_contenido15").empty();
            $("#inserta_contenido16").empty();
            $("#inserta_contenido17").empty();
            $("#inserta_contenido18").empty();
            $("#inserta_contenido19").empty();
            $("#inserta_contenido20").empty();
            $("#inserta_contenido21").empty();
            $("#inserta_contenido22").empty();
            $("#inserta_contenido23").empty();
            $("#inserta_contenido24").empty();
            $("#inserta_contenido25").empty();
            $("#inserta_contenido26").empty();
            $("#inserta_contenido27").empty();
            $("#inserta_contenido28").empty();
            $("#inserta_contenido29").empty();
            $("#inserta_contenido30").empty();
            $("#inserta_contenido31").empty();
            $("#inserta_contenido32").empty();
            $("#inserta_contenido33").empty();
            $("#inserta_contenido34").empty();
            $("#inserta_contenido35").empty();
            $("#inserta_contenido36").empty();
            $("#inserta_contenido37").empty();
            $("#inserta_contenido38").empty();
            $("#inserta_contenido39").empty();

  //console.log(param1+" "+param2);
    contador=0;
    $.ajax({
        type:'POST',
        url:'obtiene_btns_contenido_micheladas.php',
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
//console.log(param);
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
        url:'inserta_datos_nuevo_micheladas.php',
        dataType: "json",
        data:{valor_producto:param,mesa:$("#mesa_valor").val(),cuenta_tipo:5,cliente:clientes,nvo_prod:'',nvo_precio:0},
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


       function obtiene_pedido(){
       $("table#applendData tbody").empty();
         $.ajax({
             type:'POST',
             url:'obtiene_pedido_nuevo_micheladas.php',
             dataType: "json",
             data:{valor_producto:0,mesa:$("#mesa_valor").val(),cuenta_tipo:5,cliente:'',nvo_prod:'',nvo_precio:0},
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

       function add_nuevo_prod(){

         $("table#applendData tbody").empty();
         desc_prod=$("#prod_desc").val();
         prec_prod=$("#prod_prec").val();
         clientes=$("#cliente").val();

         $.ajax({
             type:'POST',
             url:'inserta_datos_nuevo_micheladas.php',
             dataType: "json",
             data:{valor_producto:203,mesa:$("#mesa_valor").val(),cuenta_tipo:5,cliente:clientes,nvo_prod:desc_prod,nvo_precio:prec_prod},
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

       function imprime_ticket(){
         var user_id = $('#mesa_valor').val();
         var tipo_cuen = 5;
         $("#applendData").empty();
         $("#total").val("$0");
             //revisa_cuentas(user_id);
             $("#cliente").val("");
         $.ajax({
             type:'POST',
             url: 'impresion_php/imprime_micheladas.php',
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

               setTimeout("retorna_folio_mesas()",200);


       }

       function retorna_folio_mesas(){
         var user_id = $('#mesa_valor').val();
         var tipo_cuen = 5;//$("#tipo_cuenta").val();
         $("#applendData").empty();
         $("#total").val("$0");
             //revisa_cuentas(user_id);
             $("#cliente").val("");
       //console.log("entro a imprime");
         $.ajax({
             type:'POST',
             url: 'retornafolio_micheladas.php',
             dataType: 'JSON',
             data:{mesa:user_id,tipo_cuenta:tipo_cuen},
             success: function(data){
               if(data != null && $.isArray(data)){

                /* Recorremos tu respuesta con each */
               $.each(data, function(index, value){
                  $("#folio_post").val(value.Folio);

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


       function eliminas(){
         $("#quita_3").remove(); // cuenta principal
         bandera_nombre=0;
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
                     if(valor == '0814'){
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
                     // console.log("mesa:"+ $("#mesa_valor").val()+" cuenta:"+$("#tipo_cuenta").val()+" tipo platillo:"+tipo_plat+" desc_pltillo:"+elemento_desc);
                      $.ajax({
                          type:'POST',
                          url:'elimina_productos_nuevo_micheladas.php',
                          dataType: "json",
                          data:{divicion:tipo_plat,descp:elemento_desc,mesa:$("#mesa_valor").val(),cuenta_tipo:5},
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
