<?php
if(!empty($_POST['user_id']) && !empty($_POST['tipo_cuen'])){
    $data = array();

    require('conexion.php');
    //get user data from the database
    //WHERE ID_Pedido = {$_POST['user_id']}");
  /*  $query = $db->query("SELECT * FROM Pedidos");

    if($query->num_rows > 0){
        $userData = $query->fetch_assoc();
        $data['status'] = 'ok';
        $data['result'] = $userData;
        $data['result'] = $userData;
    }else{
        $data['status'] = 'err';
        $data['result'] = '';
    }


    //returns data as JSON format
    echo json_encode($data);
}
*/



$sql = "SELECT 'TOTAL' as Descripcion,SUM(Precio) as total FROM `pedidos` WHERE No_Mesa={$_POST['user_id']} AND Cuenta_cerrada=0 and Cuenta_individual={$_POST['tipo_cuen']}";

mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $Des=$row['Descripcion'];
    $Tot=$row['total'];

    $clientes[] = array('Descripcion'=> $Des, 'total'=> $Tot);

}


$con = mysql_connect($dbHost, $dbUsername, $dbPassword);
mysql_select_db($dbName, $con);
$update="UPDATE pedidos SET Cuenta_cerrada=1 where No_Mesa={$_POST['user_id']} and Cuenta_individual={$_POST['tipo_cuen']}";
         mysql_query($update,$con) or die('Error. '.mysql_error());


$json_string = json_encode($clientes);
echo $json_string;
}


?>
