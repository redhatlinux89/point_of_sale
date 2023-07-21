<?php
 require("conexion.php");

//update para cerrar la cuenta

$input = filter_input_array(INPUT_POST);
if ($input['action'] == 'edit') {
$update_field='';
 //$mysqli->query("UPDATE users SET username='" . $input['username'] . "', email='" . $input['email'] . "', avatar='" . $input['avatar'] . "' WHERE id='" . $input['id'] . "'");
$sql_query = "UPDATE cl_productos SET Precio='" . $input['Precio'] . "', Descripcion='" . $input['Descripcion'] . "' WHERE ID_Producto='" . $input['id'] . "'";
  //  mysql_query($sql_query,$link) or die('Error. '.mysql_error());
        mysqli_query($link,$sql_query);

}
if ($input['action'] == 'delete') {
    //$mysqli->query("UPDATE cl_productos  SET Status=1 WHERE ID_Producto='" . $input['id'] . "'");
    $sql_query2 = "UPDATE cl_productos  SET Status=1 WHERE ID_Producto='" . $input['id'] . "'";
      mysqli_query($link,$sql_query2);
    $json_string = json_encode($input);
    echo $json_string;
  }

?>
