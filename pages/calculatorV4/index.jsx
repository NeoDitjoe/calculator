import Button, { BlueButton, GrayButton } from "@/components/button/button"
import { useRef, useState } from "react"
import style from '../../styles/V4.module.css'

export default function calculator(){

  const sumRef = useRef()
  const [ results, setResults ] = useState('') 
  const [ symbol, setSymbol ] = useState('')
  const [ calculateSum, setCalculateSum ] = useState('')
  
  const calculate = (e) => {
    e.preventDefault()
    const sum = sumRef.current.value
    // const calculatedSum = eval(sum)

    // setResults(calculatedSum)
    // sumRef.current.value = calculatedSum

    //V4
    setCalculateSum(results + sum + ' = ' )
    setResults('')
    sumRef.current.value = eval(results + sum)
  }

  const buttons = function(action){    
    if(calculateSum !== ''){
      sumRef.current.value = action
      setCalculateSum('')
    }else{
      sumRef.current.value += action
    }
  } 

  //V4
  function buttonsV4(action){
      if(results !== '' && sumRef.current.value == ''){
        setResults(results.slice(0, -1) + action)
      }else{
        if(results !== '' && sumRef.current.value !== ''){
          setResults(eval(results + sumRef.current.value) + action)
        } else{
          setResults(sumRef.current.value + action)
        }
      }
  
      sumRef.current.value = ''
      setSymbol(action)
  }
  
  return(
    <div className={style.main}>
      <p className={style.resultsBox}>{calculateSum.split('').join(' ')}{results.split('').join(' ')}</p>
      <form>
        <input type='text' ref={sumRef} className={style.input}/>

        <input type="submit" onClick={calculate} className={style.submit}/>
      </form>

      <div className={style.buttons}>
        <GrayButton number='C' click={() => {
          sumRef.current.value = ''
          setResults('')
          setCalculateSum('')
        }}/>
        <GrayButton number='del' click={() => {
          sumRef.current.value = 
          sumRef.current.value
            .split('')
            .slice(0, -1)
            .join('')
        }}/>

        <GrayButton number='+'  click={() => buttonsV4('+')}/>
        <GrayButton number='-' click={() => buttonsV4('-')}/>
        <GrayButton number='x' click={() => buttonsV4('*')}/>
        <GrayButton number='/' click={() => buttonsV4('/')}/>
        <Button number='7' click={() => buttons('7')}/>
        <Button number='8' click={() => buttons('8')}/>
        <Button number='9' click={() => buttons('9')}/>
        <Button number='4' click={() => buttons('4')}/>
        <Button number='5' click={() => buttons('5')}/>
        <Button number='6' click={() => buttons('6')}/>
        <Button number='1' click={() => buttons('1')}/>
        <Button number='2' click={() => buttons('2')}/>
        <Button number='3' click={() => buttons('3')}/>
        <BlueButton number='=' click={calculate} />
        <Button number='0' click={() => buttons('0')}/>
        <GrayButton number='.' click={() => buttons('.')}/>
      </div>
    </div>
  )
}

// import Button from "@/components/button/button"
// import { useEffect, useRef, useState } from "react"
// import style from '../../styles/V3.module.css'

// export default function calculator(){

//   const sumRef = useRef()
//   const [ results, setResults ] = useState('') 
//   const [ check, setCheck] = useState(false)
  
//   const calculate = (e) => {
//     e.preventDefault()
//     const sum = sumRef.current.value
//     const calculatedSum = eval(sum)

//     setResults(calculatedSum)
//     sumRef.current.value = calculatedSum
//   }

//   const buttons = function(action){
//     sumRef.current.value += action

//     if(check){
//       sumRef.current.value = ''
//       setTimeout(() => {
//         sumRef.current.value = action
//         setResults(eval(results + sumRef.current.value))
//         setCheck(false)
//       }, 10);
//     }

//     if(results != '' || results.split('').includes('+')){
//       sumRef.current.value = results + sumRef.current.value
//       console.log('checked' + results)
//     }
//   }

//   //V4
//   const buttonsV4 = function(action){
//     setResults(sumRef.current.value + action)
//     sumRef.current.value = eval(results + sumRef.current.value)
//   } 

//   useEffect(() => {
//     if(results.toString().at(-1) === '+'){
//       setCheck(true)
//     }
//   })

//   return(
//     <div style={{background: 'rgb(223, 223, 223)', width: '280px'}}>
//       <h4 className={style.resultsBox}>{results}</h4>
//       <form>
//         <input type='text' ref={sumRef} className={style.input}/>

//         <input type="submit" onClick={calculate} className={style.submit}/>
//       </form>

//       <div className={style.buttons}>
//         <Button number='C' click={() => {
//           sumRef.current.value = ''
//           setResults('')
//         }}/>
//         <Button number='del' click={() => {
//           sumRef.current.value = 
//           sumRef.current.value
//             .split('')
//             .slice(0, -1)
//             .join('')
//         }}/>
//         <Button number='+'  click={() => buttonsV4('+')}/>
//         <Button number='-' click={() => buttons('-')}/>
//         <Button number='x' click={() => buttons('*')}/>
//         <Button number='/' click={() => buttons('/')}/>
//         <Button number='7' click={() => buttons('7')}/>
//         <Button number='8' click={() => buttons('8')}/>
//         <Button number='9' click={() => buttons('9')}/>
//         <Button number='4' click={() => buttons('4')}/>
//         <Button number='5' click={() => buttons('5')}/>
//         <Button number='6' click={() => buttons('6')}/>
//         <Button number='1' click={() => buttons('1')}/>
//         <Button number='2' click={() => buttons('2')}/>
//         <Button number='3' click={() => buttons('3')}/>
//         <Button number='=' click={calculate} />
//         <Button number='0' click={() => buttons('0')}/>
//         <Button number='.' click={() => buttons('.')}/>
//       </div>
//     </div>
//   )
// }