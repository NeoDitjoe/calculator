import { useRef, useState } from 'react'
import Link from 'next/link'

export default function Home() {
    const num1Ref = useRef()
    const num2Ref = useRef()
    const symbolRef = useRef()
    const [results, setResults] = useState()
  
    function calculate(){
      const num1 = num1Ref.current.value
      const num2 = num2Ref.current.value
      const symbol = symbolRef.current.value
      if(num1.length > 0 && num2.length > 0){
        if(symbol == '*'){
          setResults(parseFloat(num1) * parseFloat(num2))
        }
        if(symbol == '-'){
          setResults(parseFloat(num1) - parseFloat(num2))
        }
        if(symbol == '+'){
          setResults(parseFloat(num1) + parseFloat(num2))
        }
        if(symbol == '/'){
          setResults(parseFloat(num1) / parseFloat(num2))
        }
  
      }else{
        setResults("let's math")
      }
    } 
  
    return (
      <div>
        <h1>Calculator</h1>
  
        <h2>{results}</h2>
        <form onChange={calculate}>
          <input type='number' ref={num1Ref}/>
          <input type='text' ref={symbolRef}/>
          <input type='number' ref={num2Ref}/>
        </form> 
        
      </div>
    )
  }
  