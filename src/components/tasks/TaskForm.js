import React from 'react'
import ApiManager from '../../modules/ApiManager'

const TaskForm = props => {
    const [task, setTask] = useState({title: props.task.title || '', description: props.task.description || '', compDate: props.task.compDate || '', complete: false, userId: props.task.userId})

    const addTask = task => {
        e.preventDefault()
    }

    const discardTask = e => {
        e.preventDefault()

    }

    return (
        <form className="new_task_form">
            <fieldset>
                <input type="text" id="title" placeholder="title">`${task.title}`</input>
                <input type="text" id="description" placeholder="description">`${task.description}`</input>
                <input type="date" id="compDate" placeholder="completion date">`${task.compDate}`</input>
                <button type="button" onClick={discardTask}>Discard</button>
                <button type="submit" onClick={addTask}>Submit</button>
            </fieldset>
        </form>
    )
}

export default TaskForm