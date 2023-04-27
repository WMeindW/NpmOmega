import "./Profile.css";
import React, {useEffect, useRef, useState} from "react";
import $ from "jquery";


export default function Profile() {
    const id = document.cookie.split("id=")[1];
    const [info, setInfo] = useState(<div></div>);
    let infoState = "";
    $.post("/info", {id: id}, function (data) {
        if (infoState != data) {
            infoState = data;
            const form = <form action={"/edit?" + data.split("&")[0]} method="post">
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
                        <input className="info-section-text bg-dark text-light" name="bio" value={data.split("&")[2]}
                               type="text"/>
                    </div>
                </div>
            </form>;
            setInfo(form);
        }

    });
    return (<div>
            {info}
        </div>
    );
}