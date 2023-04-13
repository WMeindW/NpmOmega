import {useState} from "react";
import Message from "./components/Message";
import Profile from "./components/Profile";

interface Props {
    info: string;
    message: string;
    friends: string;
    user: string;
}

export default function App(props: Props) {
    let element = <Message Messages={props.message} Friends={props.friends} User={props.user}
                           onRedirect={(profile) => redirect(profile)}></Message>;
    const [display, setDisplay] = useState(element);

    function redirect(page: string) {
        if (page === "profile") {
            setDisplay(<Profile Info={props.info}></Profile>);
        }
    }

    return display;
}
