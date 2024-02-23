import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import { HiPlus } from "react-icons/hi";
import { MdOutlineAssignment } from "react-icons/md";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <>
            {/* {<!-- Add buttons and other fields here -->} */}
            <div className="main-container">
                <div className="assignment-header">
                    <input
                        type="text"
                        placeholder="Search for Assignment"
                        className="text-entry"
                    />
                    <div className="assign-btn-bar">
                        <button className="btn btn-light">
                            <HiPlus />
                            Group
                        </button>
                        <button
                            className="btn btn-light"
                            style={{ color: "white", backgroundColor: "red" }}
                        >
                            <HiPlus />
                            Assignment
                        </button>
                        <button className="btn btn-light">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
                <hr />
                <div className="assignments-container">
                    <ul className="list-group wd-modules">
                        <li
                            className="list-group-item"
                            style={{ backgroundColor: "#ededed" }}
                        >
                            <div>
                                <FaEllipsisV className="me-2" /> Assignments
                                <span className="float-end">
                                    <div className="test">
                                        <span
                                            style={{
                                                marginRight: 10,
                                                borderRadius: 15,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                border: "1px solid gray",
                                            }}
                                        >
                                            100% of Total
                                        </span>
                                        <FaCheckCircle className="text-success" />
                                        <FaPlusCircle className="ms-2" />
                                        <FaEllipsisV className="ms-2" />
                                    </div>
                                </span>
                            </div>
                            <ul className="list-group">
                                {assignmentList.map((assignment) => (
                                    <li className="list-group-item">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <FaEllipsisV className="me-2" />
                                                <MdOutlineAssignment
                                                    className="me-2"
                                                    style={{ color: "green" }}
                                                />
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        marginLeft: 10,
                                                    }}
                                                >
                                                    <Link
                                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "black",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {assignment.title}
                                                    </Link>
                                                    <div
                                                        style={{ fontSize: 14 }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            Multiple Modules
                                                        </span>
                                                        <span>
                                                            {" "}
                                                            |{" "}
                                                            <span
                                                                style={{
                                                                    fontWeight:
                                                                        "bold",
                                                                }}
                                                            >
                                                                Due{" "}
                                                            </span>
                                                            {assignment.due} |
                                                            100 pts
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Assignments;
