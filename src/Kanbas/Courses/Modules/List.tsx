import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();

    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules.filter(
            (module) => module.course === courseId
        )
    );
    const module = useSelector(
        (state: KanbasState) => state.modulesReducer.module
    );
    const dispatch = useDispatch();

    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

    return (
        <>
            <div className="buttons">
                <button className="btn btn-light">Collapse All</button>
                <button className="btn btn-light">View Progress</button>
                <button className="btn btn-light dropdown-toggle">
                    <IoIosCheckmarkCircleOutline
                        style={{ color: "green", marginRight: 5 }}
                    />
                    Publish All
                </button>
                <button
                    className="btn btn-light"
                    style={{ color: "white", backgroundColor: "red" }}
                >
                    <HiPlus />
                    Module
                </button>
                <button className="btn btn-light" style={{}}>
                    <FaEllipsisV />
                </button>
            </div>
            <hr />
            <div className="module-options">
                <h4>Module Options</h4>
                <input
                    value={module.name}
                    className="form-control"
                    onChange={(e) =>
                        // setModule({
                        //     ...module,
                        //     name: e.target.value,
                        // })
                        dispatch(setModule({ ...module, name: e.target.value }))
                    }
                />
                <textarea
                    value={module.description}
                    className="form-control"
                    onChange={(e) =>
                        // setModule({
                        //     ...module,
                        //     description: e.target.value,
                        // })
                        dispatch(
                            setModule({
                                ...module,
                                description: e.target.value,
                            })
                        )
                    }
                />
                <div className="module-buttons">
                    <button
                        className="btn btn-success"
                        style={{ marginRight: 5 }}
                        // onClick={() => {
                        //     addModule(module);
                        // }}
                        onClick={() =>
                            dispatch(addModule({ ...module, course: courseId }))
                        }
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-primary"
                        // onClick={updateModule}
                        onClick={() => dispatch(updateModule(module))}
                    >
                        Update
                    </button>
                </div>
            </div>

            <div>
                <ul className="list-group wd-modules">
                    {moduleList.map((module) => (
                        <li
                            className="list-group-item"
                            style={{ backgroundColor: "#ededed" }}
                            onClick={() => setSelectedModule(module)}
                        >
                            <div className="module-head">
                                <div>
                                    <FaEllipsisV className="me-2" />
                                    {module.name}
                                </div>

                                <div>
                                    <button
                                        className="btn btn-secondary"
                                        style={{ fontSize: 12, marginRight: 5 }}
                                        // onClick={(event) => {
                                        //     event.stopPropagation();
                                        //     setModule(module);
                                        // }}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            dispatch(setModule(module));
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        style={{ fontSize: 12, marginRight: 5 }}
                                        // onClick={() => deleteModule(module._id)}
                                        onClick={() =>
                                            dispatch(deleteModule(module._id))
                                        }
                                    >
                                        Delete
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </div>
                            </div>
                            {selectedModule?._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons.map((lesson: any) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default ModuleList;
