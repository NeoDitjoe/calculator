import { useRef } from 'react'
import style from './castle.module.css'

export default function Castle(){

    const dragItem = useRef()

    function dragStart(e){
		dragItem.current = e.target.id
        console.log(e)
	}

    return(
        <div>
            <div id={'out1'}></div>
            <div id={'out2'}></div>
            <div id={'out3'}></div>
            <div id={'out4'}>        
            
                <div id={'In'} className={style.castle}
                    onDragStart={(e) => dragStart(e)}
                    draggable
                >
                </div>
            </div>
        </div>
    )
}