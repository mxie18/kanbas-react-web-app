import { courses } from "../../Kanbas/Database";
import {
    Navigate,
    Route,
    Routes,
    useParams,
    useLocation,
    Link,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SmallScreenCourseNavigation from "../Navigation/Small/CourseNav";

function Courses({
    courseList,
}: {
    courseList: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
        section: string;
    }[];
}) {
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = courseList.find((course) => course._id === courseId);
    let arr = decodeURI(pathname).split("/");
    let [pressed, setPressed] = useState(false);
    let [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);

    window.onresize = () => {
        setIsSmallScreen(window.innerWidth <= 576);
        if (!isSmallScreen) {
            setPressed(false);
        }
    };

    console.log("courselist: ", courseList);

    return (
        <>
            <div className="popup-head d-flex d-sm-none">
                <Link
                    to={`${pathname}/KanbasNavigation`}
                    style={{ display: "flex" }}
                >
                    <HiMiniBars3 style={{ marginLeft: 15, color: "white" }} />
                </Link>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <span>
                        {course?.number} {course?.name}
                    </span>
                    {arr[4]}
                </div>

                {!pressed && (
                    <Link
                        to="/"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        onClick={() => setPressed(!pressed)}
                        style={{ display: "flex" }}
                    >
                        <FaChevronDown
                            style={{ marginRight: 15, color: "white" }}
                        />
                    </Link>
                )}
                {pressed && (
                    <Link
                        to="/"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        onClick={() => setPressed(!pressed)}
                        style={{ display: "flex" }}
                    >
                        <IoMdClose
                            style={{ marginRight: 15, color: "white" }}
                        />
                    </Link>
                )}
            </div>
            <div className="p-4">
                {isSmallScreen && (
                    <div className="collapse" id="collapseExample">
                        <SmallScreenCourseNavigation
                            pressed={pressed}
                            setPressed={setPressed}
                        />
                    </div>
                )}
                <div>
                    <h3 className="header-container d-none d-sm-flex">
                        <HiMiniBars3
                            style={{ marginRight: 30, color: "red" }}
                        />
                        <nav aria-label="breadcrumb" id="nav-bar">
                            <ol className="breadcrumb" id="nav-bar-list">
                                <li className="breadcrumb-item">
                                    <a
                                        href={`#/Kanbas/Courses/${courseId}`}
                                        style={{
                                            color: "red",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {course?.number} {course?.name}
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <span style={{ color: "black" }}>
                                        {arr[4]}
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </h3>
                </div>
                <hr className="d-none d-sm-block" />
                {!pressed && (
                    <>
                        <div className="d-flex">
                            <div>
                                <div
                                    className="d-none d-sm-block"
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 10,
                                        marginBottom: 10,
                                        marginRight: 10,
                                        fontStyle: "italic",
                                    }}
                                >
                                    {course?.section}
                                </div>
                                <CourseNavigation />
                            </div>

                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="Home" />}
                                />
                                <Route
                                    path="Home"
                                    element={<Home classNum={course?.number} />}
                                />
                                <Route path="Modules" element={<Modules />} />
                                <Route
                                    path="Piazza"
                                    element={<h1>Piazza</h1>}
                                />
                                <Route
                                    path="Zoom Meetings"
                                    element={<h1>Zoom Meetings</h1>}
                                />
                                <Route
                                    path="Assignments"
                                    element={<Assignments />}
                                />
                                <Route
                                    path="Quizzes"
                                    element={<h1>Quizzes</h1>}
                                />
                                <Route
                                    path="Assignments/:assignmentId"
                                    element={<h1>Assignment Editor</h1>}
                                />
                                <Route
                                    path="Grades"
                                    element={<h1>Grades</h1>}
                                />
                                <Route
                                    path="People"
                                    element={<h1>People</h1>}
                                />
                                <Route
                                    path="Discussions"
                                    element={<h1>Discussion</h1>}
                                />
                                <Route
                                    path="Announcements"
                                    element={<h1>Announcements</h1>}
                                />
                                <Route path="Pages" element={<h1>Pages</h1>} />
                                <Route path="Files" element={<h1>Files</h1>} />
                                <Route
                                    path="Rubrics"
                                    element={<h1>Rubrics</h1>}
                                />
                                <Route
                                    path="Outcomes"
                                    element={<h1>Outcomes</h1>}
                                />
                                <Route
                                    path="Collaborations"
                                    element={<h1>Collaborations</h1>}
                                />
                                <Route
                                    path="Syllabus"
                                    element={<h1>Syllabus</h1>}
                                />
                                <Route
                                    path="Settings"
                                    element={<h1>Settings</h1>}
                                />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
export default Courses;
