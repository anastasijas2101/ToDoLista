import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import './Pocetna.css'

const Pocetna = () => {

    const navigate = useNavigate();

    const handleClickToKreiraj = () => {
        navigate('/kreirajTask')
    }

    return (
        <div className="divStyle">
            <div>
                <p>Šta planiraš danas?</p>
                <p>Kreiraj svoj novi task!</p>
            </div>
            <Button buttonText='Kreiraj' handleClick={handleClickToKreiraj} />
        </div>
    )
}

export default Pocetna