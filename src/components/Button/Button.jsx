import './Button.style.css'

const Button = ({ buttonText, handleClick }) => {
    return (
        <button className='buttonTextStyle' onClick={handleClick}>
            {buttonText}
        </button>
    )
}

export default Button