const Input = ({label , type , id , name ,className })=>{

    return <>      
   {label && <label htmlFor={id}>{label}</label>}
  <input type ={type} id={id} name={name} className={className} /><br/>
</> 
}

export default Input;    

