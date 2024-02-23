import "./index.css";

function Edit() {
    return (
        <div className="main-profile">
            <h2>Matthew Xie</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value="Matthew Xie" id="name" />
                <label htmlFor="pronouns" style={{ marginLeft: 15 }}>
                    Pronouns:
                </label>
                <select>
                    <option value="None" id="pronouns">
                        None
                    </option>
                </select>
            </div>
            <div style={{ marginTop: 15 }}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
            </div>
            <h3>Contact</h3>
            <p>
                No registered services, you can add some on the{" "}
                <a href="">settings</a> page
            </p>
            <h3>Biography</h3>
            <textarea cols={50} rows={10}>
                Student, Dancer, and Gamer.
            </textarea>
            <h3>Links</h3>
            <ul>
                <li>
                    <a href="">YouTube</a>
                    <span style={{ color: "blue", marginLeft: 5 }}>
                        Links to an external site.
                    </span>
                </li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" value="YouTube" />
                        </td>
                        <td>
                            <input
                                type="text"
                                value="https://www.youtube.com"
                            />
                        </td>
                        <td>
                            <a href="">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>Add another link</button>
            </div>
            <div>
                <button>Cancel</button>
                <a href="#/Kanbas/Account/Home">
                    <button>Save Profile</button>
                </a>
            </div>
            <div>
                <button>Edit Profile</button>
                <a href="#/Kanbas/Account/Home">
                    <button>Cancel Editing</button>
                </a>
            </div>
            <button>test</button>
        </div>
    );
}
export default Edit;
