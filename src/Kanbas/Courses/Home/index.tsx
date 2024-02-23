import ModuleList from "../Modules/List";
import "./index.css";
import { FaBan } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbFileImport } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

function Home(props: { classNum: string | undefined }) {
    return (
        <div className="main">
            <div className="main-content">
                <ModuleList />
            </div>
            <div className="status-bar d-none d-xl-block">
                <h4>Course Status</h4>
                <div className="publish-bar">
                    <button
                        className="btn btn-light"
                        style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                    >
                        <FaBan />
                        Unpublish
                    </button>
                    <button
                        className="btn btn-light"
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                    >
                        <IoIosCheckmarkCircleOutline />
                        Published
                    </button>
                </div>
                <div className="button-column">
                    <button className="btn btn-light">
                        <TbFileImport />
                        Import Existing Content
                    </button>
                    <button className="btn btn-light">
                        <FaSignOutAlt />
                        Import From Commons
                    </button>
                    <button className="btn btn-light">
                        <MdOutlinePageview />
                        Choose Home Page
                    </button>
                    <button className="btn btn-light">
                        <BsFileEarmarkBarGraph />
                        View Course Stream
                    </button>
                    <button className="btn btn-light">
                        <TfiAnnouncement />
                        New Announcement
                    </button>
                    <button className="btn btn-light">
                        <VscGraphLine />
                        New Analytics
                    </button>
                    <button className="btn btn-light">
                        <CiBellOn />
                        View Course Notifications
                    </button>
                </div>
                <h4 style={{ marginTop: 20 }}>To Do</h4>
                <hr style={{ margin: 0 }} />
                <div className="todo">
                    <FaCircle style={{ color: "red", marginTop: 5 }} />
                    <div>
                        <p style={{ color: "red" }}>Grade A1</p>
                        <span style={{ color: "gray" }}>
                            100 points - Sep 11 11:59pm{" "}
                        </span>
                    </div>
                    <MdOutlineClose style={{ color: "gray", fontSize: 15 }} />
                </div>
                <div className="todo">
                    <FaCircle style={{ color: "red", marginTop: 5 }} />
                    <div>
                        <p style={{ color: "red" }}>Grade A2</p>
                        <span style={{ color: "gray" }}>
                            100 points - Oct 12 11:59pm{" "}
                        </span>
                    </div>
                    <MdOutlineClose style={{ color: "gray", fontSize: 15 }} />
                </div>
                <div className="coming-up">
                    <h4 style={{ marginTop: 20 }}>Coming Up</h4>
                    <div className="calendar">
                        <CiCalendarDate
                            style={{ color: "gray", marginRight: 3 }}
                        />
                        <span style={{ color: "red" }}>View Calendar</span>
                    </div>
                </div>
                <hr style={{ margin: 0 }} />
                <div className="lecture">
                    <CiCalendarDate
                        style={{ color: "gray", marginRight: 10, marginTop: 4 }}
                    />
                    <div className="lecture-desc">
                        <span style={{ color: "red" }}>Lecture</span>
                        <span style={{ color: "gray" }}>
                            {props.classNum} Class
                        </span>
                        <span style={{ color: "gray" }}>Sep 11 at 11:45am</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
