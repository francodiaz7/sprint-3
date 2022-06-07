<?php
    header('Content-type: application/json');
    $obj = array('experiencia' => [['empresa' => 'Microsoft', 'antiguedad' => 5],['empresa' => 'Google', 'antiguedad' => 5]]);
    $datos = array('nombre' => 'Juan', 'apellido' => 'Perez');
    echo json_encode($datos);
?>