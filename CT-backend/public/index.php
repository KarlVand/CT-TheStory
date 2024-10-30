<?php
// backend/public/index.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle CORS for development
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Simple router
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = ltrim($uri, '/');

// Route to appropriate handler
if ($uri === 'api/register.php') {
    require_once __DIR__ . '/api/register.php';
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
}

