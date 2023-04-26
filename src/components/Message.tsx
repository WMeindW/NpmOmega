import "./Message.css";
import {SetStateAction, useEffect, useRef, useState} from "react";
import React from "react";
import $ from "jquery";
import parse from 'html-react-parser';

interface Props {
    onRedirect: (page: string) => void;
}

export default function Message(props: Props) {
    const id = document.cookie.split("id=")[1];
    const [message, setMessage] = useState(<div></div>);
    const [profile, setProfile] = useState(<div></div>);


    function reload(username: string) {
        $.post("/message", {id: id, username: username}, function (data) {
            setMessage(data);
        });
        $.post("/sendHook", {id: id, username: username}, function (data) {
        });
    }

    $.post("/friends", {id: id}, function (data) {
    });
    $.post("/user", {id: id}, function (data) {
        setProfile(<>
            <div className="profile-img"><img className="img" src={"/profile?" + data.split("&")[0]} alt="profile.png"/>
            </div>
            <div className="profile-username">{data.split("&")[1]}</div>
            <button type="button" onClick={() => props.onRedirect("profile")}
                    className="profile-menu bg-dark text-light">+
            </button>
        </>);
    });
    return <div>
        <div className="msg-container text-light">
            <div className="inner-container-msg bg-dark">
                <div className="msg-row mx-auto">
                </div>
                <label className="input-label mx-auto">
                </label>
            </div>
        </div>
        <div className="usr-container text-light">
            <div className="inner-container-usr bg-dark">
                <div className="row usr-row mx-auto">
                </div>
            </div>
        </div>
        <div className="msc-container text-light">
            <div className="inner-container-msc bg-dark">
                <div className=" msc-row mx-auto">
                    <div className="profile row mx-auto">
                        {profile}
                    </div>
                    <div className="addFriend mx-auto">
                        <button onClick={() => props.onRedirect("add")} className="addButton btn btn-primary">+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}