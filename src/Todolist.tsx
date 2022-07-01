import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (elId: number) => void
    //changeTasksFilter: (buttonName:string) => void
}

export function Todolist(props: PropsType) {
    const [filterValue, setFilterValue] = useState('All')

    let filteredTasks = props.tasks
    if (filterValue === 'Active') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }

    const changeTasksFilter = (buttonName: string) => {
        setFilterValue(buttonName)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map(el => {
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTasks(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>changeTasksFilter('All')}>All</button>
            <button onClick={()=>changeTasksFilter('Active')}>Active</button>
            <button onClick={()=>changeTasksFilter('Completed')}>Completed</button>
        </div>
    </div>
}
