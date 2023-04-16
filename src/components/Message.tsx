import "./Message.css";
import {useRef, useState} from "react";
import React from "react";

interface Props {
    Friends: string;
    User: string;
    onRedirect: (page: string) => void;
    Send: string;
}

export default function Message(props: Props) {
    function reload(username: string) {
        const id = document.cookie.split("id=")[1];
        $.get("/message", {id: id, username: username}, function (data) {
            if (!data.equals(state)) {
                setMessage(data);
            }
        });
    }

    let state = document.cookie.split("id=")[1];
    const [message, setMessage] = useState(state);
    const friendsRef = useRef(null);
    const messagesRef = useRef(null);
    const profileRef = useRef(null);
    const sendRef = useRef(null);
    // @ts-ignore
    //friendsRef.current.innnerHTML = props.Friends;
    // @ts-ignore
    //messagesRef.current.innnerHTML = message;
    // @ts-ignore
    //profileRef.current.innnerHTML = props.User;
    // @ts-ignore
    //sendRef.current.innnerHTML = props.Send;


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
                <div className="row msc-row mx-auto">
                    <div ref={profileRef} className="card profile row mx-auto">
                    </div>
                </div>
            </div>
        </div>
    </div>;
}