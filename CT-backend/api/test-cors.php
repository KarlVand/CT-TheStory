<?php
// public/api/test-cors.php

require_once '../config/cors.php';

// CORS is now handled automatically by the handler

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'message' => 'CORS is working!',
        'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'Unknown',
        'method' => $_SERVER['REQUEST_METHOD']
    ]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
