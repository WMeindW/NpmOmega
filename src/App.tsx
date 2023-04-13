import {useState} from "react";
import Message from "./components/Message";
import Profile from "./components/Profile";


export default function App() {
    function redirect(page: string) {
        if (page === "profile") {
            setDisplay(<Profile></Profile>);
        }
    }

    let element = <Message Messages={""} Friends={""} User={""}
                           onRedirect={(profile) => redirect(profile)}></Message>;
    element = <Profile></Profile>;
    const [display, setDisplay] = useState(element);
    return display;
}
