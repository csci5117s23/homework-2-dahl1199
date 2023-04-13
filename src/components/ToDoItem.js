import { useState} from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import { updateTodo } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import Link from 'next/link'

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
        await updateTodo(token, userId, name, done, createdOn, id);
    }

    return(
        <div className='taskItem' id={props.todo._id}>
            <Link href={`/todo/${id}`}>
                <ToggleButton
                    id="toggleDone"
                    type="checkbox"
                    checked={done}
                    value="1"
                    onChange={toggleDone}
                    >
                </ToggleButton>
            
                <span>
                    {props.todo.name}
                </span>
            </Link>
        </div>
    )
}