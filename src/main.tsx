import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import $ from "jquery";

const id = document.cookie.split("id=")[1];
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
