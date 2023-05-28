import "./Profile.css";
import React, {useState} from "react";
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
    const [picture, setPicture] = useState<File>();

    function edit() {
        $.post("/edit", {
            id: idState,
            username: username,
            password: password,
            bio: bio,
        });
        props.onRedirect("profileBack");
    }

    function upload(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (picture != null) {
            if (picture.type.toString().split("/")[0] == "image") {
                $.post({
                    url: "/profile"
                    , contentType: picture.type
                    , processData: false
                    , data: picture
                    , success: () => {
                        const file = document.getElementById("file");
                        // @ts-ignore
                        file.value = null;
                        $.post("/info", {id: id}, function (data) {
                            localStorage.setItem("infoState", data);
                            setId(data.split("&")[0]);
                            setUserName(data.split("&")[1]);
                            setPassword(data.split("&")[2]);
                            setBio(data.split("&")[3]);
                        });
                    }
                });
            }
        }
    }

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
        } else if (event.target.name == "picture") {
            if (event.target.files != null) {
                setPicture(event.target.files[0]);
            }

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
    return <form method={"post"}>
        <div className="picture-container">
            <img className="picture bg-dark"
                 src={"/profile?" + idState}
                 alt="profile.png"/>
            <button onClick={() => edit()}
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
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Picture</p>
                <input id={"file"} className="upload-section bg-dark text-light" name="picture"
                       type="file"
                       onChange={(e) => formStateUpdate(e)}/>
                <button onClick={(e) => upload(e)}
                        className="upload-button btn btn-secondary">Upload
                </button>
            </div>
        </div>
    </form>;
}