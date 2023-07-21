<?php
 require("conexion.php");

//update para cerrar la cuenta

$input = filter_input_array(INPUT_POST);
if ($input['action'] == 'edit') {
$update_field='';
 //$mysqli->query("UPDATE users SET username='" . $input['username'] . "', email='" . $input['email'] . "', avatar='" . $input['avatar'] . "' WHERE id='" . $input['id'] . "'");
 //$sql_query = "UPDATE cl_diviciones SET Descripcion='" .$input['Descripcion']. "' WHERE ID_Divicion='" .$input['id']. "'";
 $sql_query = "UPDATE cl_sub_diviciones SET Descripcion='" .$input['Descripcion']. "' WHERE ID_Sub_Divicion='" .$input['id']. "'";
//$sql_query = "UPDATE cl_productos SET Precio='" . $input['Precio'] . "', Descripcion='" . $input['Descripcion'] . "' WHERE ID_Producto='" . $input['id'] . "'";

  mysqli_query($link,$sql_query);

}
if ($input['action'] == 'delete') {
  try {
                                       mysqli_query($link ,"SET @opcion=4");
                                       mysqli_query($link ,"SET @entero1=".$input['id']."");
                                       mysqli_query($link ,"SET @entero2=0");
                                       mysqli_query($link ,"SET @entero3=0");
                                       mysqli_query($link ,"SET @entero4=0");
                                       mysqli_query($link ,"SET @cadena1='0'");
                                       mysqli_query($link ,"SET @cadena2='0'");
                                       mysqli_query($link ,"SET @cadena3='0'");

                                     $result = mysqli_query($link,"call opera_base(@opcion,
                                                                                       @entero1,
                                                                                       @entero2,
                                                                                       @entero3,
                                                                                       @entero4,
                                                                                       @cadena1,
                                                                                       @cadena2,
                                                                                       @cadena3
                                                                                       );
                                                                ");

  while($row = mysqli_fetch_assoc($result))
  {
          $res=$row['RESPUESTA'];
          $events[] = array('RESPUESTA'=> $res);
  }
  $json_string = json_encode($events);
  echo $json_string;

  exit;

  } catch (Exception $e) {
      echo 'Excepción capturada: ',  $e->getMessage(), "\n";
  }

/*
    $sql_query2 = "UPDATE cl_sub_diviciones  SET Status=1 WHERE ID_Sub_Divicion='" . $input['id'] . "'";
    mysqli_query($link,$sql_query2);
    $json_string = json_encode($input);
    echo $json_string;*/
  }

?>
