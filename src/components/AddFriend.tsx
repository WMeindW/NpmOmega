import "./AddFriend.css";
import $ from "jquery";
import {useRef, useState} from "react";

interface Props {
    onRedirect: (page: string) => void;
}

export default function AddFriend(props: Props) {
    const id = document.cookie.split("id=")[1];
    const ref = useRef(null);

    function query(query: string) {
        $.post("/query", {id: id, query: query}, function (data) {
            // @ts-ignore
            ref.current.innerHTML = data;
        });
    }

    function add(addId: string) {
        $.post("/add", {id: id, addId: addId});
    }

    return (
        <div>
            <div className="container-search row">
                <input type="button" onClick={() => props.onRedirect("addBack")}
                       className="input-back btn btn-primary"></input>
                <input type="text" onChange={(event) => query(event.currentTarget.value)}
                       className="input-search mx-auto bg-dark text-light"/>
            </div>
            <div ref={ref} className="container-user row">
            </div>
        </div>);
}