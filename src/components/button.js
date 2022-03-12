import propTypes from 'prop-types'

const Button = ({text,click,color}) => {
    return (
        <button  onClick={click} style={{backgroundColor:color}} onClick={click} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    text:"click",
    btnClass:"btn-green"
}

Button.propTypes = {
    text: propTypes.string,
    btnClass: propTypes.string
}



export default Button
