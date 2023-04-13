import "./Profile.css";

export default function Profile() {
    return (<form action="/edit" method="post">
        <div className="picture-container">
            <img className="picture bg-dark" src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png"
                 alt="profile.png"/>
            <button type="submit" className="action-button btn btn-primary">Save</button>
            <button formAction="/logout" className="action-button btn btn-danger">Logout</button>
        </div>
        <div className="info-container">
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Name</p>
                <input className="info-section-text bg-dark text-light" type="text"/>
                <div className="divider bg-dark"></div>
            </div>
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Name</p>
                <input className="info-section-text bg-dark text-light" type="text"/>
                <div className="divider bg-dark"></div>
            </div>
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Name</p>
                <input className="info-section-text bg-dark text-light" type="text"/>
                <div className="divider bg-dark"></div>
            </div>
            <div className="info-section">
                <p className="info-section-heading bg-dark text-light">Name</p>
                <input className="info-section-text bg-dark text-light" type="text"/>
                <div className="divider bg-dark"></div>
            </div>
        </div>
    </form>);
}