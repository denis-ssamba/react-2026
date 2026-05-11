const Input = ({label , type , id , name ,className ,handleChange,value})=>{

    return <>      
   {label && <label htmlFor={id}>{label}</label>}
  <input 
  type ={type} 
  id={id} name={name} 
  className={className} 
  onChange={handleChange}  
  style={{margin:'10px'}}
  value={value}
  />
  <br/>
</> 
}

export default Input;    

