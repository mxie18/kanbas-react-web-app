import "./index.css";

function Home() {
    return (
        <div className="main-profile">
            <h4>Matthew Xie's Profile</h4>
            <hr />

            <div className="main-profile-content">
                <div>
                    <h2>Matthew Xie</h2>

                    <h3>Contact</h3>
                    <p>
                        No registered services, you can add some on the{" "}
                        <a href="">settings</a> page.
                    </p>

                    <h3>Biography</h3>
                    <p>Student, Gamer, Dancer</p>

                    <h3>Links</h3>
                    <a href="#">YouTube</a>
                </div>

                <a href="#/Kanbas/Account/Edit">
                    <button>Edit Profile</button>
                </a>
            </div>
        </div>
    );
}
export default Home;
