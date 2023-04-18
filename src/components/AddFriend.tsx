import "./AddFriend.css";

interface Props {
    onRedirect: (page: string) => void;
}

export default function AddFriend(props: Props) {
    function query(query: string) {

    }

    return (
        <div>
            <div className="container-search row">
                <input type="button" onClick={() => props.onRedirect("addBack")}
                       className="input-back btn btn-primary"></input>
                <input type="text" onChange={(event) => query(event.currentTarget.value)}
                       className="input-search mx-auto bg-dark text-light"/>
            </div>
            <div className="container-user row">
                <div className="card user-card row bg-dark">
                    <div className="profile-img"><img className="img"
                                                      src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
                                                      alt="profile.png"/></div>
                    <div className="profile-username text-light">Username</div>
                    <button type="button"
                            className="profile-add bg-primary text-light">+
                    </button>
                </div>
            </div>
        </div>);
}