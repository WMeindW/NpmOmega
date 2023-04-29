import "./Profile.css";
import React, {useEffect, useRef, useState} from "react";
import $, {post} from "jquery";

interface Props {
    onRedirect: (page: string) => void;
}

export default function Profile(props: Props) {
    const id = document.cookie.split("id=")[1];
    let infoStorage: string;
    if (localStorage.getItem("infoState") == null) {
        infoStorage = "";
    } else {
        // @ts-ignore
        infoStorage = localStorage.getItem("infoState");
    }
    const [username, setUserName] = useState(infoStorage.split("&")[1]);
    const [password, setPassword] = useState(infoStorage.split("&")[2]);
    const [bio, setBio] = useState(infoStorage.split("&")[3]);
    const [idState, setId] = useState(infoStorage.split("&")[0]);

    function logout() {
        localStorage.clear();
    }

    function formStateUpdate(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (event.target.name == "username") {
            setUserName(value);
        } else if (event.target.name == "password") {
            setPassword(value);
        } else if (event.target.name == "bio") {
            setBio(value);
        }
    }

    $.post("/info", {id: id}, function (data) {
        if (data != infoStorage) {
            localStorage.setItem("infoState", data);
            setId(data.split("&")[0]);
            setUserName(data.split("&")[1]);
            setPassword(data.split("&")[2]);
            setBio(data.split("&")[3]);
        }
    });
    return <form method="post">
        <div className="picture-container">
            <img className="picture bg-dark"
                 src={"/profile?" + idState}
                 alt="profile.png"/>
            <button onClick={() => props.onRedirect("profileBack")} formAction={"/edit?" + idState}
                    className="action-button btn btn-primary">Save
            </button>
            <button onClick={() => logout()} formAction={"/logout?" + idState}
                    className="action-button btn btn-danger">Logout
            </button>
        </div>
        <div className="info-container">
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Username</p>
                <input className="info-section-text bg-dark text-light" name="username"
                       value={username}
                       type="text"
                       onChange={(e) => formStateUpdate(e)}/>
            </div>
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Password</p>
                <input className="info-section-text bg-dark text-light" name="password"
                       value={password}
                       type="text"
                       onChange={(e) => formStateUpdate(e)}/>
            </div>
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Bio</p>
                <input className="info-section-text bg-dark text-light" name="bio" value={bio}
                       type="text"
                       onChange={(e) => formStateUpdate(e)}/>
            </div>
        </div>
    </form>
}