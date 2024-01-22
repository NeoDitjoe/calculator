import style from './button.module.css'

export default function Button({number, click}){

    return(
        <button onClick={click} className={style.button} >{number}</button>
    )
}

export function GrayButton({number, click}){

    return(
        <button onClick={click} className={style.grayButton} >{number}</button>
    )
}

export function BlueButton({number, click}){

    return(
        <button onClick={click} className={style.blueButton} >{number}</button>
    )
}