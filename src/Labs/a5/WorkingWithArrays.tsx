import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    description: string;
    due: string;
    completed: boolean;
}
function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: Todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`
        );
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo: Todo) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    console.log(todo);
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                type="number"
                value={todo.id}
                onChange={(e) =>
                    setTodo({ ...todo, id: parseInt(e.target.value) })
                }
            />
            <a className="btn btn-primary" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Updating an Item in an Array</h3>
            <input
                type="text"
                value={todo.title}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
            />
            <a
                className="btn btn-primary"
                href={`${API}/${todo.id}/title/${todo.title}`}
            >
                Update Title to {todo.title}
            </a>
            <br />
            <input
                type="checkbox"
                value={todo.completed.toString()}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        completed: e.target.checked,
                    })
                }
                checked={todo.completed}
            />
            <a
                className="btn btn-primary"
                href={`${API}/${todo.id}/completed/${todo.completed}`}
            >
                Update Completed to {todo.completed.toString()}
            </a>
            <br />
            <input
                type="text"
                value={todo.description}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        description: e.target.value,
                    })
                }
            />
            <a
                className="btn btn-primary"
                href={`${API}/${todo.id}/description/${todo.description}`}
            >
                Update Description to {todo.description}
            </a>
            <br />
            <button className="btn btn-primary" onClick={createTodo}>
                Create Todo
            </button>
            <button className="btn btn-success" onClick={updateTitle}>
                Update Title
            </button>
            <br />

            <textarea
                value={todo.description}
                // type="text"
                onChange={(e) =>
                    setTodo({ ...todo, description: e.target.value })
                }
            />
            <input
                value={todo.due}
                type="date"
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        due: e.target.value,
                    })
                }
            />
            <label>
                <input
                    value={todo.completed.toString()}
                    type="checkbox"
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            completed: e.target.checked,
                        })
                    }
                />
                Completed
            </label>
            <button className="btn btn-warning" onClick={postTodo}>
                Post Todo
            </button>
            <button className="btn btn-secondary" onClick={updateTodo}>
                Update Todo
            </button>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        <input
                            checked={todo.completed}
                            style={{ marginRight: 10 }}
                            type="checkbox"
                            readOnly
                        />
                        {todo.title}
                        {todo.description}
                        {todo.due}
                        <button
                            style={{ marginLeft: 10 }}
                            className="btn btn-danger"
                            onClick={() => removeTodo(todo)}
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2"
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => fetchTodoById(todo.id)}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WorkingWithArrays;
