<?php
if(!empty($_POST['user_id'])){

    require('conexion.php');
  

    $sql = "DELETE FROM Pedidos where ID_Pedido = {$_POST['user_id']}";
     $result = mysqli_query($link,$sql);
}
    ?>
