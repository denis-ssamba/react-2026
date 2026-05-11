import React from "react"

const Course = (data)=>{
const {course, credit , name , marks} = data

  let comment ="";

  if( marks <= 40){
comment = "Failed"
  }else if(marks > 40 && marks <= 60){
    comment = "Passed"
  }else if(marks > 60 && marks <= 80){
    comment = "Distinction"
  }else if(marks > 80 && marks <=100){
    comment = "Excellence"
  }else{
    comment = "<h1>Invalid marks</h1>"
  }
return <>
{
    marks >=50 ? 
       
    <><h3>
    course Name: {course}
</h3>
<h2> credit unit: {credit}  </h2>
<h2>Name : {name}</h2>
<h2>Marks : {marks}</h2>
<h4>Comment : {comment}</h4></>

:
<>
<h4>Comment : {comment}</h4>
<h3> Failed </h3>
</>
}

</>

}


/*const CreditUnit = ()=>{
    return <p> Credit unit: 3</p>
}*/


export default Course