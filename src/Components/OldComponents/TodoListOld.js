import React from "react";

const TodoList = (props) => {
    const {taskList} = props
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {taskList.forEach(task=> {
                    return (
                        <li>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList