import Button from "@/components/button/button"
import { useRef, useState } from "react"
import style from '../../styles/V3.module.css'

export default function calculator(){

  const sumRef = useRef()
  const [ results, setResults ] = useState(0) 
  
  const calculate = (e) => {
    e.preventDefault()
    const sum = sumRef.current.value
    const calculatedSum = eval(sum)

    setResults(calculatedSum)
    sumRef.current.value = calculatedSum
  }

  const buttons = function(action){
    sumRef.current.value += action
  } 

  return(
    <div>
      <h4 className={style.resultsBox}>{results}</h4>
      <form>
        <input type='text' ref={sumRef} className={style.input}/>

        <input type="submit" onClick={calculate} className={style.submit}/>
      </form>

      <div className={style.buttons}>
        <Button number='C' click={() => {
          sumRef.current.value = ''
        }}/>
        <Button number='del' click={() => {
          sumRef.current.value = 
          sumRef.current.value
            .split('')
            .slice(0, -1)
            .join('')
        }}/>
        <Button number='+'  click={() => buttons('+')}/>
        <Button number='-' click={() => buttons('-')}/>
        <Button number='x' click={() => buttons('*')}/>
        <Button number='/' click={() => buttons('/')}/>
        <Button number='7' click={() => buttons('7')}/>
        <Button number='8' click={() => buttons('8')}/>
        <Button number='9' click={() => buttons('9')}/>
        <Button number='4' click={() => buttons('4')}/>
        <Button number='5' click={() => buttons('5')}/>
        <Button number='6' click={() => buttons('6')}/>
        <Button number='1' click={() => buttons('1')}/>
        <Button number='2' click={() => buttons('2')}/>
        <Button number='3' click={() => buttons('3')}/>
        <Button number='=' click={calculate} />
        <Button number='0' click={() => buttons('0')}/>
        <Button number='.' click={() => buttons('.')}/>
      </div>
    </div>
  )
}