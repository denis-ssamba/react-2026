const Button = ({label , type, onClick,onSubmit})=>{

    return <button type={type} onClick={onClick} onSubmit={onSubmit}>
        {label}
    </button>
}

export default Button;