import "./Profile.css";
import React, {useEffect, useRef, useState} from "react";
import $ from "jquery";


export default function Profile() {
    const id = document.cookie.split("id=")[1];

    let infoStorage = localStorage.getItem("infoState");
    const [info, setInfo] = useState(parseInfo(infoStorage));

    function parseInfo(data: string | null): JSX.Element {
        if (data == null) {
            return <div></div>;
        }
        return <form action={"/edit?" + data.split("&")[0]} method="post">
            <div className="picture-container">
                <img className="picture bg-dark"
                     src={"/profile?" + data.split("&")[0]}
                     alt="profile.png"/>
                <button type="submit" className="action-button btn btn-primary">Save</button>
                <button formAction={"/logout?" + data.split("&")[0]} className="action-button btn btn-danger">Logout
                </button>
            </div>
            <div className="info-container">
                <div className="info-section">
                    <p className="info-section-heading bg-dark text-light">Username</p>
                    <input className="info-section-text bg-dark text-light" name="username"
                           value={data.split("&")[1]}
                           type="text"/>
                </div>
                <div className="info-section">
                    <p className="info-section-heading bg-dark text-light">Password</p>
                    <input className="info-section-text bg-dark text-light" name="password"
                           value={data.split("&")[2]}
                           type="text"/>
                </div>
                <div className="info-section">
                    <p className="info-section-heading bg-dark text-light">Bio</p>
                    <input className="info-section-text bg-dark text-light" name="bio" value={data.split("&")[3]}
                           type="text"/>
                </div>
            </div>
        </form>;
    }

    $.post("/info", {id: id}, function (data) {
        if (data != infoStorage) {
            localStorage.setItem("infoState", data);
            setInfo(parseInfo(data));
        }

    });
    return (<div>
            {info}
        </div>
    );
}