import React, { useState } from "react";
import './App.css';

const Todo = () => {
	const [todo, setTodo] = useState(' ');
	const [list, setList] = useState([]);

	const handleAddTodo = () => {
		const newTodo = {
				id: Math.random(),
				todo: todo
		};

		setList([...list, newTodo]);
        setTodo('');
    };

		const handleDeleteTodo = (id) => {
			const newList = list.filter((todo) => todo.id !== id);
			setList(newList);
	};

 const handleTodo = (event) => {
			setTodo(event.target.value);
	};


return (
	<div className="Todo">
		<h1>To-Do</h1>

		<div className="Top">
                <input className="input" type="text" value={todo}
                   onChange={handleTodo} placeholder="Todo...." />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>
						<ul className="items">
                { list.map((todo) => (
                    <li className="list" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
	</div>
);
};
export default Todo;