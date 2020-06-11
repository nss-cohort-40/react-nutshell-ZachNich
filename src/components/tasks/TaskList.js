import React, { useState, useEffect } from 'react'
import TaskCard from './TaskCard'
import ApiManager from '../../modules/ApiManager'

const TaskList = props => {
    const [isCurrent, setIsCurrent] = useState([true])
    const [tasks, setTasks] = useState([])
    
    const handleToggle = e => setIsCurrent(!isCurrent)

    const completeTask = task => {
        ApiManager.update('tasks', task)
            .then(() => setIsCurrent(false))
    }

    const deleteTask = id => {
        ApiManager.delete('tasks', id)
            .then(() => setIsCurrent(true))
    }

    useEffect(() => {
        const getTasks = () => ApiManager.getByProperty('tasks', 'userId', JSON.parse(sessionStorage.user).id)
        getTasks().then(data => {
            setTasks(data.filter(each => each.complete === !isCurrent))
        })
    }, [isCurrent])

        return (
            <section className="task_list">
                <button type="button" onClick={() => props.history.push('/tasks/add')}>Add Task</button>
                {isCurrent ? <button type="button">Current</button> : <button type="button" onClick={handleToggle}>Current</button>}
                {isCurrent ? <button type="button" onClick={handleToggle}>Completed</button> : <button type="button">Completed</button>}
                {tasks.map(task => <TaskCard key={task.id} id={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} {...props} />)}
            </section>
        )
}

export default TaskList