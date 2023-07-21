$(document).ready(function(){
        var calendar = $('#calendar').fullCalendar({  // assign calendar
            header:{
                language: 'es',
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultView: 'month',
            editable: true,
            selectable: true,
            allDaySlot: false,

            events: "index.php?view=1",  // request to load current events


            eventClick:  function(event, jsEvent, view) {  // when some one click on any event
                endtime = $.fullCalendar.moment(event.end).format('h:mm');
                starttime = $.fullCalendar.moment(event.start).format('dddd, MMMM Do YYYY, h:mm');
                var mywhen = starttime + ' - ' + endtime;
                $('#modalTitle').html(event.title);
                $('#modalWhen').text(mywhen);
                $('#eventID').val(event.id);
                $('#calendarModal').modal();
            },

            select: function(start, end, jsEvent) {  // click on empty time slot
                endtime = $.fullCalendar.moment(end).format('h:mm');
                starttime = $.fullCalendar.moment(start).format('dddd, MMMM Do YYYY, h:mm');
                var mywhen = starttime + ' - ' + endtime;
                start = moment(start).format();
                end = moment(end).format();
                $('#createEventModal #startTime').val(start);
                $('#createEventModal #endTime').val(end);
                $('#createEventModal #when').text(mywhen);
                $('#createEventModal').modal('toggle');
           },
           eventDrop: function(event, delta){ // event drag and drop
               $.ajax({
                   url: 'index.php',
                   data: 'action=update&title='+event.title+'&start='+moment(event.start).format()+'&end='+moment(event.end).format()+'&id='+event.id ,
                   type: "POST",
                   success: function(json) {
                   //alert(json);
                   }
               });
           },
           eventResize: function(event) {  // resize to increase or decrease time of event
               $.ajax({
                   url: 'index.php',
                   data: 'action=update&title='+event.title+'&start='+moment(event.start).format()+'&end='+moment(event.end).format()+'&id='+event.id,
                   type: "POST",
                   success: function(json) {
                       //alert(json);
                   }
               });
           }
        });

       $('#submitButton').on('click', function(e){ // add event submit
           // We don't want this to act as a link so cancel the link action
           e.preventDefault();
           doSubmit(); // send to form submit function
       });

       $('#deleteButton').on('click', function(e){ // delete event clicked
           // We don't want this to act as a link so cancel the link action
           e.preventDefault();
           doDelete(); //send data to delete function
       });

       function doDelete(){  // delete event
           $("#calendarModal").modal('hide');
           var eventID = $('#eventID').val();
           $.ajax({
               url: 'index.php',
               data: 'action=delete&id='+eventID,
               type: "POST",
               success: function(json) {
                   if(json == 1)
                        $("#calendar").fullCalendar('removeEvents',eventID);
                   else
                        return false;


               }
           });
       }
       function doSubmit(){ // add event
           $("#createEventModal").modal('hide');
           var title = $('#title').val();
           var startTime = $('#startTime').val();
           var endTime = $('#endTime').val();

           console.log(title,startTime,endTime);

           $.ajax({
               url: 'index.php',
               //data: 'action=add&title='+title+'&start='+startTime+'&end='+endTime,
               data: 'action=add&title='+title+'&start='+startTime+'&ends='+endTime,
               type: "POST",
               success: function(json) {
                 console.log(json);
                   $("#calendar").fullCalendar('renderEvent',
                   {
                       id: json.id,
                       title: title,
                       start: startTime,
                       end: endTime,
                   },
                   true);
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
    });
