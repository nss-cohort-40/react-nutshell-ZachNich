import React from 'react'

const TaskCard = props => {
    return (
        <>
            <section className="task_card" id={props.task.id}>
                <p className="task_title">{props.task.title}</p>
                <p className="task_description">{props.task.description}</p>
                <p className="task_compDate">{props.task.compDate}</p>
            </section>
        </>
    )
}

export default TaskCard