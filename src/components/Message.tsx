import "./Message.css";

interface Props {
    Messages: string;
    Friends: string;
    User: string;
    onRedirect: (page: string) => void;
}

export default function Message(props: Props) {
    return <div>
        <div className="msg-container text-light">
            <div className="inner-container-msg bg-dark">
                <div className="msg-row mx-auto">
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="received">
                        <div className="message">Nazdaaaaaaaaaaar
                            <div className="time">14:30</div></div>
                    </div>
                    <div className="sent">
                        <div className="message">Ahojjjjjjjjjjjjjjjj
                            <div className="time">14:30</div></div>
                    </div>
                </div>
                <label className="input-label mx-auto">
                    <form method="post" action="/send">
                        <input type="text" className="input-text text-light"/>
                        <input type="submit" value="Send" className="input-button text-light"/>
                    </form>
                </label>
            </div>
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
                    <div className="card profile mx-auto">
                        <label className="profile-username">Username</label>
                        <label className="profile-img"><img className="img"
                                                            src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png"
                                                            alt="profile.png"/></label>
                        <button type="button" onClick={() => props.onRedirect("profile")}
                                className="profile-menu bg-dark text-light">+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}