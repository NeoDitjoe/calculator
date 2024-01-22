import { useRef, useState } from "react"


/**
 * In this Version the calculator has one input unlike the V1 where we had
 * to use 3 inputs.
 * 
 * Out of these 3 inputs 
 * 1 kept the first intiger
 * 2 kept the second intiger
 * 3 had the symbol that will be used to calculate e.g "+, -, etc"
 * 
 * In V2 all is done in one input 
 * you type what you want to calculate and how then wahla
 */
export default function V2(){

  const [ results, setResults ] = useState()
  const sumRef = useRef()

  function calculate(){
    const sum = sumRef.current.value
    const splitSum = sum.split('')

    if(splitSum.includes('+')){
      setResults(parseFloat(sum.split('+')[0]) + (parseFloat(sum.split('+')[1]) || 0))

    }else if(splitSum.includes('-')){
      setResults(parseFloat(sum.split('-')[0]) - (parseFloat(sum.split('-')[1]) || 0))

    }else if(splitSum.includes('*')){
      setResults(parseFloat(sum.split('*')[0]) * (parseFloat(sum.split('*')[1]) || 0))

    }else if(splitSum.includes('/')){
      setResults(parseFloat(sum.split('/')[0]) / (parseFloat(sum.split('/')[1]) || 0))

    }else(
      setResults(sum)
    )

    console.log('23')
  }

  return(
    <div>
      <h2>Calculator V2</h2>

      <h4>{results}</h4>

      <form onChange={calculate}>
        <input type="text" ref={sumRef} />
      </form>
    </div>
  )
}