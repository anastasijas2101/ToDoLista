import { useRef, useState } from 'react'
import Button from '../../components/Button/Button'
import { useTaskStore } from '../../stores/Tasks.store'
import './KreirajTask.style.css'
import { Toast } from 'primereact/toast';

const KreirajTask = () => {
    const [text, setText] = useState();
    const { tasks, addNewTask } = useTaskStore();
    const toast = useRef(null);

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
            showSuccess();
        }
    }

    const showSuccess = () => {
        toast.current.show({ life: 3000, severity: 'success', detail: 'Uspješno kreiran task!', closable: false })
    }

    return (
        <>
            <div className='createTaskDiv'>
                <p>Koji je tvoj sledeći task?</p>
                <input placeholder="Upiši..." value={text} onChange={handleInput} type='text' />
                <Button buttonText="Sačuvaj" handleClick={handleAddTask} />
            </div>
            <Toast ref={toast} position='bottom-left' className='toastStyleBox' />
        </>
    )
}

export default KreirajTask