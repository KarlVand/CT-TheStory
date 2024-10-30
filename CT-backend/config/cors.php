<?php
// config/cors.php

class CorsHandler {
    private $allowedOrigins;
    private $allowedMethods;
    private $allowedHeaders;
    private $allowCredentials;
    private $maxAge;

    public function __construct() {
        // List all allowed origins - during development you might have multiple
        $this->allowedOrigins = [
            'http://localhost:5173',    // React default dev server
            'http://localhost:3000',    // Alternative React port
            'http://127.0.0.1:5173'     // Alternative localhost
        ];

        // Define allowed HTTP methods
        $this->allowedMethods = [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'OPTIONS'  // Important for preflight requests
        ];

        // Define allowed headers
        $this->allowedHeaders = [
            'Content-Type',
            'Authorization',
            'X-Requested-With'
        ];

        // Whether to allow credentials (cookies, authorization headers)
        $this->allowCredentials = true;

        // How long the browser should cache the CORS response (in seconds)
        $this->maxAge = 86400; // 24 hours
    }

    public function handleRequest() {
        $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

        // Check if the origin is allowed
        if (in_array($origin, $this->allowedOrigins)) {
            header("Access-Control-Allow-Origin: $origin");
            
            // Allow credentials
            if ($this->allowCredentials) {
                header("Access-Control-Allow-Credentials: true");
            }

            // Response to preflight requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
                header("Access-Control-Allow-Methods: " . implode(', ', $this->allowedMethods));
                header("Access-Control-Allow-Headers: " . implode(', ', $this->allowedHeaders));
                header("Access-Control-Max-Age: {$this->maxAge}");
                
                // Preflight requests don't need to continue to the script
                exit(0);
            }
        }

        // Always set JSON content type for API responses
        header('Content-Type: application/json');
    }

    public function addAllowedOrigin($origin) {
        if (!in_array($origin, $this->allowedOrigins)) {
            $this->allowedOrigins[] = $origin;
        }
    }
}

// Create and use the CORS handler
$corsHandler = new CorsHandler();
$corsHandler->handleRequest();
