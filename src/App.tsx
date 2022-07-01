import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS2', isDone: false}
    ])
    const removeTasks = (elId: number) => {
        setTasks(tasks.filter((el) => el.id !== elId))
        console.log(tasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTasks={removeTasks}
            />
        </div>
    );
}

export default App;
