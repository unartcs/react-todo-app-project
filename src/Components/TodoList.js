import React, {useState} from 'react';
import Todo from './Todo';

const TodoList = ({taskList, setTaskList, filteredTasks}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTasks.map((item, index)=>(
                    <Todo taskNumber={index} task={item} key={item.id} setTaskList={setTaskList} taskList={taskList} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList