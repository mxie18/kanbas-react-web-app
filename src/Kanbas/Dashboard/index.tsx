import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { MdOutlineAssignment } from "react-icons/md";
import "./index.css";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1> <hr />
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="d-flex flex-wrap g-4 card-overflow">
                {courses.map((course) => (
                    <div key={course._id} className="" style={{ width: 300 }}>
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
                                        style={{ color: "gray", margin: 0 }}
                                    >
                                        {course.number}
                                    </p>
                                    <p
                                        className="card-text"
                                        style={{ fontSize: 14, color: "gray" }}
                                    >
                                        {course.section}
                                    </p>
                                    <MdOutlineAssignment
                                        className="fs-3"
                                        style={{ marginRight: 15 }}
                                    />
                                    <div className="btn btn-primary">Go</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
