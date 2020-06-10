import React from 'react'

const TaskCard = props => {
    return (
        <>
            <section className="task_card" id={`task-card-${props.task.id}`}>
                <p className="task_title">{props.task.title}</p>
                <p className="task_description">{props.task.description}</p>
                <p className="task_compDate">{props.task.compDate}</p>
                {props.task.complete === false ? <button type="button" onClick={() => props.editTask(props.task)}>Edit</button> : null}
                {props.task.complete === false ? <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button> : null}
                {props.task.complete === false ? <button type="button" 
                    onClick={() => {
                        props.task.complete = true
                        props.completeTask(props.task)
                    }}>Complete</button> : null}
            </section>
        </>
    )
}

export default TaskCard