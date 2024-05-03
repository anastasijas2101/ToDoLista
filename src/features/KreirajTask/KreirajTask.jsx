import Button from '../../components/Button/Button'
import './KreirajTask.style.css'

const KreirajTask = () => {
    return (
        <div className='createTaskDiv'>
            <p>Koji je tvoj sledeći task?</p>
            <input placeholder="Upiši..." />
            <Button buttonText="Sačuvaj" />
        </div>
    )
}

export default KreirajTask