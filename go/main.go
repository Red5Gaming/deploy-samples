package main

import (
	"encoding/json"
	"net/http"
	"os"
	"time"
)

func main() {
	name := os.Getenv("APP_NAME")
	if name == "" {
		name = "go"
	}
	http.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) { _, _ = w.Write([]byte("ok")) })
	http.HandleFunc("/", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]string{"message": "Hello from " + name + " (preview check)", "time": time.Now().UTC().Format(time.RFC3339)})
	})
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	_ = http.ListenAndServe(":"+port, nil)
}
