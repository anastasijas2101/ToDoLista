import { useTaskStore } from '../../stores/Tasks.store'
import './ListaTaskova.style.css'

const ListaTaskova = () => {

    const { tasks, deleteTask } = useTaskStore();

    return (
        <div className='taskList'>
            <div className='labelStyle'>
                <div className='titleBoxStyle'>
                    <h1>Gotovi taskovi!</h1>
                    <h2>Nastavi tako!</h2>
                </div>
                <span>0/{tasks.length}</span>
            </div>
            <div className='taskListBox'>
                {tasks.map((task) => (
                    <div className="taskStyle">
                        <span className='spanTaskBox' />
                        <p key={task.id}>{task.title}</p>
                        <span>
                            <img src="https://static.thenounproject.com/png/2545517-200.png" />
                            <img src="https://static.vecteezy.com/system/resources/previews/010/366/194/original/bin-icon-transparent-bin-clipart-free-png.png" onClick={() => deleteTask(task.id)} />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaTaskova