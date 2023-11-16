import './Button.scss';

function Button({ children, id}) {

    return (
        <button className='btn' id={id}>{children}</button>
    )
}

export default Button;