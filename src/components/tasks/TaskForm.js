import React, { useState } from 'react'
import ApiManager from '../../modules/ApiManager'

const TaskForm = props => {
    const [task, setTask] = useState({title: '', description: '', compDate: '', complete: false, userId: JSON.parse(sessionStorage.user).id})

    const handleFieldChange = e => {
        const stateToChange = {...task}
        stateToChange[e.target.id] = e.target.value
        setTask(stateToChange)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (props.isEdit) {
            ApiManager.update('tasks', task)
        } else {
            ApiManager.post('tasks', task)
        }
    }

    const handleDiscard = e => {
        props.history.push('/tasks')
    }

    return (
        <form className="task_form">
            <fieldset>
                <input type="text" id="title" placeholder="title" onChange={handleFieldChange} value={task.title} />
                <input type="text" id="description" placeholder="description" onChange={handleFieldChange} value={task.description} />
                <input type="date" id="compDate" onChange={handleFieldChange} value={task.compDate} />
                <button type="button" onClick={handleDiscard}>Discard</button>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </fieldset>
        </form>
    )
}

export default TaskForm