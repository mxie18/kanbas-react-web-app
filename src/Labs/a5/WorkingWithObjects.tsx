import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: "1",
        name: "Module 1 - HTML",
        description: "How to use HTML",
        course: "CS4550",
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const MODULE_URL = "http://localhost:4000/a5/module";

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(
            `${ASSIGNMENT_URL}/title/${assignment.title}`
        );
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    console.log(assignment);
    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input
                onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        title: e.target.value,
                    })
                }
                value={assignment.title}
                type="text"
            />
            <button className="btn btn-primary" onClick={updateTitle}>
                Update Title to: {assignment.title}
            </button>
            <button className="btn btn-danger" onClick={fetchAssignment}>
                Fetch Assignment
            </button>
            <h4>Retrieving Objects</h4>
            <a
                className="btn btn-primary"
                href="http://localhost:4000/a5/assignment"
            >
                Get Assignment
            </a>
            <a
                className="btn btn-success"
                href="http://localhost:4000/a5/module"
            >
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a
                className="btn btn-primary"
                href="http://localhost:4000/a5/assignment/title"
            >
                Get Title
            </a>
            <a
                className="btn btn-success"
                href="http://localhost:4000/a5/module/name"
            >
                Get Module Name
            </a>
            <h4>Modifying Properties</h4>
            <a
                className="btn btn-primary"
                href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
            >
                Update Assignment Title
            </a>
            <input
                type="text"
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
                value={assignment.title}
            />
            <br />
            <a
                className="btn btn-primary"
                href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
            >
                Update Assignment Score
            </a>
            <input
                type="number"
                onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        score: parseInt(e.target.value),
                    })
                }
                value={assignment.score}
            />
            <br />
            <a
                className="btn btn-primary"
                href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
            >
                Update Assignment Completion
            </a>
            <input
                type="checkbox"
                onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        completed: e.target.checked,
                    })
                }
                checked={assignment.completed}
                value={assignment.completed.toString()}
            />
            <br />
            <a
                className="btn btn-success"
                href={`${MODULE_URL}/name/${module.name}`}
            >
                Update Module Name
            </a>
            <input
                type="text"
                onChange={(e) => setModule({ ...module, name: e.target.value })}
                value={module.name}
            />
            <br />
            <a
                className="btn btn-secondary"
                href={`${MODULE_URL}/description/${module.description}`}
            >
                Update Module Description
            </a>
            <input
                type="text"
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
                value={module.description}
            />
        </div>
    );
}
export default WorkingWithObjects;
