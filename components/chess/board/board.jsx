// import style from './board.module.css'
// import Castle from '../castle/castle'
import { useState, Children, useRef } from "react"

// export default function Board(){

// 	const blocks = []
// 	const rows = []

// 	for(let i = 1; i <= 8; i++){
// 		blocks.push(i)
// 	}

// 	for(let i = 1; i <= 4; i++){
// 		rows.push(i)
// 	}

// 	function rowA(){
// 		return(
// 			<div className={style.container}>
// 			{
// 				blocks.map((item, index) => {
// 					return (
// 						<div key={index} className={index % 2 == 0 ? style.blockA : style.blockB}></div>
// 					)
// 				})
// 			}
// 		</div>
// 		)
// 	}

// 	function rowB(){
// 		return(
// 			<div className={style.container}>
// 			{
// 				blocks.map((item, index) => {
// 					return (
// 						<div key={index} className={index % 2 == 0 ? style.blockB : style.blockA}></div>
// 					)
// 				})
// 			}
// 		</div>
// 		)
// 	}

// 	return (
// 		<>
// 		<Castle/>
// 			{rows.map((item) => {
// 				return <div>
// 				{rowA()}
// 				{rowB()}</div>
// 			})}

// 		</>
// 	)
// }

const Board = function(){

	const dragItem = useRef()
	const dragOverItem = useRef()
	
	const [data, setData] = useState([
		{
			fullname: 'Cozy4Real',
			age: 23
		},
		{
			fullname: 'NeoDitjoe',
			age: 23
		}
	])

	function dragStart(e){
		dragItem.current = e.target.id
	}

	function dragEnter(e){
		dragOverItem.current = e.currentTarget.id
	}

	const drop = function(){
		const copyListItems = [...data]
		const dragItemContent = copyListItems[dragItem.current]
		copyListItems.slice(dragOverItem.current, -1)
		copyListItems.slice(dragOverItem, dragItemContent)
		// console.log(copyListItems.slice(dragOverItem, 0, dragItemContent))
		dragItem.current = null
		dragOverItem.current = null
		setData(copyListItems)
	}

	const row = data.map((item) => {
		return(
			<tr 
				id={item.fullname}
				onDragStart={(e) => dragStart(e)}
				onDragEnter={(e) => dragEnter(e)}
				onDragEnd={() => drop()}
				draggable
			>
				<td>{item.fullname} </td>
				<td>{item.age} </td>

			</tr>
		)
	})

	return(
		<>
			<table>
				<tr>
					<thead>
						<tr>
							<th>Name </th>
							<th>age </th>
						</tr>
					</thead>
					<tbody>
						{Children.toArray(row)}
					</tbody>
				</tr>
			</table>
		</>
	)
}

export default Board

// export default function Board(){

// 	return(
// 		<div>
// 			<div id={'1'} className={style.blockA} >{<Castle/>}</div>
// 			<div id={'2'} className={style.blockB} ></div>
// 			<div id={'3'} className={style.blockA} ></div>
// 			<div id={'4'} className={style.blockB} ></div>
// 			<div id={'5'} className={style.blockA} ></div>
// 			<div id={'6'} className={style.blockB} ></div>
// 			<div id={'7'} className={style.blockA} ></div>
// 			<div id={'8'} className={style.blockB} ></div>
// 		</div>
// 	)
// }