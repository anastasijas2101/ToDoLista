import { useTaskStore } from '../../stores/Tasks.store'
import './ListaTaskova.style.css'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DialogBox from '../../components/DialogBox/DialogBox';

const ListaTaskova = () => {

    const { tasks, deleteTask, markDone, setDialog, dialog } = useTaskStore();
    const router = useNavigate();

    const handleNavigate = () => {
        router('/kreirajTask');
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
                                <span className={task.isCompleted ? 'onClickSpan' : 'spanTaskBox'} onClick={() => markDone(task.id)} />
                                <p key={task.id}>{task.title}</p>
                                <span>
                                    <img onClick={() => setDialog(true, task)} src="https://static.thenounproject.com/png/2545517-200.png" />
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/366/194/original/bin-icon-transparent-bin-clipart-free-png.png" onClick={() => deleteTask(task.id)} />
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

export default ListaTaskova