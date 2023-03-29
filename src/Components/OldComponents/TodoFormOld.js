import React, { useState } from 'react'

function TodoForm() {
    const [task, setTask] = useState()
    const [taskList = [], setTaskList] = useState()
    function changeTask(e) {
        setTask(e.target.value)
    }
    function addTask(e) {
        setTaskList(oldTaskList=> {
            oldTaskList.push(task)
        })
    }
    // function addTask(e) {
    //     setTaskList(taskList.concat(task))
    // }
    return (
        <div>
            <form>
                <input type='text' className='todo-input' onChange={changeTask}></input>
                <button className='todo-button' type='submit' onClick={addTask}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className='select'>
                    <select name='todos' className='filter-todo'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>

                </div>
            </form>
        </div>

    )
}

export default TodoForm