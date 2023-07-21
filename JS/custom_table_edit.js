$(document).ready(function(){
  $('#data_table').Tabledit({
    url: 'live_edit.php',
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'Precio'], [2, 'Descripcion']]
    }

});

$('#data_table2').Tabledit({
  url: 'edit_diviciones.php',
  columns: {
      identifier: [0, 'id'],
      editable: [[1, 'Descripcion']]
  }

});
/*$('#data_table').Tabledit({
deleteButton: false,
editButton: false,
columns: {
identifier: [0, 'id'],
editable: [[1, 'Precio'], [2, 'Descripcion']]
},
hideIdentifier: true,
url: 'live_edit.php'
});*/
});
