import React from 'react'
import {
    useState
} from 'react'
function Todo({ task, taskNumber, setTaskList, taskList }) {
    const [editedTask, setEditedTask] = useState(task.text)
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
    const editHandler = () => {
        setTaskList(taskList.map((item) => {
            if (item.id === task.id) {
                return {
                    ...item, edit: !item.edit, text: editedTask
                }
            }
            return item;
        }))
    }
    const editValueHandler = (e) => {
        setEditedTask(e.target.value)
    }
    return (
        <div className='todo'>
            {/* <li className={`todo-item ${task.completed ? "completed" : ''}`}>{taskNumber + 1}. {task.text}</li> */}
            <li className={`todo-item ${task.completed ? "completed" : ''}`}>
                {task.edit ? <input className={'todo-edit-input'} value={editedTask} onChange={editValueHandler}></input> : <span>{task.text}</span>}
            </li>
            <button className='complete-btn' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button className='edit-btn' onClick={editHandler}>
                <i className='fas fa-edit' aria-hidden="true"></i>
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo
