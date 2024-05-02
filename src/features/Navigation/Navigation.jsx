import { Link } from 'react-router-dom'
import './Navigation.style.css'
import SpeakerIcon from '../../components/SpeakerIcon/SpeakerIcon'

const Navigation = () => {
    return (
        <nav>
            <div className='navBarStyle'>
                <SpeakerIcon />
                <div className='navBarLinks'>
                    <Link to={{ pathname: '/' }}>Početna</Link>
                    <Link to={{ pathname: '/kreirajTask' }}>Kreiraj task</Link>
                    <Link to={{ pathname: '/listaTaskova' }}>Lista taskova</Link>
                    <Link to={{ pathname: '/oNama' }}>O nama</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation