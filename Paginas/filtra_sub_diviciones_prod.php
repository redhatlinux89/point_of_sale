<?php
//if(!empty($_POST['user_id']) && !empty($_POST['tipo'])){

    require('conexion.php');
    $data = array();

$sql = "SELECT ID_Sub_Divicion,Descripcion FROM cl_sub_diviciones where Status=0 and id_Divicion={$_POST['id_div']}";

mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['ID_Sub_Divicion'];
    $des=$row['Descripcion'];

    $clientes[] = array('ID_Sub_Divicion'=> $pre, 'Descripcion'=> $des);

}


$json_string = json_encode($clientes);
echo $json_string;


?>
