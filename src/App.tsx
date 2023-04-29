import {useState} from "react";
import Message from "./components/Message";
import Profile from "./components/Profile";
import AddFriend from "./components/AddFriend";

export default function App() {
    const state = localStorage.getItem("appState");
    let element = <Message onRedirect={(profile) => redirect(profile)}></Message>;
    if (state == "message") {
        element = <Message onRedirect={(profile) => redirect(profile)}></Message>
    } else if (state == "profile") {
        element = <Profile onRedirect={(profileBack: string) => redirect(profileBack)}></Profile>;
    } else if (state == "addFriend") {
        element = <AddFriend onRedirect={(addBack: string) => redirect(addBack)}></AddFriend>
    }

    const [display, setDisplay] = useState(element);

    function redirect(page: string) {
        if (page === "profile") {
            localStorage.setItem("appState", "profile");
            setDisplay(<Profile onRedirect={(profileBack: string) => redirect(profileBack)}></Profile>);
        }
        if (page === "addBack") {
            localStorage.setItem("appState", "message");
            setDisplay(<Message onRedirect={(profile) => redirect(profile)}></Message>);
        }
        if (page === "add") {
            localStorage.setItem("appState", "addFriend");
            setDisplay(<AddFriend onRedirect={(addBack: string) => redirect(addBack)}></AddFriend>);
        }
        if (page === "profileBack") {
            localStorage.setItem("appState", "message");
            setDisplay(<Message onRedirect={(profile) => redirect(profile)}></Message>);
        }
    }

    return display;
}
