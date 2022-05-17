import React from "react";
import { useDispatch } from "react-redux";
import {VscChromeClose, VscDiscard} from 'react-icons/vsc';

import './Task.scss';
import { changeTaskStatus, removeTask } from '../../../redux/tasksSlice';
import api from './../../../api';


const Task = (props) => {
    const dispatch = useDispatch();

    const handleStatusClick = () => {
        const id = props.task.id;
        const updatedTask = {
            ...props.task,
            done: !props.task.done
        };
        api.put('/tasks/' + id, updatedTask)
            .then((response) => {
                if(response.status === 200) {
                    dispatch(changeTaskStatus(id));
                }
            })
        
        //props.handleStatusChange(id);
    }

    const handlerForTaskRemove = () => {
        const id = props.task.id;
        api.delete('/tasks/' + id)
            .then((response) => {
                if(response.status === 200) {
                    dispatch(removeTask(id));
                }
            })
        //props.handleTaskRemove(id);
    }

    return(
        <div className="task-cont">
            <div>
                <h3 className="task-desc">{props.task.description}</h3>
                <div>ID: {props.task.id}</div>
                <div className="task-status">Status: {props.task.done ? <span style={{ color: '#4CAF50'}}>Completed</span>: <span style={{ color: '#fd3333'}}>Open</span> }</div>
            </div>
            <div className="task-btn-cont">
                <button className="task-btn-chng" onClick={handleStatusClick}> <VscDiscard/> Change Status</button>
                <button className="task-btn-rmv" onClick={handlerForTaskRemove}> <VscChromeClose className="i-rct"/> Remove Task</button>
            </div>
        </div>
    )
}

export default Task