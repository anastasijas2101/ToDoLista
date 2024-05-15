import { useNavigate } from 'react-router-dom'
import './SpeakerIcon.style.css'
import speaker from '../../assets/SpeakerIcon.png'

const SpeakerIcon = () => {
    const router = useNavigate();

    const handleClickIcon = () => {
        router('/');
    }

    return (
        <div className='speaker_icon' onClick={() => handleClickIcon()}>
            <img src={speaker} alt="speakerIcon" />
        </div>
    )
}

export default SpeakerIcon