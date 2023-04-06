import "./Message.css";

export default function Message() {
    return <div>
        <div className="msg-container text-light">
            <div className="inner-container-msg bg-dark"></div>
        </div>
        <div className="usr-container text-light">
            <div className="inner-container-usr bg-dark">
                <div className="row usr-row mx-auto">
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                    <div className="card usr-card mx-auto"></div>
                </div>
            </div>
        </div>
        <div className="msc-container text-light">
            <div className="inner-container-msc bg-dark">
                <div className="row msc-row mx-auto">
                    <div className="card msc-card mx-auto"></div>
                </div>
            </div>
        </div>
    </div>;
}