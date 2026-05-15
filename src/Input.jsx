const Input = ({label , type , id , name ,className ,handleChange,value,placeholder})=>{

    return <>      
   {label && <label htmlFor={id}>{label}</label>}
  <input 
  type ={type} 
  id={id} name={name} 
  className={className} 
  onChange={handleChange}  
  style={{margin:'10px'}}
  value={value}
  placeholder={placeholder}
  />
  <br/>
</> 
}

export default Input;    

