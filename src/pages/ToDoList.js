import { useState } from "react"
import ToDoItem from './ToDoItem'

export default function ToDoList(props){
    const items = [
        {id:1, name:"stuff", done:false},
        {id:2, name:"isabel", done:false},
        {id:3, name:"applies", done:false},
        {id:4, name:"kneecaps", done:true},
        {id:5, name:"orange juice", done:false},
    ]

    return(
        <ul>
            {items.map((element) => {
                if(element.done == props.done)
                return <li>
                    <ToDoItem key={element.id} id={element.id} name={element.name} done={element.done}/>
                </li>
            })}
        </ul>
    )
}