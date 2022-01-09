import {useState} from 'react'

export default function useCounter(intialval) {

    const [counter,setCounter] = useState(intialval);

  const increment = () =>{
    return setCounter(counter+1); 
  }

  const decrement = () =>{
    return setCounter(counter-1); 
  }

  const reset = () =>{
    return setCounter(intialval); 
  }


    return [counter,increment,decrement,reset]
}
