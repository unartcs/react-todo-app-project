import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || []
  });
  const [status, setStatus] = useState(['all']);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTasks(taskList.filter(task => task.completed === true))
        break;
      case 'uncompleted':
        setFilteredTasks(taskList.filter(task => task.completed !== true))
        break;
      default:
        setFilteredTasks(taskList)
        break;
    }
  }
  //ONLY RUNS ONCE FOR LOCAL STORAGE!
  // useEffect(() => {
  //   getLocalTasks()
  // }, []);

  useEffect(() => {
    filterHandler()
    saveLocalTasks()
  }, [inputText, taskList, status])

  // useEffect(()=> {saveLocalTasks()},[inputText])

  // const getLocalTasks = () => {
  //   if (localStorage.getItem('tasks') === null) {
  //     console.log('empty')
  //     localStorage.setItem('tasks', JSON.stringify([]));
  //   }
  //   else {
  //     let tasksFromLocal = JSON.parse(localStorage.getItem("tasks"))
  //     console.log(tasksFromLocal)
  //     setTaskList(tasksFromLocal)
  //   }
  // };

  const saveLocalTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  };

  return (
    <div className="App">
      <header>
        Todo List
      </header>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
        status={status}
        setStatus={setStatus}
        setFilteredTasks={setFilteredTasks}
        filteredTasks={filteredTasks} />
      <TodoList
        filteredTasks={filteredTasks}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
