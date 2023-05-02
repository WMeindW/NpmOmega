import "./AddFriend.css";
import $, {data} from "jquery";
import React, {useEffect, useRef, useState} from "react";

interface Props {
    onRedirect: (page: string) => void;
}

export default function AddFriend(props: Props) {
    const id = document.cookie.split("id=")[1];
    const [queries, setQueries] = useState([<div></div>]);
    let queryString = "";

    function query(query: string) {
        queryString = query;
        $.post("/query", {id: id, query: query}, function (data) {
            const elements: JSX.Element[] = [];
            const list = data.split("#");
            for (let i = 0; i < list.length - 1; i++) {
                elements[i] = <div className="card user-card row bg-dark">
                    <div className="profile-img"><img className="img text-light"
                                                      src={"/profile?" + list[i].split("&")[0]}
                                                      alt="profile.png"/></div>
                    <div className="profile-username text-light">{list[i].split("&")[1]}</div>
                    <button type="button"
                            className="profile-add bg-primary text-light" onClick={() => add(list[i].split("&")[0])}>+
                    </button>
                </div>;
            }
            setQueries(elements);
        });
    }

    function add(addId: string) {
        $.post("/add", {id: id, addId: addId}, (data) => {
            if (data == "success") {
                query(queryString);
            }
        });
    }

    return (
        <div>
            <div className="container-search row">
                <input type="button" onClick={() => props.onRedirect("addBack")}
                       className="input-back btn btn-primary"></input>
                <input type="text" onChange={(event) => query(event.currentTarget.value)}
                       className="input-search mx-auto bg-dark text-light"/>
            </div>
            <div className="container-user row">
                {queries}
            </div>
        </div>);
}