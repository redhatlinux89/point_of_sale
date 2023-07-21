
function filtra(){

  $("table#data_table tbody").empty();



 $.ajax({
     type:'POST',
     url:'consulta_catalogos.php',
     dataType: "json",
     data:{id_producto:$("#diviciones").val(),sub_div:$("#sub_diviciones").val()},
     success:function(data){
            console.log(data);
           /* Vemos que la respuesta no este vacía y sea una arreglo */
              if(data != null && $.isArray(data)){

               /* Recorremos tu respuesta con each */
              $.each(data, function(index, value){
$("table#data_table tbody").append("<tr id="+value.ID_Producto+"><td style='display: none;'><span class='tabledit-span tabledit-identifier'>"+value.ID_Producto+"</span><input class='tabledit-input tabledit-identifier' type='hidden' name='id' value="+value.ID_Producto+" disabled=''></td><td class='tabledit-view-mode'><span class='tabledit-span'>"+value.Precio+"</span><input class='tabledit-input form-control input-sm' type='text'name='Precio'value='"+value.Precio+"' style='display:none;' disabled=''><td class='tabledit-view-mode'><span class='tabledit-span'>"+value.Descripcion+"</span><input class='tabledit-input form-control input-sm' type='text' name='Descripcion' value="+value.Descripcion+" style='display: none;' disabled=''></td><td style='white-space: nowrap; width: 1%;'><div class='tabledit-toolbar btn-toolbar' style='text-align: left;'><div class='btn-group btn-group-sm' style='float: none;'><button type='button' class='tabledit-edit-button btn btn-sm btn-default'style='float: none;'><span class='glyphicon glyphicon-pencil'></span></button><button type='button' class='tabledit-delete-button btn btn-sm btn-default'style='float: none;'><span class='glyphicon glyphicon-trash'></span></button></div><button type='button' class='tabledit-save-button btn btn-sm btn-success' style='display: none; float: none;'>Guardar</button></div></td></tr>");

                              /*

                              $("table#data_table tbody").append("<tr id="+value.ID_Producto+"><td style='display: none;'><span class='tabledit-span tabledit-identifier'>"+value.ID_Producto+"</span><input class='tabledit-input tabledit-identifier' type='hidden' name='id' value="+value.ID_Producto+" disabled=''></td>"
                                               +"<td class='tabledit-view-mode'><span class='tabledit-span'>"+value.Precio+"</span><input class='tabledit-input form-control input-sm' type='text' name='Precio' value="+value.Precio+" style='display: none;' disabled=''>
                                              + "<td class='tabledit-view-mode'><span class='tabledit-span'>"+value.Descripcion+"</span><input class='tabledit-input form-control input-sm' type='text' name='Descripcion' value="+value.Descripcion+" style='display: none;' disabled=''></td>
                                              +"<td style='white-space: nowrap; width: 1%;'><div class='tabledit-toolbar btn-toolbar' style='text-align: left;'>"
                                                +"<div class='btn-group btn-group-sm' style='float: none;'><button type='button' class='tabledit-edit-button btn btn-sm btn-default' style='float: none;'><span class='glyphicon glyphicon-pencil'></span></button></div>"
                                                          +"<button type='button' class='tabledit-save-button btn btn-sm btn-success' style='display: none; float: none;'>Guardar</button>"
                                                          +"</div></td></tr>");

                              */
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





function inserta_nuevo(){
  var div = $("#diviciones").val();
  var subdiv = $("#sub_diviciones").val();
  var prod = $("#Producto").val();
  var prec = $("#Precio").val();
  //console.log(prod);
//console.log($("#diviciones").val()+" "+$("#sub_diviciones").val()+" "+$("#Producto").val()+" "+$("#Precio").val());
  $.ajax({
      type:'POST',
      url:'inserta_nuevo_prod.php',
      dataType: "json",
      data:{divicion:div,subdivicion:subdiv,descripcion:prod,precio:prec},
      success:function(data){

              //  filtra();

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
        alert("Alta correcta.");
        filtra();
        setTimeout("limpia_campos()",1200);
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

function limpia_campos(){

  var div = $("#diviciones").val('0');
  var subdiv = $("#sub_diviciones").val('0');
  var prod = $("#Producto").val('');
  var prec = $("#Precio").val('');

}

function filtra_sub_diviciones(){
  $("#sub_diviciones").empty();

  $.ajax({
    type: "POST",
    url: 'filtra_sub_diviciones_prod.php',
    dataType: "json",
    data:{id_div:$("#diviciones").val()},
    success: function(data){
      $("#sub_diviciones").append('<option value=0>SELECCIONA UNA</option>');
      $.each(data,function(key, registro) {
        $("#sub_diviciones").append('<option value='+registro.ID_Sub_Divicion+'>'+registro.Descripcion+'</option>');
      });
    },
    error: function(data) {
      alert('error');
    }
  });
}





function opera_base(param1){
  var cad1="''", cad2="''", cad3="''", int1=0, int2=0, int3=0, int4=0;

   if(param1===1 || param1 ==='1'){
     cad1 = $("#diviciones_agregar").val();
     cad2 = $("#sub_divs").val();

   }
   if(param1===2 || param1 ==='2'){
     int1 = $("#diviciones_agregar").val();
     console.log(int1)
   }

   if(param1===3 || param1 ==='3'){
   console.log("opcion 3");
   }



//console.log("Llego a oipera base "+param1+" "+cad1)

  $.ajax({
      type:'POST',
      url:'backend.php',
      dataType: "json",
      data:{opcion:param1,int1:int1,int2:int2,int3:int3,int4:int4,var1:cad1,var2:cad2,var3:cad3},
      success:function(data){
                      //  console.log(param1,data);
                   if(param1===1 || param1 ==='1' || param1===2 || param1 ==='2'){
                    // console.log(param1,data);
                    $('#data_table2 > tbody').empty();
                    //$("#data_table2").empty();
                     $.each(data, function(index, value){
       $("table#data_table2 tbody").append("<tr id="+value.ID_Sub_Divicion+"><td style='display: none;'><span class='tabledit-span tabledit-identifier'>"+value.ID_Sub_Divicion+"</span><input class='tabledit-input tabledit-identifier' type='hidden' name='id' value="+value.ID_Sub_Divicion+" disabled=''></td><td class='tabledit-view-mode'><span class='tabledit-span'>"+value.Descripcion+"</span><input class='tabledit-input form-control input-sm' type='text'name='Descripcion'value='"+value.Descripcion+"' style='display:none;' disabled=''><td style='white-space: nowrap; width: 1%;'><div class='tabledit-toolbar btn-toolbar' style='text-align: left;'><div class='btn-group btn-group-sm' style='float: none;'><button type='button' class='tabledit-edit-button btn btn-sm btn-default'style='float: none;'><span class='glyphicon glyphicon-pencil'></span></button><button type='button' class='tabledit-delete-button btn btn-sm btn-default'style='float: none;'><span class='glyphicon glyphicon-trash'></span></button></div><button type='button' class='tabledit-save-button btn btn-sm btn-success' style='display: none; float: none;'>Guardar</button></div></td></tr>");

                    });
                      //opera_base(4);
                    }
                    if(param1===3 || param1 ==='3'){

                           $('#diviciones').empty();
                          console.log("Llego al tres "+data);
                           $("#diviciones").append('<option value=0>SELECCIONA UNA</option>');
                           $.each(data,function(key, registro) {
                           $("#diviciones").append('<option value='+registro.ID_Divicion+'>'+registro.Descripcion+'</option>');
                           });

                           $('#diviciones_agregar').empty();
                          console.log("Llego al tres "+data);
                           $("#diviciones_agregar").append('<option value=0>SELECCIONA UNA</option>');
                           $.each(data,function(key, registro) {
                           $("#diviciones_agregar").append('<option value='+registro.ID_Divicion+'>'+registro.Descripcion+'</option>');
                           });
                       }

                       if(param1===4 || param1 ==='4'){


                          }




      },
      error: function (xhr, error, data) {
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
      //  alert("Alta correcta.");
        console.log(data);
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
