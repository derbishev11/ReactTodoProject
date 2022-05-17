import { useState } from "react";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";

import './Form.scss'
import { addTask } from '../../../redux/tasksSlice';
import api from './../../../api';

function Form(props) {
    const dispatch = useDispatch();

    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [saving, setSaving] = useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleStatusChange = (event) => {
        setDone(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault()

        if(description === '') {
            setErrorMessage('Enter a description');
        }
        else {
            const newTask = {
                id: uuid(),
                description: description,
                done: done
            };

            setSaving(true)

            api.post('/tasks', newTask)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(addTask(newTask));

                        setSaving(false)
                        setDescription('');
                        setDone(false);
                        setErrorMessage(null);
                    }
                })

            
            //props.addNewTask(newTask);

        }
    }
    


    return (
        <form onSubmit={handleSubmit}>
            <h2 className="h-new">Add a new task:</h2>
            {errorMessage && (
                <div className="error">
                    Ivalid data:  
                    {errorMessage}
                </div>
            )}
            <div className="field">
                <label>Description:</label><br></br>
                <input type="text" maxLength={150} value={description} onChange={handleDescriptionChange}>
                </input><br></br>
                <label>Status:</label><br></br>
                <select value={done} onChange={handleStatusChange}>
                    <option value={false}>Open</option>
                    <option value={true}>Completed</option>
                </select>
            </div>
            <button className="btn-submit" type="submit">Add</button>
            {saving && (
                <div className="saving">Saving...</div>
            )}
        </form>
    )
}

export default Form;