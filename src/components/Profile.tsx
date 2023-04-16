import "./Profile.css";
import {useRef} from "react";

interface Props {
    Info: string;
}

export default function Profile(props: Props) {
    const infoRef = useRef(null);

    return (<div ref={infoRef}>
        </div>
    );
}