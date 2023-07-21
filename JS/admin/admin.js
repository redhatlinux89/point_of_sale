
$( document ).ready(function() {
      llena_encabezado();
      llena_tabla();
      llena_combo_mesas();
      llena_combo_indv();
      $("#tablas_mesas").hide();


});
function llena_encabezado(){

  $("table#tablas tbody").empty();
  $("#total").empty();
  $("#platillos").empty();
  $("#bebidas").empty();
  $("#snaks").empty();
  $("#otros").empty();
  $("#anuladas").empty();


  $.ajax({
      type:'POST',
      url:'obtiene_totales_admin.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val()},
      success:function(data){
            /* Vemos que la respuesta no este vacía y sea una arreglo */
               if(data != null && $.isArray(data)){

                /* Recorremos tu respuesta con each */
               $.each(data, function(index, value){
                 $("#total").append('<div class="stat-text">$<span class="count">'+value.Total+'</span></div>');
                 $("#platillos").append('<div class="stat-text">$<span class="count">'+value.platillos+'</span></div>');
                 $("#bebidas").append('<div class="stat-text">$<span class="count">'+value.bebidas+'</span></div>');
                 $("#snaks").append('<div class="stat-text">$<span class="count">'+value.snaks+'</span></div>');
                 $("#otros").append('<div class="stat-text">$<span class="count">'+value.otros+'</span></div>');
                 $("#anuladas").append('<div class="stat-text">$<span class="count">'+value.anuladas+'</span></div>');
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


function llena_tabla(){
  $("#select2").val('0')
  $("#select3").val('0')
  $("#folio").val('')
  $("table#tablas tbody").empty();
  $("#tablas").show();
  $("#tablas_mesas").hide();
//  console.log($("#select").val());
  if($("#select").val()==4){
    llena_tabla4();
  }
  if($("#select").val()==5){
    llena_tabla5();
  }
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),Tipo:$("#select").val()},
      success:function(data){
   //console.log(data);
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

              $("table#tablas tbody").append("<tr><td class='serial'>"+ value.conteo +"</td><td class='avatar'>" + value.Divicion + "</td><td class='round-img'>" + value.Descripcion + "</td><td><span class='count'>" + value.tot + "</span></td></tr>");

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

function llena_tabla4(){
  $("#select2").val('0')
  $("#select3").val('0')
  $("#folio").val('')
  $("table#tablas tbody").empty();
  //console.log($("#select").val());
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin4.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),Tipo:$("#select").val()},
      success:function(data){
     $("table#tablas tbody").empty();
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

              $("table#tablas tbody").append("<tr><td class='serial'>"+ value.conteo +"</td><td class='avatar'>" + value.Divicion + "</td><td class='round-img'>" + value.Descripcion + "</td><td><span class='count'>" + value.tot + "</span></td></tr>");

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


function llena_tabla5(){
  $("#select2").val('0')
  $("#select3").val('0')
  $("#folio").val('')
  $("table#tablas tbody").empty();
  //console.log($("#select").val());
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin5.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),Tipo:$("#select").val()},
      success:function(data){
     $("table#tablas tbody").empty();
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

              $("table#tablas tbody").append("<tr><td class='serial'>"+ value.conteo +"</td><td class='avatar'>" + value.Divicion + "</td><td class='round-img'>" + value.Descripcion + "</td><td><span class='count'>" + value.tot + "</span></td></tr>");

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


function llena_combo_mesas(){
  $.ajax({
     type: "POST",
     url: 'obtiene_catalogo_mesas_admin.php',
     dataType: "json",
     success: function(data){
       $.each(data,function(key, registro) {
         $("#select2").append('<option value='+registro.No_Mesa+'>'+registro.Descripcion+'</option>');
       });
     },
     error: function(data) {
       alert('error');
     }
   });
}

function llena_combo_indv(){
  $.ajax({
     type: "POST",
     url: 'obtiene_catalogo_indv_admin.php',
     dataType: "json",
     success: function(data){
       $.each(data,function(key, registro) {
         $("#select3").append('<option value='+registro.No_Mesa+'>'+registro.Descripcion+'</option>');
       });
     },
     error: function(data) {
       alert('error');
     }
   });
}


function llena_tabla_detalle_mesas(){
  $("#select").val('0')
  $("#select3").val('0')
  $("#folio").val('')
  $("table#tablas tbody").empty();
  $("#tablas_mesas").hide();
  $("table#tablas_mesas tbody").empty();
  $("#tablas_mesas").show();
  //console.log($("#select").val());
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin_dmesas.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),mesa:$("#select2").val()},
      success:function(data){
     $("table#tablas_mesas tbody").empty();
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

          $("table#tablas_mesas tbody").append("<tr><td class='serial'>"+
          value.Fecha_Pedido +"</td><td class='avatar'>" + value.Folio + "</td>"+
          "<td class='round-img'>"+ value.Nombre_Clientes + "</td><td><span class='count'>" + value.conteo +
          "<td class='round-img'>"+ value.Divicion + "</td><td><span class='count'>" + value.Descripcion +
          "<td class='round-img'>"+ value.tot + "</td>"+
           "</span></td></tr>");
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

function llena_tabla_detalle_indv(){
      $("#select").val('0')
      $("#select2").val('0')
      $("#folio").val('')
  $("table#tablas tbody").empty();
  $("#tablas_mesas").hide();
  $("table#tablas_mesas tbody").empty();
  $("#tablas_mesas").show();
  //console.log($("#select").val());
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin_dmesas.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),mesa:$("#select3").val()},
      success:function(data){
     $("table#tablas_mesas tbody").empty();
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

              $("table#tablas_mesas tbody").append("<tr><td class='serial'>"+
              value.Fecha_Pedido +"</td><td class='avatar'>" + value.Folio + "</td>"+
              "<td class='round-img'>"+ value.Nombre_Clientes + "</td><td><span class='count'>" + value.conteo +
              "<td class='round-img'>"+ value.Divicion + "</td><td><span class='count'>" + value.Descripcion +
              "<td class='round-img'>"+ value.tot + "</td>"+
               "</span></td></tr>");

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

function busca_folio(){
  $("#select").val('0')
  $("#select2").val('0')
  $("#select3").val('0')
  $("table#tablas tbody").empty();
  $("#tablas_mesas").hide();
  $("table#tablas_mesas tbody").empty();
  $("#tablas_mesas").show();
  //console.log($("#select").val());
  $.ajax({
      type:'POST',
      url:'llena_tabla_rest_admin_dmesas_folio.php',
      dataType: "json",
      data:{fecha_ini:$("#fecha1").val(),fecha_fin:$("#fecha2").val(),mesa:$("#folio").val()},
      success:function(data){
     $("table#tablas_mesas tbody").empty();
        if(data != null && $.isArray(data)){
         /* Recorremos tu respuesta con each */
        $.each(data, function(index, value){

              $("table#tablas_mesas tbody").append("<tr><td class='serial'>"+
              value.Fecha_Pedido +"</td><td class='avatar'>" + value.Folio + "</td>"+
              "<td class='round-img'>"+ value.Nombre_Clientes + "</td><td><span class='count'>" + value.conteo +
              "<td class='round-img'>"+ value.Divicion + "</td><td><span class='count'>" + value.Descripcion +
              "<td class='round-img'>"+ value.tot + "</td>"+
               "</span></td></tr>");

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
