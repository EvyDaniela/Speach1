<?php
$archivo_contador = 'contador.txt';

if (file_exists($archivo_contador)) {
    echo "Archivo encontrado. ";
    $conteo = file_get_contents($archivo_contador);
    echo "Contenido actual: $conteo. ";
    $conteo = intval($conteo);
} else {
    echo "Archivo no encontrado. Iniciando en 0. ";
    $conteo = 0;
}

$conteo++;
echo "Nuevo conteo: $conteo. ";

file_put_contents($archivo_contador, $conteo);
echo "Conteo guardado.";
?>
