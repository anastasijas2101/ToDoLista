import './AboutMe.style.css'
import myPic from '../../assets/MyPic.jpg'

const AboutMe = () => {
    return (
        <div className='aboutDivStyle'>
            <img src={myPic} alt='MyPic' />
            <h1>Simeunović Anastasija</h1>
            <p>Korištene tehnologije: React JS, JavaScript, Zustand, Material UI, PrimeReact</p>
            <p>ToDoList je vrsta CRUD aplikacije, u sklopu koje je moguće dodavati, brisati i uređivati taskove. Ova aplikacija
                koristi
            </p>
        </div>
    )
}

export default AboutMe