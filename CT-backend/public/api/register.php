<?php

require_once '../config/headers.php';
require_once '../config/database.php';

// Get the request body
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

// Basic error handling for JSON decode
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    exit;
}


class RegistrationException extends Exception {}

try {
    // Your registration logic here
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);
    
    if ($stmt->execute([$data['name'], $data['email'], $hashedPassword])) {
        echo json_encode(['success' => true, 'message' => 'Registration successful']);
    } else {
        throw new RegistrationException('Registration failed');
    }
} catch (RegistrationException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
