// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import favicons
import "./assets/favicon-32x32.png";
import "./assets/favicon-16x16.png";
import "./assets/favicon.ico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
