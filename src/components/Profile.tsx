import "./Profile.css";
import {useEffect, useRef} from "react";

interface Props {
    Info: string;
}

export default function Profile(props: Props) {
    const infoRef = useRef(null);
    useEffect(() => {
        // @ts-ignore
        infoRef.current.innerHtml = props.Info;
    });
    return (<div ref={infoRef}>
        </div>
    );
}