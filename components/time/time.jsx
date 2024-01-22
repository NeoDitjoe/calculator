import style from './time.module.css'
import { useDebugValue, useEffect, useState } from "react"

// export default function Clock(){

//     const digits = 13
//     let digitsArr1 = []
//     let digitsArr2 = []

//     for(let i = 1; i < digits; i++){
//        if(i > 6){
//         digitsArr1.push(i)
//        }else{
//         digitsArr2.push(i)
//        }
//     }

//     let dot = 1

//     return(
//         // <div className={style.clock}>
//         //     <p>2</p>
//         // </div>
//         <div className={style.clock}>
//             <ul>
//                 {digitsArr1.reverse().map((num, index) => {
//                     let openSpace = ''

//                     if(index < 4){
//                         for(let i = 0; i < index; i++){
//                             openSpace += `=`
//                         }
//                     }
//                     const y = openSpace.split('').slice(0, -1)
//                     console.log(y)
//                     return (
//                         <div>
//                             <li className={style.ul}>{num}{openSpace}</li><br/>
//                         </div>
//                     )
//                 })}
//             </ul>
//             <ul>
//                 {digitsArr2.map((num) => {
//                     return (
//                         <li className={style.ul}>{num}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

export default function WhatisTheTime(){

  const [ updateMilliSec, setUpdateMilliSec ] = useState()

  const time = new Date()
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const milliseconds = time.getMilliseconds()

  setTimeout(() => {
    setUpdateMilliSec( milliseconds.toString().split('').splice(0, 2).join(''))
  }, 100);

  return(
    <div className={style.digital}>

      <p>
        <span className={style.hour}>{hour.toString().padStart(2, 0)}</span>
        <span className={style.minutes}>:{minutes.toString().padStart(2, 0) }</span>
        <span className={style.seconds}>:{seconds.toString().padStart(2, 0)}
        </span>
        <span className={style.millisec}>:{updateMilliSec}</span>
      </p>
    </div>
  )
}