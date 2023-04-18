import "./AddFriend.css"


export default function AddFriend() {
    function query(query: string) {

    }

    return (
        <div>
            <div className="container-search row">
                <input type="button" className="input-back btn btn-primary"></input>
                <input type="text" onChange={(event) => query(event.currentTarget.value)}
                       className="input-search mx-auto bg-dark text-light"/>
            </div>
            <div className="container-user row">
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
                <div className="card user-card bg-dark"></div>
            </div>
        </div>);
}