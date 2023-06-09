import { useState} from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import { updateTodo } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import Link from 'next/link'
import filledCheck from '../../public/filled-check-purple.svg'
import emptyCheck from '../../public/empty-check-purple.svg'

import Image from 'next/image'

export default function ToDoItem(props){
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [done, setDone] = useState(props.todo.done);
    const name = props.todo.name;
    const id = props.todo._id;
    const createdOn = props.todo.createdOn;
    


    function toggleDone(){
        setDone(!done);
        updateDone();
    }

    async function updateDone(){
        const token = await getToken({ template: "codehooks" });
        await updateTodo(token, userId, name, !done, createdOn, id);
    }

    if(done){
        return(
        
            <div className='todoItem-container todo-container-done' id={`todoItem-container-${props.todo._id}`}>
                <ToggleButton
                    className="todoItem-toggle"
                    id={`todoItem-toggle-${props.todo._id}`}
                    type="checkbox"
                    checked={done}
                    value="1"
                    onChange={toggleDone}
                    >
                    <Image id={`todoItem-check-${props.todo._id}`} src={filledCheck}/>
                </ToggleButton>
                <Link className="todoItem-link" id={`todoItem-link-${props.todo._id}`} href={`/todo/${id}`}>
                    <div className="todoItem-name todo-done" id={`todoItem-name-${props.todo._id}`}>
                        {props.todo.name}
                    </div>
                </Link>
            </div>
            
        )
    } else{

        return(
        
            <div className='todoItem-container' id={`todoItem-container-${props.todo._id}`}>
                <ToggleButton
                    className="todoItem-toggle"
                    id={`todoItem-toggle-${props.todo._id}`}
                    type="checkbox"
                    checked={done}
                    value="1"
                    onChange={toggleDone}
                    >
                    <Image id={`todoItem-check-${props.todo._id}`} src={emptyCheck}/>
                </ToggleButton>
                <Link className="todoItem-link" id={`todoItem-link-${props.todo._id}`} href={`/todo/${id}`}>
                    <div className="todoItem-name" id={`todoItem-name-${props.todo._id}`}>
                        {props.todo.name}
                    </div>
                </Link>
            </div>
            
        )
}
}