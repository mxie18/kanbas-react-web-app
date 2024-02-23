import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";
import { IoHome } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { TbDeviceCameraPhone } from "react-icons/tb";
import { MdOutlineAssignment } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { LuFileStack } from "react-icons/lu";
import { PiNotepad } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function SmallScreenCourseNavigation(props: any) {
    console.log("prop", props);
    const links = [
        {
            label: "Home",
            icon: <IoHome className="fs-3" />,
        },
        {
            label: "Modules",
            icon: <FaRegFileAlt className="fs-3" />,
        },
        {
            label: "Piazza",
            icon: <HiUserGroup className="fs-3" />,
        },
        {
            label: "Zoom Meetings",
            icon: <TbDeviceCameraPhone className="fs-3" />,
        },
        {
            label: "Assignments",
            icon: <MdOutlineAssignment className="fs-3" />,
        },
        {
            label: "Quizzes",
            icon: <MdOutlineQuiz className="fs-3" />,
        },
        {
            label: "Grades",
            icon: <GrScorecard className="fs-3" />,
        },
        {
            label: "People",
            icon: <FaPeopleGroup className="fs-3" />,
        },
        {
            label: "Discussions",
            icon: <GoCommentDiscussion className="fs-3" />,
        },
        {
            label: "Announcements",
            icon: <GrAnnounce className="fs-3" />,
        },
        {
            label: "Pages",
            icon: <RiPagesLine className="fs-3" />,
        },
        {
            label: "Files",
            icon: <LuFileStack className="fs-3" />,
        },
        {
            label: "Rubrics",
            icon: <PiNotepad className="fs-3" />,
        },
        {
            label: "Outcomes",
            icon: <FiTrendingUp className="fs-3" />,
        },
        {
            label: "Collaborations",
            icon: <GrGroup className="fs-3" />,
        },
        {
            label: "Syllabus",
            icon: <FaRegFileAlt className="fs-3" />,
        },
        {
            label: "Settings",
            icon: <CiSettings className="fs-3" />,
        },
    ];
    const { pathname } = useLocation();
    console.log(pathname);

    const handleClick = () => {
        props.setPressed(!props.pressed);
        document.getElementById("collapseExample")?.classList.remove("show");
    };
    return (
        <ul className="small-course-nav" style={{ paddingLeft: 0 }}>
            {links.map((link, index) => (
                <li key={index}>
                    <Link to={link.label} onClick={() => handleClick()}>
                        {link.icon}
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default SmallScreenCourseNavigation;
