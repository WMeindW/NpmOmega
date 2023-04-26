import "./Profile.css";
import {useEffect, useRef, useState} from "react";
import $ from "jquery";


export default function Profile() {
    const id = document.cookie.split("id=")[1];
    const info = useRef(null);
    useEffect(() => {
        $.post("/info", {id: id}, function (data) {
            // @ts-ignore
            info.current.innerHTML = data;
        });
    });
    return (<div ref={info}>
        </div>
    );
}