

function obtiene(param1, param2, param3){

    var position="", margin_left="", margin_top="", height="", width="", top="", left="";
    var  Mesa_global="",bandera1=0;
 
//console.log("Lego a obtiene "+param1+" "+param2+" "+param3);
var par1, par2, par3;

// valida con bandera 1 que ya haya echo la isnercion en mesas y posisicones
bandera1=param2;
console.log("bandera1 "+bandera1)

if(bandera1===1 || bandera1==='1'){ // inserta en la tabla objetos_ubicacion
if(param1===1 || param1==='1'){
    console.log("Entra al 1")
    bandera1=0;
    par3=param3;
   
    retorna_css(param3);

      console.log("Entro al 1 para insertar");
}
if(param1===2 || param1==='2'){ // actualiza posiciones en la tabla objetos_ubicacion
   
    var  tamano=0;
 
    let valores=retorna_css(param3); 

    position = valores.position;
    margin_left = valores.margin_left;
    margin_top = valores.margin_top;
    height = valores.height;
    width = valores.width;
    top = valores.top;
    left = valores.left;

 tamano=param3.length;
 if(tamano===10){  // id con 1 digito 10
    console.log("Tamaño "+tamano)
    par3=param3.slice(-1);
    console.log("Boton: "+par3)
 }
 if(tamano===11){  // id con dos digitos =11
    console.log("Tamaño "+tamano)
    par3=param3.slice(-2);
    console.log("Boton: "+par3)
 }

 param2=1;//x
 param3=10;//y 
      bandera1=0;
}

if(param1===3 || param1==='3'){  //retorna las maesas
    par3=19;
    bandera1=0;
 console.log("bandera "+bandera1);

}

if(param1===4 || param1==='4'){
   console.log("Llego al 4"); 
    
    position="MESA "; // oDESCRIPCION 1
    param2=0;//OCUPACION
    param3=0;//ZONA
    par3=param3//BOTON
    margin_left="";
    margin_top="";
    height="";
    width="";
    top="";
    left="";    

}

$.ajax({
    type:'POST',
    url:'backend_buttons.php',
    dataType: "json",
    data:{opcion:param1,int1:param2,int2:param3,btn:par3,cad1:position,cad2:margin_left,cad3:margin_top,cad4:height,cad5:width,cad6:top,cad7:left},
    success:function(data){
      console.log(data);
          /* Vemos que la respuesta no este vacía y sea una arreglo */
             if(data != null && $.isArray(data)){

              /* Recorremos tu respuesta con each */
             $.each(data, function(index, value){
             
                console.log("succes "+param1);

                if(param1===3 || param1==='3'){  // retorna posicion de cada boton

                          // Mesa_global=value.No_mesa;
                   $('#droppable').append('<div id="draggable'+value.boton+'" class="ui-widget-content draggable resizable " onclick="obtiene(2,1,this.id)">'
                   +'<p>MESA'+value.boton+'</p></div>');
                   $( "#draggable"+value.boton ).draggable({ revert: "invalid" });
                   $( "#draggable"+value.boton).resizable({
                       animate: false
                     });  

                $("#draggable"+value.boton).css("position",value.position);
                $("#draggable"+value.boton).css("margin-left",value.margin-left);
                $("#draggable"+value.boton).css("margin-top",value.margin-top);
                $("#draggable"+value.boton).css("height",value.height);
                $("#draggable"+value.boton).css("width",value.width);
                $("#draggable"+value.boton).css("top",value.top);
                $("#draggable"+value.boton).css("left",value.left);

                console.log("LLlego al 3 "+value.boton);
                bandera1=0;

                }

                if(param1===4 || param1==='4'){
                  console.log("LLlego al 4 "+value.No_mesa);
                  Mesa_global=value.No_mesa;
                     $('#droppable').append('<div id="draggable'+value.No_mesa+'" class="ui-widget-content draggable resizable " onclick="obtiene(2,1,this.id)">'
                    +'<p>MESA'+value.No_mesa+'</p></div>');
                    $( "#draggable"+value.No_mesa ).draggable({ revert: "invalid" });
                    $( "#draggable"+value.No_mesa).resizable({
                        animate: false
                      });                   
                    
                }
             });

             if (bandera1===1 || bandera1==='1'){
                bandera1=0;
                setTimeout(function() { 
                    obtiene(1,1,Mesa_global) // inserta la posicion inicial del boton
                }, 1500);           
            
             }

             if (param1===2 || param1==='2'){
                 console.log("Llego al 2");
             }
           
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
}// fin de bandera 1 validacion
}


function retorna_css(param3){ // objeto que retorna posiciones
    var position="", margin_left="", margin_top="", height="", width="", top="", left="", par3="";
    tamano=param3.length;
 if(tamano===10){
    console.log("Tamaño "+tamano)
    par3=param3.slice(-1);
    console.log("Boton: "+par3)
 }
 if(tamano===11){
    console.log("Tamaño "+tamano)
    par3=param3.slice(-2);
    console.log("Boton: "+par3)
 }
// https://api.jquery.com/css/
//var styleProps = $( this ).css([
    var styleProps = $( "#draggable"+par3 ).css([
        //"width", "height", "color", "background-color"
        "position","margin-left","margin-top","height","width","top","left"
      ]);
      $.each( styleProps, function( prop, value ) {
        // console.log("Funcion devuelve elemnetos "+prop + ": " + value) ;
         if(prop==='position'){position=value};
         if(prop==='margin-left'){margin_left=value};
         if(prop==='margin-top'){margin_top=value};
         if(prop==='height'){height=value};
         if(prop==='width'){ width=value};
         if(prop==='top'){top=value};
         if(prop==='left'){left=value};      
      });
    
      return{
        position,
        margin_left,
        margin_top,
        height,
        width,
        top,
        left
      };   
}

