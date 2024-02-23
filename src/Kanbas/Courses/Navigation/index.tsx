import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom Meetings",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaborations",
        "Syllabus",
        "Settings",
    ];
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <ul className="wd-navigation d-none d-sm-block">
            {links.map((link, index) => (
                <li
                    key={index}
                    className={
                        decodeURI(pathname).includes(link) ? "wd-active" : ""
                    }
                >
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}
export default CourseNavigation;
