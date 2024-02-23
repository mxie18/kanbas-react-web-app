import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaInbox,
    FaHistory,
    FaSignOutAlt,
} from "react-icons/fa";

import { SlScreenDesktop } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";

function KanbasNavigation(props: { styling: string[] }) {
    let classes = props.styling.join(" ");

    const links = [
        {
            label: "Account",
            icon: <FaRegUserCircle className="fs-3" id="account-icon" />,
        },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-3" /> },
        { label: "Courses", icon: <FaBook className="fs-3" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3" /> },
        { label: "Inbox", icon: <FaInbox className="fs-3" /> },
        { label: "History", icon: <FaHistory className="fs-3" /> },
        { label: "Studio", icon: <SlScreenDesktop className="fs-3" /> },
        { label: "Commons", icon: <FaSignOutAlt className="fs-3" /> },
        { label: "Help", icon: <IoIosHelpCircleOutline className="fs-3" /> },
    ];
    const { pathname } = useLocation();
    return (
        <div className={classes}>
            <ul className="wd-kanbas-navigation">
                <li>
                    <a href="http://northeastern.edu">
                        <img src="/images/northeastern.png" />
                    </a>
                </li>
                {links.map((link, index) => (
                    <li
                        key={index}
                        className={
                            pathname.includes(link.label) ? "wd-active" : ""
                        }
                    >
                        <Link to={`/Kanbas/${link.label}`}>
                            {link.icon} {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;
