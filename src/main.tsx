import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import $ from "jquery";

const id = document.cookie.split("id=")[1];
let info: string = "";
let friends: string = "";
let user: string = "";
let send: string = "";
$.get("/sendHook", {id: id}, function (data) {
    send = data;
});
$.get("/info", {id: id}, function (data) {
    info = data;
});
$.get("/friends", {id: id}, function (data) {
    friends = data;
});
$.get("/user", {id: id}, function (data) {
    user = data;
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App info={info} friends={friends} user={user} send={send}/>
    </React.StrictMode>,
);
