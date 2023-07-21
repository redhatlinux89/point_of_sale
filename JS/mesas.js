var unir=0;
var loquesea;




$(document).ready(function(){
 $(".ids_ped").hide();
 //$("#contenidom").load("contenido_modal_2.php");

   //$("#cambia_mesa").attr("disabled", "disabled");


// $("#contenido_modal").hide();

 $("#tab_1_").click(function(event) {
      $("#quita_1").remove(); // cuenta principal
      $('#tabs-1').append('<div id="quita_1"></div>');
      $("#quita_1").load("modal.php #contenido_modal");
      $("#quita_2").remove(); // cuenta principal
      $("#quita_3").remove(); // cuenta principal
      $("#quita_4").remove(); // cuenta principal
      setTimeout("consulta_pedido(5)",1200);
      $("#tipo_cuentas").val("5");
 		});

  $("#tab_2_").click(function(event) {
         $("#quita_2").remove(); // cuenta principal
         $('#tabs-2').append('<div id="quita_2"></div>');
         $("#quita_2").load("modal.php #contenido_modal");
         $("#quita_1").remove(); // cuenta principal
         $("#quita_3").remove(); // cuenta principal
         $("#quita_4").remove(); // cuenta principal
         setTimeout("consulta_pedido(1)",1200);
           $("#tipo_cuentas").val("1");
    		});

  $("#tab_3_").click(function(event) {
               $("#quita_3").remove(); // cuenta principal
               $('#tabs-3').append('<div id="quita_3"></div>');
               $("#quita_3").load("modal.php #contenido_modal");
               $("#quita_1").remove(); // cuenta principal
               $("#quita_2").remove(); // cuenta principal
               $("#quita_4").remove(); // cuenta principal
               setTimeout("consulta_pedido(2)",1200);
                 $("#tipo_cuentas").val("2");
          		});

  $("#tab_4_").click(function(event) {
               $("#quita_4").remove(); // cuenta principal
               $('#tabs-4').append('<div id="quita_4"></div>');
               $("#quita_4").load("modal.php #contenido_modal");
               $("#quita_1").remove(); // cuenta principal
               $("#quita_2").remove(); // cuenta principal
               $("#quita_3").remove(); // cuenta principal
               setTimeout("consulta_pedido(3)",1200);
               $("#tipo_cuentas").val("3");
                      		});


});

function oculta_Columna(){
  $(".ids_ped").hide();
}

/*
function seleccion_mes(id){
  if(unir===1){
$(id).removeClass();
$(id).toggleClass("btn btn-warning");
}
else{
 for(i=1; i<=6; i++){
   //bnt_construido=boton.concat(i);
  // $('#mesa'+i).attr('disabled','disabled');
//*******************************************  $('#mesa'+i).prop('disabled', true);
  //alert(bnt_construido);
}
$(id).removeClass();
$(id).toggleClass("btn btn-warning");
//******************************************  $(id).prop('disabled', false);
}
}

*/

function valor_check(){
if ($('#acumul').prop('checked')){
  unir=1;
}
else{
  unir=0;
}

}

function limpia(){
  for(i=1; i<=6; i++){
   $('#mesa'+i).prop('disabled', false);
   $('#mesa'+i).removeClass();
   $('#mesa'+i).toggleClass("btn btn-primary");
   $('#acumul').prop('checked', false);
 }
}

function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {

	try {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
		xmlhttp = false;
	}
}

if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	  xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}


//Función para recoger los datos del formulario y enviarlos por post
function enviarDatosEmpleados(){

  //div donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //recogemos los valores de los inputs
  camarones=$("#camarones").val();
  filete_pescado=$("#pescado").val();//$("#sel2").val();//document.nuevo_empleado.apellido.value;
  carnes=$("#carnes").val();//document.nuevo_empleado.web.value;
  ens=$("#ensaladas").val();//document.nuevo_empleado.web.value;
  esp=$("#especial").val();//document.nuevo_empleado.web.value;
  postres=$("#postres").val();//document.nuevo_empleado.web.value;
  cerv=$("#cerveza").val();
  ref=$("#refrescos").val();
  teq_cop=$("#tequila_copas").val();
  teq_bot=$("#tequila_botellas").val();
  bebida_prep=$("#preparadas").val();
  ind_snaks=$("#snaks_ind").val();
  alitas=$("#alitas").val();
  nachos=$("#nachos").val();
  hambu=$("#hamburguesas").val();
  tost=$("#tostadas").val();
  ceviche=$("#ceviche").val();
  coct=$("#coctel").val();
  aguachile=$("#cam_aguachile").val();
  camp_pel=$("#cam_pelar").val();
  mesa=$("#mesa_valor").val();//document.nuevo_empleado.web.value;
  tipo_cuenta=$("#tipo_cuentas").val();//document.nuevo_empleado.web.value;



  //instanciamos el objetoAjax
  ajax=objetoAjax();

  //uso del medotod POST
  //archivo que realizará la operacion
  //registro.php
  ajax.open("POST", "inserta_datos.php",true);
  //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
  ajax.onreadystatechange=function() {
	  //la función responseText tiene todos los datos pedidos al servidor
  	if (ajax.readyState==4) {
  		//mostrar resultados en esta capa
		divResultado.innerHTML = ajax.responseText
  		//llamar a funcion para limpiar los inputs
		//LimpiarCampos();
	}
 }
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores a registro.php para que inserte los datos
	ajax.send("platillo1="+camarones+"&platillo2="+filete_pescado+"&platillo3="+carnes+"&platillo4="+ens+
            "&platillo5="+esp+"&platillo6="+postres+
            "&bebida1="+cerv+"&bebida2="+ref+"&bebida3="+teq_cop+"&bebida4="+teq_bot+"&bebida5="+bebida_prep+
            "&snaks1="+ind_snaks+"&snaks2="+alitas+"&snaks3="+nachos+"&snaks4="+hambu+"&snaks5="+tost+
            "&snaks5="+ceviche+"&snaks6="+coct+"&snaks7="+aguachile+"&snaks8="+camp_pel+
            "&mesa="+mesa+"&cuenta_tipo="+tipo_cuenta
           )

}


function consulta_pedido(tipo){
  //https://programacion.net/articulo/como_devolver_datos_en_formato_json_desde_un_script_php_utilizando_jquery_ajax_1834
  // limpiar tabla
  $("table#applendData tbody").empty();
          var user_id = $('#mesa_valor').val();
          var tipo_cu = tipo;
            globall=tipo;

          $.ajax({
              type:'POST',
              url:'obtiene_pedido.php',
              dataType: "json",
              data:{user_id:user_id,tipo:tipo_cu},
              success:function(data){

                    //  $('#userName').text(data.result.Precio);

                    /* Vemos que la respuesta no este vacía y sea una arreglo */
                       if(data != null && $.isArray(data)){

                        /* Recorremos tu respuesta con each */
                       $.each(data, function(index, value){
                        /* Vamos agregando a nuestra tabla las filas necesarias */

                       $("table#applendData tbody").append("<tr><td class='ids_ped' align='left'>"+ value.ID_Pedido +"</td><td align='left'>" + value.Divicion + "</td><td align='left'>" + value.Descripcion + "</td><td align='left'>$" + value.Precio + "</td><td class='text-center'><a href='#' onclick='transformarEnEditable(this);' class='btn btn-danger btn-xs'>Borrar</a></td></tr>");
                     });
                    }
                      //var html='<tr><td>'+ data[i]['Precio'] + '</td><td>$'+ data[i]['Precio'] + '</td></tr>';
                      // $('table#applendData tbody').append(html);

                      setTimeout("oculta_Columna()",1000);
                      setTimeout('limpiar_campos()',2000);
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
                alert("Falló la conversión JSON.");
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
                   //El nodo recibido es SPAN
                   var editando=false;
                   if (editando == false) {
                       var nodoTd = nodo.parentNode; //Nodo TD
                       var nodoTr = nodoTd.parentNode; //Nodo TR
                    //   var nodoContenedorForm = document.getElementById('contenedorForm2'); //Nodo DIV
                       var nodosEnTr = nodoTr.getElementsByTagName('td');
                       var id = nodosEnTr[0].textContent; //var nombre_pdf = nodosEnTr[1].textContent;
                      // var status = nodosEnTr[2].textContent; var opciones = nodosEnTr[3].textContent; var opciones = nodosEnTr[4].textContent;
                    //  alert(id);
                      elimina_registro(id);
                   }
               }


  function elimina_registro(id){
                 //https://programacion.net/articulo/como_devolver_datos_en_formato_json_desde_un_script_php_utilizando_jquery_ajax_1834
                 // limpiar tabla
                         var user_id = id;//$('#user_id').val();
                         $.ajax({
                             type:'POST',
                             url:'elimina_productos.php',
                             dataType: "json",
                             data:{user_id:user_id},
                             success:function(){
                                  consulta_pedido();
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
                               consultas();
                               setTimeout('oculta_Columna();',800);

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

function trae_total_(){
console.log("trae total");
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = $("#tipo_cuentas").val();
    $("table#applendData tbody").empty();
    imprime_ticket(user_id,tipo_cuen);
  consultas();
  setTimeout("trae_total()",1200);
  setTimeout("oculta_Columna()",1400);

}

function trae_total(){
                 //https://programacion.net/articulo/como_devolver_datos_en_formato_json_desde_un_script_php_utilizando_jquery_ajax_1834
                 // limpiar tabla

                         var user_id = $('#mesa_valor').val();
                         var tipo_cuen = $("#tipo_cuentas").val();
                         //console.log(user_id+" "+tipo_cuen);
                         $.ajax({
                             type:'POST',
                             url:'Trae_total_pedido.php',
                             dataType: "json",
                             data:{user_id:user_id,tipo_cuen:tipo_cuen},
                             success:function(data){
                              // console.log("terminar cuenta");
                               if(data != null && $.isArray(data)){

                                /* Recorremos tu respuesta con each */
                               $.each(data, function(index, value){
                                /* Vamos agregando a nuestra tabla las filas necesarias */

                               $("table#applendData tbody").append("<tr><td align='left'><strong>****</strong></td><td align='left'><strong>" + value.Descripcion + "</strong></td><td align='left'><strong>$" + value.total + "</strong></td></tr>");

                              // verifica que no haya mas cuentas de la mesa
                              revisa_cuentas(user_id);
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
                              // consultas(tipo_cuen);
                               setTimeout('oculta_Columna();',800);
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

    function limpia_tabla_pedido(){
      $("table#applendData tbody").empty();
    }

function titulo_mesa(id){
  var res = id.substring(4, 6);
  //console.log(id,res);
   mesa_.innerHTML=res;
   $("#mesa_valor").val(res);
}

function carga_modal(){

       $("#quita_1").remove(); // cuenta principal
       $('#tabs-1').append('<div id="quita_1"></div>');
       $("#quita_1").load("modal.php #contenido_modal");
       $("#quita_2").remove(); // cuenta principal
          setTimeout("consulta_pedido(5)",1200);
       $("#tipo_cuentas").val("5");
}


function consultas(){
  parametro=$("#tipo_cuentas").val();
  consulta_pedido(parametro);
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
        }, 10000);

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
           var i=9;
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
           var i=11;
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
                   $('.mesas'+i).addClass('butn_c2');
                   $('.mesas'+i).removeClass('butn_c');
                //   $("#cambia_mesa").removeAttr("disabled");
               }

               if(value.Ocupacion === "0"){
                    $('.mesas'+i).addClass('butn_c');
                    $('.mesas'+i).removeClass('butn_c2');
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

inter();



//termina actualizacion a la pagina para ver disponibilidad

function revisa_cuentas(mesas){

 var i=0;

  $.ajax({
      type:'POST',
      url: 'valida_mesas_sin_cuentas.php',
      dataType: 'JSON',
      data:{mesa:mesas},
      success: function(data){

        if(data != null && $.isArray(data)){
        $.each(data, function(index, value){

          if(mesas>=1 && mesas <=17){
            if(value.conteo >= "1"){
                $('.mesas'+mesas).addClass('butn2');
                $('.mesas'+mesas).removeClass('butn');
            }

            if(value.conteo === "0"){
                $('.mesas'+mesas).addClass('butn');
                $('.mesas'+mesas).removeClass('butn2');
                  update_mesas_sin_cuentas(mesas);
            }
          }

           if(mesas==='19' || mesas==='18'){
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
        setTimeout('oculta_Columna();',800);
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
        //return ($("#mensajeError").html('<center>Falló la conversión JSON.</center>'));
       // consultas(tipo_cuen);

        //console.log(xhr.status);
        loquesea=0;

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
  //  console.log(res.length);
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
        alert("Cambio de mesa exitosa");
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
        loquesea=0;

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

function imprime_ticket(user_id,tipo_cuen){
   //console.log("llego metodo");
  $.ajax({
      type:'POST',
      url: 'impresion_php/index.php',
      dataType: 'JSON',
      data:{mesa:user_id,tipo_cuenta:tipo_cuen},
      success: function(data){
      loquesea=0;
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
        loquesea=0;

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

function imprime_ticket_cocina(user_id,tipo_cuen){
  //  console.log("llego metodo");

/*if ($("#camarones").val() ==='0' &&
  $("#pescado").val() ==='0' &&//$("#sel2").val();//document.nuevo_empleado.apellido.value;
  $("#carnes").val()  ==='0' &&//document.nuevo_empleado.web.value;
  $("#ensaladas").val()  ==='0' &&//document.nuevo_empleado.web.value;
  $("#especial").val()  ==='0' &&//document.nuevo_empleado.web.value;
  $("#postres").val()  ==='0' &&//document.nuevo_empleado.web.value;
  $("#snaks_ind").val()  ==='0' &&
  $("#alitas").val()  ==='0' &&
  $("#nachos").val()  ==='0' &&
  $("#hamburguesas").val()  ==='0' &&
  $("#tostadas").val()  ==='0' &&
  $("#ceviche").val()  ==='0' &&
  $("#coctel").val()  ==='0' &&
  $("#cam_aguachile").val()  ==='0' &&
  $("#cam_pelar").val()  ==='0'){

  }
  else{ */

  $.ajax({
      type:'POST',
      url: 'impresion_php/imprime_cocina.php',
      dataType: 'JSON',
      data:{mesa:user_id,tipo_cuenta:tipo_cuen},
      success: function(data){
      loquesea=0;
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
        loquesea=0;

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


function imprimecocina(){
  var user_id = $('#mesa_valor').val();
  var tipo_cuen = $("#tipo_cuentas").val();
  imprime_ticket_cocina(user_id,tipo_cuen);
}

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




function guarda_ing_extra(){
//Ualert("klklk");
//console.log("llrgo");

  descrp_Nvo_ing=$("#descrp_add").val();
  pre_Nvo_ing=$("#precio_add").val();
  mesa=$("#mesa_valor").val();//document.nuevo_empleado.web.value;
  tipo_cuenta=$("#tipo_cuentas").val();//document.nuevo_empleado.web.value;
//  console.log(descrp_Nvo_ing+" "+pre_Nvo_ing+" "+mesa+" "+tipo_cuenta);
  if((descrp_Nvo_ing !== "") &&  (pre_Nvo_ing !== "")){
    $("#precio_add").attr("required");


  $.ajax({
      type:'POST',
      url:'inserta_nvo_ingred.php',
      dataType: "json",
      data:{descr_nvo:descrp_Nvo_ing,prec_nvo:pre_Nvo_ing,mesa:mesa,cuenta_tipo:tipo_cuenta},
      success:function(data){
        loquesea=0;

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
      //  alert("Falló la conversión JSON.");
      consultas();
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

if((descrp_Nvo_ing !== "") &&  (pre_Nvo_ing === "")){
  alert("Debes de ingresar un precio");
  $("#precio_add").attr("required");
}

}

function limpiar_campos(){

$("#camarones").val(0);
$("#pescado").val(0);//$("#sel2").val();//document.nuevo_empleado.apellido.value;
$("#carnes").val(0);//document.nuevo_empleado.web.value;
$("#ensaladas").val(0);//document.nuevo_empleado.web.value;
$("#especial").val(0);//document.nuevo_empleado.web.value;
$("#postres").val(0);//document.nuevo_empleado.web.value;
$("#cerveza").val(0);
$("#refrescos").val(0);
$("#tequila_copas").val(0);
$("#tequila_botellas").val(0);
$("#preparadas").val(0);
$("#snaks_ind").val(0);
$("#alitas").val(0);
$("#nachos").val(0);
$("#hamburguesas").val(0);
$("#tostadas").val(0);
$("#ceviche").val(0);
$("#coctel").val(0);
$("#cam_aguachile").val(0);
$("#cam_pelar").val(0);

$("#precio_add").val(0);
$("#descrp_add").val("");

}

function cambia_estaus_pedido(){

  mesa=$("#mesa_valor").val();//document.nuevo_empleado.web.value;
  tipo_cuenta=$("#tipo_cuentas").val();//document.nuevo_empleado.web.value;

  $.ajax({
      type:'POST',
      url:'cambia_estatus_pedido.php',
      dataType: "json",
      data:{mesa:mesa,cuenta_tipo:tipo_cuenta},
      success:function(data){
          loquesea=0;

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
      //  alert("Falló la conversión JSON.");
      consultas();
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
