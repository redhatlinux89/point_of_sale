<?php



$sql = "SELECT ID_Producto, Precio, Descripcion FROM cl_productos where Status=0 and Divicion={$_POST['id_producto']}
        and Sub_Divicion={$_POST['sub_div']}";
mysqli_set_charset($link, "utf8"); 

if(!$result = mysqli_query($link, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result))
{
    $pre=$row['ID_Producto'];
    $des=$row['Precio'];
    $div=$row['Descripcion'];

    $clientes[] = array('ID_Producto'=> $pre, 'Precio'=> $des, 'Descripcion'=> $div);

}

$json_string = json_encode($clientes);
echo $json_string;


 ?>
