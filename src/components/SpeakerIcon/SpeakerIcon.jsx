import { useNavigate } from 'react-router-dom'
import Speaker from '../../assets/SpeakerIcon.png'
import './SpeakerIcon.style.css'

const SpeakerIcon = () => {
    const router = useNavigate();

    const handleClickIcon = () => {
        router('/');
    }

    return (
        <div className='speaker_icon' onClick={() => handleClickIcon()}>
            <img src={Speaker} alt="speakerIcon" />
        </div>
    )
}

export default SpeakerIcon