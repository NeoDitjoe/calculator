import Link from "next/link";
import style from './wrapper.module.css'

export default function Wrapper({Children}){

    return(
        <main>
            <nav className={style.nav}>
                <Link href={'/'}></Link>
                <Link href={'/calculatorV1'}>CalculatorV1</Link>
                <Link href={'/calculatorV2'}>CalculatorV2</Link>
                <Link href={'/calculatorV3'}>CalculatorV3</Link>
                <Link href={'/calculatorV4'}>CalculatorV4</Link>
                <Link href={'/whatisTheTime'}>WhatisTheTime</Link>
                <Link href={'/chess'}>Chess</Link> 
                <Link href={'/puzzle'}>Puzzle</Link> 
            </nav>

            {Children}
        </main>
    )
}