import {useState} from "react";
import Message from "./components/Message";
import Profile from "./components/Profile";
import AddFriend from "./components/AddFriend";

interface Props {
    info: string;
    friends: string;
    user: string;
}

export default function App(props: Props) {

    let element = <Message Friends={props.friends} User={props.user}
                           onRedirect={(profile) => redirect(profile)}></Message>;
    //element = <AddFriend onRedirect={(addBack) => redirect(addBack)}></AddFriend>;
    const [display, setDisplay] = useState(element);

    function redirect(page: string) {
        if (page === "profile") {
            setDisplay(<Profile Info={props.info}></Profile>);
        }
        if (page === "addBack") {
            setDisplay(<Message Friends={props.friends} User={props.user}
                                onRedirect={(profile) => redirect(profile)}></Message>);
        }
        if (page === "add") {
            setDisplay(<AddFriend onRedirect={(addBack: string) => redirect(addBack)}></AddFriend>);
        }
    }

    return display;
}
