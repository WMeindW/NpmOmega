import {useState} from "react";
import Message from "./components/Message";
import Profile from "./components/Profile";
import AddFriend from "./components/AddFriend";

export default function App() {

    let element = <Message onRedirect={(profile) => redirect(profile)}></Message>;
    //element = <AddFriend onRedirect={(addBack) => redirect(addBack)}></AddFriend>;
    const [display, setDisplay] = useState(element);

    function redirect(page: string) {
        if (page === "profile") {
            setDisplay(<Profile></Profile>);
        }
        if (page === "addBack") {
            setDisplay(<Message onRedirect={(profile) => redirect(profile)}></Message>);
        }
        if (page === "add") {
            setDisplay(<AddFriend onRedirect={(addBack: string) => redirect(addBack)}></AddFriend>);
        }
    }

    return display;
}
