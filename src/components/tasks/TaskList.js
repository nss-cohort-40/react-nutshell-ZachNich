import React, { useState, useEffect } from 'react'
import TaskCard from './TaskCard'
import ApiManager from '../../modules/ApiManager'

const TaskList = props => {
    const [isComplete, setIsComplete] = useState([false])
    const [tasks, setTasks] = useState([])

    
    const handleToggle = e => {
        if (isComplete) {setIsComplete(false)}
        else {setIsComplete(true)}
    }

    useEffect(() => {
        const getTasks = () => ApiManager.getByProperty('tasks', 'complete', isComplete)
        getTasks().then(data => setTasks(data))
    }, [])

        return (
            <section className="task_list">
                <button type="button" onClick={() => props.history.push('/tasks/add')}>Add Task</button>
                {isComplete ? <button type="button">Current</button> : <button type="button" onClick={handleToggle}>Current</button>}
                {isComplete ? <button type="button" onClick={handleToggle}>Completed</button> : <button type="button">Completed</button>}
                {tasks.map(task => <TaskCard key={task.id} id={task.id} task={task} {...props} />)}
            </section>
        )
}

export default TaskList