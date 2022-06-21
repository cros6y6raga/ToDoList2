import React from 'react';

type TodolistPropsType = {
    title: string
    title2?: number
    tasks1: Array<task1PropsType>
}
type task1PropsType = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <h3>{props.title2}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks1.map(el => {
                        return (
                            <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                        )
                    })}
                    {/*<li><input type="checkbox" checked={props.tasks1[0].isDone}/> <span>{props.tasks1[0].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks1[1].isDone}/> <span>{props.tasks1[1].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks1[2].isDone}/> <span>{props.tasks1[2].title}</span></li>*/}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};