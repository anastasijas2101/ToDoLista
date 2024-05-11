import { Link } from 'react-router-dom'
import './Navigation.style.css'
import SpeakerIcon from '../../components/SpeakerIcon/SpeakerIcon'
import { useTaskStore } from '../../stores/Tasks.store'

const Navigation = () => {
    const { tasks } = useTaskStore();

    return (
        <nav>
            <div className='navBarStyle'>
                <SpeakerIcon />
                <div className='navBarLinks'>
                    <Link to={{ pathname: '/' }}>Početna</Link>
                    <Link to={{ pathname: '/kreirajTask' }}>Kreiraj task</Link>
                    <div className='spanStyle'>
                        <span>{tasks.length}</span>
                        <Link to={{ pathname: '/listaTaskova' }}>Lista taskova</Link>
                    </div>
                    <Link to={{ pathname: '/oNama' }}>O nama</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation