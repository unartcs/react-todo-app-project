import React from 'react'

function Todo({ task, taskNumber, setTaskList, taskList }) {
    const deleteHandler = (e) => {
        setTaskList(taskList.filter(delItem => delItem.id !== task.id))
    }
    const completeHandler = () => {
        setTaskList(taskList.map((item) => {
            if (item.id === task.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${task.completed ? "completed" : ''}`}>{taskNumber + 1}. {task.text}</li>
            <button className='complete-btn' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo
