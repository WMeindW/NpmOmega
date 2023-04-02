import {useState} from "react";
import Message from "./components/Message";

export default function App() {
    const [display, setDisplay] = useState(Message);
    return display;
}
