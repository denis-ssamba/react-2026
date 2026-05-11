import {useState} from 'react';

const State = ()=>{
    //let number = 0;

    const [number, setNumber] = useState("AYesha");
    //const [name,setName]= useState(["Mark","John","Jane"])

    const handleBtnClick = ()=>{

        setNumber((prev)=> prev + 1)
    }

    const handleBtnMinus = ()=>{
        setNumber((prev)=> prev - 1)

    }
    

    return <>

    <button onClick ={handleBtnClick}> +</button><br/>
    <button onClick ={handleBtnMinus }> -</button>
    
    <h5>{number}</h5>
    </>


}

export default State;