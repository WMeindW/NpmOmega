import "./Message.css";
import {SetStateAction, useEffect, useRef, useState} from "react";
import React from "react";
import $ from "jquery";
interface Props {
    onRedirect: (page: string) => void;
}

export default function Message(props: Props) {
    const id = document.cookie.split("id=")[1];
    const [message, setMessage] = useState([<div></div>]);
    const [profile, setProfile] = useState(<div></div>);
    const [friends, setFriends] = useState([<div></div>]);
    const [hook, setHook] = useState(<div></div>);

    function reload(username: string) {
        $.post("/message", {id: id, username: username}, function (data) {
            const list = data.split("#");
            let messages: JSX.Element[] = [];
            for (let i = 0; i < list.length - 1; i++) {
                if (list[i].substring(0, 1).equals("1")) {
                    list[i] = list[i].substring(1).replace("#", "");
                    messages[i] = <div className="sent">
                        <div className="message">{list[i].split("&")[0]}
                            <div className="time">{list[i].split("&")[1]}</div>
                        </div>
                    </div>;
                } else if (list[i].substring(0, 1).equals("0")) {
                    list[i] = list[i].substring(1).replace("#", "");
                    messages[i] = <div className="received">
                        <div className="message">{list[i].split("&")[0]}
                            <div className="time">{list[i].split("&")[1]}</div>
                        </div>
                    </div>;
                }
                setMessage(messages);
            }
        });
        $.post("/sendHook", {id: id, username: username}, function (data) {
            setHook(<form method="post" action={"/send?" + data.split("&")[0]}>
                <input type="hidden" name="username" value={data.split("&")[1]}/>
                <input name="message" type="text" className="input-text text-light"/>
                <input type="submit" value="Send" className="input-button text-light"/>
            </form>);
        });
    }

    $.post("/friends", {id: id}, function (data) {
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
        setFriends(friends);
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