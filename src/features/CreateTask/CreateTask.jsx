import { useRef, useState } from 'react'
import Button from '../../components/Button/Button'
import { useTaskStore } from '../../stores/Tasks.store'
import './CreateTask.style.css'
import { useNotificationStore } from '../../stores/Notification.store'

const CreateTask = () => {
    const [text, setText] = useState();
    const { tasks, addNewTask } = useTaskStore();
    const setNotification = useNotificationStore(state => state.setNotification);

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
            setNotification(true, 'Task uspješno kreiran', 'success')
        }
    }

    return (
        <>
            <div className='createTaskDiv'>
                <p>Koji je tvoj sledeći task?</p>
                <input placeholder="Upiši..." value={text} onChange={handleInput} type='text' />
                <Button buttonText="Sačuvaj" handleClick={handleAddTask} />
            </div>
        </>
    )
}

export default CreateTask