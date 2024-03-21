import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
// import { courses } from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
    const [courseList, setCourses] = useState<any[]>([]);
    const COURSES_API = `${API_BASE}/api/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_API);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "reactjs.jpg",
        section: "2024_1 Spring 2024 Semester",
    });
    const addNewCourse = async () => {
        const response = await axios.post(COURSES_API, course);
        setCourses([...courseList, response.data]);
    };
    const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(`${COURSES_API}/${courseId}`);
        setCourses(courseList.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        const response = await axios.put(
            `${COURSES_API}/${course._id}`,
            course
        );

        setCourses(
            courseList.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation styling={["d-none", "d-sm-block"]} />
                <div className="" style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account />} />
                        <Route
                            path="Dashboard"
                            element={
                                <Dashboard
                                    courseList={courseList}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            }
                        />
                        <Route
                            path="Courses"
                            element={
                                <Dashboard
                                    courseList={courseList}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            }
                        />
                        <Route
                            path="Courses/:courseId/*"
                            element={<Courses />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
