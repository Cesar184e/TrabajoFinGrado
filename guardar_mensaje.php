<?php
header('Content-Type: application/json');

$host     = 'localhost';
$usuario  = 'root';
$password = '';
$base     = 'brasaforno';

$conn = new mysqli($host, $usuario, $password, $base);

if ($conn->connect_error) {
    echo json_encode(['ok' => false, 'error' => 'Error de conexión']);
    exit;
}

$nombre  = trim($_POST['nombre']  ?? '');
$email   = trim($_POST['email']   ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

if (!$nombre || !$email || !$mensaje) {
    echo json_encode(['ok' => false, 'error' => 'Campos vacíos']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['ok' => false, 'error' => 'Email no válido']);
    exit;
}

$stmt = $conn->prepare(
    "INSERT INTO mensajes (nombre, email, mensaje) VALUES (?, ?, ?)"
);
$stmt->bind_param("sss", $nombre, $email, $mensaje);

if ($stmt->execute()) {
    echo json_encode(['ok' => true]);
} else {
    echo json_encode(['ok' => false, 'error' => 'Error al guardar']);
}

if (strlen($nombre) > 100 || strlen($mensaje) > 1000) {
    echo json_encode(['ok' => false, 'error' => 'Texto demasiado largo']);
    exit;
}

$stmt->close();
$conn->close();
?>
