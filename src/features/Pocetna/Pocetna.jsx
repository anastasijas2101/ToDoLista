import Button from "../../components/Button/Button"
import './Pocetna.css'

const Pocetna = () => {
    return (
        <div className="divStyle">
            <div>
                <p>Šta planiraš danas?</p>
                <p>Kreiraj svoj novi task!</p>
            </div>
            <Button buttonText='Kreiraj' />
        </div>
    )
}

export default Pocetna