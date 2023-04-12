import { useState} from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ToDoItem(props){
    const [done, setDone] = useState(props.done);

    function toggleDone(){
        setDone(!done);
    }

    return(
        <div className='taskItem'>
            
            <ToggleButton
                id="toggleDone"
                type="checkbox"
                checked={done}
                value="1"
                onChange={toggleDone}
                >
            </ToggleButton>
            
            <span>
                {props.name}
            </span>
        </div>
    )
}