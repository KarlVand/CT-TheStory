<?php
// debug.php - Include this in your endpoints during development

function logCORSDebug() {
    error_log("=== CORS Debug Info ===");
    error_log("Request Method: " . $_SERVER['REQUEST_METHOD']);
    error_log("Origin: " . ($_SERVER['HTTP_ORIGIN'] ?? 'No Origin'));
    error_log("Request Headers: " . ($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'] ?? 'No Request Headers'));
    error_log("Request Method: " . ($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] ?? 'No Request Method'));
    
    // Log all headers
    $headers = getallheaders();
    error_log("All Headers: " . print_r($headers, true));
    
    // Log request body for POST requests
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        error_log("Request Body: " . file_get_contents('php://input'));
    }
}

// Usage in your endpoints:
logCORSDebug();
