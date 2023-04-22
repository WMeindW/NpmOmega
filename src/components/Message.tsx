import "./Message.css";
import {useEffect, useRef, useState} from "react";
import React from "react";
import $ from "jquery";

interface Props {
    Friends: string;
    User: string;
    onRedirect: (page: string) => void;
}

export default function Message(props: Props) {
    let send = "";

    function reload(username: string) {
        const id = document.cookie.split("id=")[1];
        $.post("/message", {id: id, username: username}, function (data) {
            if (!data.equals(state)) {
                setMessage(data);
            }
        });
        $.post("/sendHook", {id: id, username: username}, function (data) {
            send = data;
        });
    }

    let state = document.cookie.split("id=")[1];
    const [message, setMessage] = useState(state);
    const friendsRef = useRef(null);
    const messagesRef = useRef(null);
    const profileRef = useRef(null);
    const sendRef = useRef(null);
    useEffect((): void => {
        // @ts-ignore
        friendsRef.current.innnerHTML = props.Friends;
        // @ts-ignore
        messagesRef.current.innnerHTML = message;
        // @ts-ignore
        profileRef.current.innnerHTML = props.User;
        // @ts-ignore
        sendRef.current.innnerHTML = send;
    });
    return <div>
        <div className="msg-container text-light">
            <div className="inner-container-msg bg-dark">
                <div ref={messagesRef} className="msg-row mx-auto">
                </div>
                <label ref={sendRef} className="input-label mx-auto">
                </label>
            </div>
        </div>
        <div className="usr-container text-light">
            <div className="inner-container-usr bg-dark">
                <div ref={friendsRef} className="row usr-row mx-auto">
                </div>
            </div>
        </div>
        <div className="msc-container text-light">
            <div className="inner-container-msc bg-dark">
                <div className=" msc-row mx-auto">
                    <div ref={profileRef} className="profile row mx-auto">
                    </div>
                    <div className="addFriend mx-auto">
                        <button onClick={() => props.onRedirect("add")} className="addButton btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}