import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'

const TaskForm = props => {
    const [task, setTask] = useState({title: '', description: '', compDate: '', complete: false, userId: JSON.parse(sessionStorage.user).id})

    const handleFieldChange = e => {
        const stateToChange = {...task}
        stateToChange[e.target.id] = e.target.value
        if (props.isEdit) {
            stateToChange.id = parseInt(props.match.params.taskId)
        }
        setTask(stateToChange)
        console.log(props)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (props.isEdit) {
            ApiManager.update('tasks', task)
                .then(() => props.history.push('/tasks'))
        } else {
            ApiManager.post('tasks', task)
                .then(() => props.history.push('/tasks'))
        }
    }

    const handleDiscard = e => {
        props.history.push('/tasks')
    }

    useEffect(() => {
        if (props.match.params.taskId) {
            ApiManager.get('tasks', props.match.params.taskId)
                .then(setTask)
        }
    }, [props.match.params.taskId])

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