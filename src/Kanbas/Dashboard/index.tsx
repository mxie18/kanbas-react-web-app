import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { courses } from "../Database";
import { MdOutlineAssignment } from "react-icons/md";
import "./index.css";

function Dashboard({
    courseList,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
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
    course: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
        section: string;
    };
    setCourse: (course: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
        section: string;
    }) => void;
    addNewCourse: () => void;
    deleteCourse: (id: string) => void;
    updateCourse: () => void;
}) {
    // const [courseList, setCourses] = useState(courses);
    // const [course, setCourse] = useState({
    //     _id: "0",
    //     name: "New Course",
    //     number: "New Number",
    //     startDate: "2023-09-10",
    //     endDate: "2023-12-15",
    //     image: "reactjs.jpg",
    //     section: "2024_1 Spring 2024 Semester",
    // });

    // const addNewCourse = () => {
    //     const newCourse = { ...course, _id: new Date().getTime().toString() };
    //     setCourses([...courseList, { ...newCourse }]);
    // };
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courseList.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courseList.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    console.log(courseList);

    return (
        <div className="p-4">
            <h1>Dashboard</h1> <hr />
            <h2>Published Courses ({courseList.length})</h2> <hr />
            <div className="dashboard-content d-flex">
                <div className="d-flex flex-wrap g-4 card-overflow">
                    {courseList.map((course) => (
                        <div
                            key={course._id}
                            className=""
                            style={{ width: 300 }}
                        >
                            <Link to={`/Kanbas/Courses/${course._id}`}>
                                <div className="card">
                                    <img
                                        src={`/images/${course.image}`}
                                        className="card-img-top"
                                        style={{ height: 150 }}
                                    />
                                    <div className="card-body">
                                        <div
                                            className="card-title"
                                            style={{
                                                textDecoration: "none",
                                                color: "navy",
                                                fontWeight: "bold",
                                                marginBottom: 0,
                                            }}
                                        >
                                            {course.number} {course.name}
                                        </div>
                                        <p
                                            className="card-text"
                                            style={{
                                                color: "gray",
                                                margin: 0,
                                            }}
                                        >
                                            {course.number}
                                        </p>
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: 14,
                                                color: "gray",
                                            }}
                                        >
                                            {course.section}
                                        </p>
                                        <MdOutlineAssignment
                                            className="fs-3"
                                            style={{ marginRight: 15 }}
                                        />

                                        <div className="btn btn-primary">
                                            Go
                                        </div>
                                        <button
                                            className="btn btn-secondary"
                                            style={{
                                                marginLeft: 5,
                                                marginRight: 5,
                                            }}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="modify-courses d-none d-sm-block">
                    <h4>Course Options</h4>
                    <input
                        value={course.name}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, name: e.target.value })
                        }
                    />
                    <input
                        value={course.number}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, number: e.target.value })
                        }
                    />
                    <input
                        value={course.startDate}
                        className="form-control"
                        type="date"
                        onChange={(e) =>
                            setCourse({ ...course, startDate: e.target.value })
                        }
                    />
                    <input
                        value={course.endDate}
                        className="form-control"
                        type="date"
                        onChange={(e) =>
                            setCourse({ ...course, endDate: e.target.value })
                        }
                    />
                    <input
                        value={course.section}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, section: e.target.value })
                        }
                    />
                    <div className="modify-buttons">
                        <button
                            onClick={addNewCourse}
                            style={{ marginRight: 5 }}
                            className="btn btn-success"
                        >
                            Add
                        </button>
                        <button
                            onClick={updateCourse}
                            className="btn btn-primary"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
