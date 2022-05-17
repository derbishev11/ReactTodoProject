import { useState, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import Task from "./Task/Task";
import './Tasks.scss';
import Form from "./Form/Form";
import { clearTasks, setTasks } from "../../redux/tasksSlice";
import api from './../../api';



function Tasks() {
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // const tasks = [
        //     {
        //         id: uuid(),
        //         description: 'Walk the dog',
        //         done: true
        //     },
        //     {
        //         id: uuid(),
        //         description: 'Wash the car',
        //         done: false
        //     },
        //     {
        //         id: uuid(),
        //         description: 'Finish the lab',
        //         done: false
        //     }
        // ];

        //setTasks(tasks)

        api.get('/tasks')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setTasks(response.data))
                    setLoading(false);
                }
            })

        

    }, []);

    const handlerClearTasks = () => {
        api.delete('/tasks/all')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(clearTasks());
                }
            })
    }

    // const handleStatusChange = (id) => {
    //     let updatedTasks = [...tasks];
    //     for (let task of updatedTasks) {
    //         if(task.id === id) {
    //             task.done = !task.done;
    //         }
    //     }
    //     //setTasks(updatedTasks)
    // }

    // const handleTaskRemove = (id) => {
    //     let updatedTasks = tasks.filter (
    //         (task) => task.id !== id
    //     );
    //     //setTasks(updatedTasks);
    // }

    // const addNewTask = (newTask) => {
    //     const updatedTasks = [
    //         ...tasks,
    //         newTask
    //     ];
    //     //setTasks(updatedTasks);
    // }

    return (
        <div>
            <div className="tasks-cont">
                <h2 className="tasks-header">These are the tasks:</h2>
                {loading && (
                    <div className="loading">Loading...</div>
                )}
                {tasks.map((task, index) => (
                <Task key={index} task={task}/>
                ))}
                <div className="btn-cont">
                    <button className="tasks-btn" onClick={handlerClearTasks}>Remove Tasks</button>
                </div>
            </div>

            <Form />
        </div>

    );

}

export default Tasks;