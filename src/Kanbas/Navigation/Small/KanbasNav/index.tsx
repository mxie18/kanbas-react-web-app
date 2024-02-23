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
import { IoMdClose } from "react-icons/io";

import { SlScreenDesktop } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";

function SmallScreenKanbasNavigation() {
    const links = [
        {
            label: "Account",
            icon: <FaRegUserCircle className="fs-3" />,
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
    let name = "/KanbasNavigation";

    return (
        <div className="">
            <div style={{ float: "right", marginRight: 20 }}>
                <Link to={pathname.slice(0, -name.length)}>
                    <IoMdClose style={{ color: "gray" }} />
                </Link>
            </div>
            <ul className="wide-nav">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={`/Kanbas/${link.label}`}>
                            {link.icon} {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SmallScreenKanbasNavigation;
