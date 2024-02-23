import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";

function Account() {
    return (
        <div className="account-screen">
            <div>
                <ul>
                    <li>
                        <a href="#">Notifications</a>
                    </li>
                    <li>
                        <a href="#/Kanbas/Account">Profile</a>
                    </li>
                    <li>
                        <a href="#">Files</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                    <li>
                        <a href="#">ePortfolios</a>
                    </li>
                    <li>
                        <a href="#">Shared Content</a>
                    </li>
                    <li>
                        <a href="#">The Hub</a>
                    </li>
                    <li>
                        <a href="#">Qwickly Course Tools</a>
                    </li>
                    <li>
                        <a href="#">Global Announcements</a>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="/Edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default Account;
