import { useState } from 'react'
import Button from '../../components/Button/Button'
import { useTaskStore } from '../../stores/Tasks.store'
import './KreirajTask.style.css'

const KreirajTask = () => {
    const [text, setText] = useState();
    const { tasks, addNewTask } = useTaskStore();

    const handleInput = (event) => {
        setText(event.target.value);
    }

    const handleAddTask = () => {
        if (text !== '') {
            const taskToAdd = {
                id: tasks.length + 1,
                title: text,
                isCompleted: false
            }

            addNewTask(taskToAdd);
            setText('');
        }
    }

    return (
        <div className='createTaskDiv'>
            <p>Koji je tvoj sledeći task?</p>
            <input placeholder="Upiši..." value={text} onChange={handleInput} type='text' />
            <Button buttonText="Sačuvaj" handleClick={handleAddTask} />
        </div>
    )
}

export default KreirajTask