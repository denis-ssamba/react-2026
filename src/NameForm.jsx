import Input from "./Input";

const NameForm = ()=>{
    const courseName = "Advanced Web and App development form";

    return <form action="">

  <Input label="First name" id="firstname" type="text" />
  <Input label="Last name" id="lastname" type="text" />
  <Input type ="submit" id="submit" />
</form> 
}

export default NameForm;    

