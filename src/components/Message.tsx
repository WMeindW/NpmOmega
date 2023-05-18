import "./Message.css";
import {useState} from "react";
import React from "react";
import $ from "jquery";

interface Props {
    onRedirect: (page: string) => void;
}

export default function Message(props: Props) {
    let userStorage = localStorage.getItem("userState");
    let friendStorage = localStorage.getItem("friendState");
    let messageStorage = localStorage.getItem("messageState");
    let hookStorage = localStorage.getItem("hookState");
    let usernameState: string = "";
    const id = document.cookie.split("id=")[1];
    const [message, setMessage] = useState(parseMessage(messageStorage));
    const [profile, setProfile] = useState(parseUser(userStorage));
    const [friends, setFriends] = useState(parseFriends(friendStorage));
    const [hook, setHook] = useState(parseHook(hookStorage, ""));
    let index = 0;
    window.addEventListener("mousemove", () => updateMessages())
    window.addEventListener("keypress", (e) => updateMessagesOnKey(e))

    function updateMessages() {
        index++;
        if (index > 20 && usernameState != "") {
            $.post("/message", {id: id, username: usernameState}, function (data) {
                if (data != messageStorage) {
                    localStorage.setItem("messageState", data);
                    setMessage(parseMessage(data));
                }
            });
            index = 0;
        }
    }

    function updateMessagesOnKey(event: KeyboardEvent) {
        index++;
        if (event.key === "Enter" && usernameState != "") {
            $.post("/message", {id: id, username: usernameState}, function (data) {
                if (data != messageStorage) {
                    localStorage.setItem("messageState", data);
                    setMessage(parseMessage(data));
                }
                index = 0;
            });
        } else if (index > 5 && usernameState != "") {
            $.post("/message", {id: id, username: usernameState}, function (data) {
                if (data != messageStorage) {
                    localStorage.setItem("messageState", data);
                    setMessage(parseMessage(data));
                }
            });
            index = 0;
        }
    }

    function parseUser(data: string | null): JSX.Element {
        if (data == null) {
            return <div></div>;
        }
        return <>
            <div className="profile-img"><img className="img" src={"/profile?" + data.split("&")[0]}
                                              alt="profile.png"/>
            </div>
            <div className="profile-username">{data.split("&")[1]}</div>
            <button type="button" onClick={() => props.onRedirect("profile")}
                    className="profile-menu bg-primary text-light">+
            </button>
        </>;
    }

    function parseFriends(data: string | null): JSX.Element[] {
        if (data == null) {
            return [<div></div>];
        }
        const list = data.split("#");
        let friends: JSX.Element[] = [];
        for (let i = 0; i < list.length - 1; i++) {
            list[i] = list[i].replace("#", "");
            friends[i] = <div className="card row usr-card mx-auto" onClick={() => reload(list[i].split("&")[0])}>
                <div className="profile-img"><img className="img"
                                                  src={"/profile?" + list[i].split("&")[1]}
                                                  alt="profile.png"/></div>
                <div className="profile-username">{list[i].split("&")[0]}</div>
                <div className="profile-activity text-light">{list[i].split("&")[2]}</div>
            </div>;
        }
        return friends;
    }

    function parseMessage(data: string | null): JSX.Element[] {
        if (data == null) {
            return [<div></div>];
        }
        const list = data.split("#");
        let messages: JSX.Element[] = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].substring(0, 1) == ("1")) {
                list[i] = list[i].substring(1).replace("#", "");
                messages[i] = <div className="sent">
                    <div className="message">{list[i].split("&")[0]}
                        <div className="time">{list[i].split("&")[1]}</div>
                    </div>
                </div>;
            } else if (list[i].substring(0, 1) == ("0")) {
                list[i] = list[i].substring(1).replace("#", "");
                messages[i] = <div className="received">
                    <div className="message">{list[i].split("&")[0]}
                        <div className="time">{list[i].split("&")[1]}</div>
                    </div>
                </div>;
            }
        }
        return messages;
    }

    function parseHook(data: string | null, value: string): JSX.Element {
        if (data == null) {
            return <div></div>;
        }
        return <form method="post" action={"/send?" + data.split("&")[0]}>
            <input type="hidden" name="username" value={data.split("&")[1]}/>
            <input id="chatBox" defaultValue={value} name="message" type="text" className="input-text text-light"/>
            <input formAction={} onClick={() => clearMessage()} type="submit" value="Send" className="input-button text-light"/>
        </form>;
    }

    function clearMessage() {
        const chatbox = document.getElementById("chatBox");
        // @ts-ignore
        console.log(chatbox.value);
        // @ts-ignore
        chatbox.value = "";
    }

    function reload(username: string) {
        if (username != usernameState) {
            usernameState = username;
        }
        if (username != null && username != "") {
            $.post("/message", {id: id, username: username}, function (data) {
                if (data != messageStorage) {
                    localStorage.setItem("messageState", data);
                    setMessage(parseMessage(data));
                }
            });
            $.post("/sendHook", {id: id, username: username}, function (data) {
                if (data != hookStorage) {
                    localStorage.setItem("hookState", data);
                    setHook(parseHook(data, ""));
                }
            });
        }
    }

    $.post("/friends", {id: id}, function (data) {
        if (data != friendStorage) {
            localStorage.setItem("friendState", data);
            setFriends(parseFriends(data));
        }

    });
    $.post("/user", {id: id}, function (data) {
            if (data != userStorage) {
                localStorage.setItem("userState", data);
                setProfile(parseUser(data));
            }
        }
    );
    return <div>
        <div className="msg-container text-light">
            <div className="inner-container-msg bg-dark">
                <div className="msg-row mx-auto">
                    {message}
                </div>
                <label className="input-label mx-auto">
                    {hook}
                </label>
            </div>
        </div>
        <div className="usr-container text-light">
            <div className="inner-container-usr bg-dark">
                <div className="row usr-row mx-auto">
                    {friends}
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