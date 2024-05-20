import { useTaskStore } from '../../stores/Tasks.store'
import './TasksList.style.css'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DialogBox from '../../components/DialogBox/DialogBox';
import { useNotificationStore } from '../../stores/Notification.store';

const TasksList = () => {

    const { tasks, deleteTask, markDone, setDialog, dialog } = useTaskStore();
    const router = useNavigate();
    const setNotification = useNotificationStore(state => state.setNotification);

    const handleNavigate = () => {
        router('/createTask');
    }

    const handleCompletedTask = (task) => {
        markDone(task.id);
        if (task.isCompleted) {
            setNotification(true, "Task je označen kao nezavršen!", 'warning');
            return;
        } else {
            setNotification(true, 'Task je uspješno završen!', 'success')
        }
    }

    const handleDelete = (id) => {
        setNotification(true, 'Task uspješno obrisan!', 'info');
        deleteTask(id);
    }
    const doneTask = tasks.filter((task) => task.isCompleted).length;

    return (
        <div className='taskList'>
            {tasks.length ? (
                <>
                    <div className='labelStyle'>
                        <div className='titleBoxStyle'>
                            <h1>Gotovi taskovi!</h1>
                            <h2>Nastavi tako!</h2>
                        </div>
                        <span>{doneTask}/{tasks.length}</span>
                    </div>
                    <div className='taskListBox'>
                        {tasks.map((task) => (
                            <div className='taskStyle'>
                                <span className={task.isCompleted ? 'onClickSpan' : 'spanTaskBox'} onClick={() => handleCompletedTask(task)} />
                                <p key={task.id}>{task.title}</p>
                                <span>
                                    <img onClick={() => setDialog(true, task)} src="https://static.thenounproject.com/png/2545517-200.png" />
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/366/194/original/bin-icon-transparent-bin-clipart-free-png.png" onClick={() => handleDelete(task.id)} />
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='noTasksStyle'>
                    <p>Nemas taskove?</p>
                    <Button buttonText='Kreiraj task' handleClick={handleNavigate} />
                </div>
            )}
            {dialog.isOpen && <DialogBox />}
        </div>
    )
}

export default TasksList