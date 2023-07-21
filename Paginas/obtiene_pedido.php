<?php
if(!empty($_POST['user_id']) && !empty($_POST['tipo'])){
    $data = array();
    //database details
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

//generamos la consulta
/*$sql = "SELECT p.ID_Pedido,cls.Descripcion as Divicion,pro.Descripcion,p.Precio FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE p.No_Mesa={$_POST['user_id']} and p.Atendido=0 and p.Cuenta_individual={$_POST['tipo']}
              and p.Cuenta_cerrada=0";
              */

$sql = "SELECT p.ID_Pedido,cls.Descripcion as Divicion,pro.Descripcion,p.Precio FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE p.No_Mesa={$_POST['user_id']} and (p.Atendido=0 or p.Atendido=1) and p.Cuenta_individual={$_POST['tipo']}
              and p.Cuenta_cerrada=0 and p.Producto<>203
              union
              SELECT p.ID_Pedido,cls.Descripcion as Divicion,p.Descrp_Nvo_Ingred,p.Precio_Nvo_Ingred FROM cl_productos as pro
        left join pedidos as p on p.Producto= pro.ID_Producto
        left join cl_sub_diviciones as cls on cls.ID_Sub_Divicion=p.Sub_Divicion
        WHERE p.No_Mesa={$_POST['user_id']} and (p.Atendido=0 or p.Atendido=1)  and p.Cuenta_individual={$_POST['tipo']}
              and p.Cuenta_cerrada=0 and p.Producto=203";



mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['Precio'];
    $des=$row['Descripcion'];
    $div=$row['Divicion'];
    $id=$row['ID_Pedido'];

    $clientes[] = array('Precio'=> $pre, 'Descripcion'=> $des, 'Divicion'=> $div, 'ID_Pedido'=> $id);

}

$json_string = json_encode($clientes);
echo $json_string;
}

?>
