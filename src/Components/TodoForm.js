import React, { useState } from 'react'
import uniqid from 'uniqid';

function TodoForm(props) {
    const { inputText, setInputText, setTaskList, taskList, setStatus, setFilteredTasks, status, filteredTasks } = props;
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTaskHandler = (e) => {
        e.preventDefault()
        setTaskList([
            ...taskList, { text: inputText, completed: false, id: uniqid(), edit: false }
        ])
        setInputText('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input type='text' className='todo-input' onChange={inputTextHandler} value={inputText}></input>
                <button className='todo-button' type='submit' onClick={submitTaskHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className='select'>
                    <select name='todos' className='filter-todo' onChange={statusHandler}>
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