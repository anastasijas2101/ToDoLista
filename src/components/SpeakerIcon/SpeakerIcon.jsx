import { useNavigate } from 'react-router-dom'
import './SpeakerIcon.style.css'

const SpeakerIcon = () => {
    const router = useNavigate();

    const handleClickIcon = () => {
        router('/');
    }

    return (
        <div className='speaker_icon' onClick={() => handleClickIcon()}>
            <img src='https://static.vecteezy.com/system/resources/previews/008/822/259/original/3d-megaphone-object-with-transparent-background-png.png' alt="speakerIcon" />
        </div>
    )
}

export default SpeakerIcon