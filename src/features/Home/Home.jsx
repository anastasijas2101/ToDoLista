import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import './Home.css'

const Home = () => {

    const navigate = useNavigate();

    const handleClickToCreate = () => {
        navigate('/createTask')
    }

    return (
        <div className="divStyle">
            <div>
                <p>Šta planiraš danas?</p>
                <p>Kreiraj svoj novi task!</p>
            </div>
            <Button buttonText='Kreiraj' handleClick={handleClickToCreate} />
        </div>
    )
}

export default Home