import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import $ from "jquery";

const id = document.cookie.split("id=")[1];
let info: string = "";
let message: string = "";
let friends: string = "";
let user: string = "";
$.get("/info", {id: id}, function (data) {
    info = data;
});
$.get("/message", {id: id}, function (data) {
    message = data;
});
$.get("/friends", {id: id}, function (data) {
    friends = data;
});
$.get("/user", {id: id}, function (data) {
    user = data;
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App info={info} message={message} friends={friends} user={user}/>
    </React.StrictMode>,
);
