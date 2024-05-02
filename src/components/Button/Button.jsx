import './Button.style.css'

const Button = ({ buttonText }) => {
    return (
        <div className='buttonTextStyle'>
            <p>{buttonText}</p>
        </div>
    )
}

export default Button