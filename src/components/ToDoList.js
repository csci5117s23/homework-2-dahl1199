import { useState, useEffect } from "react"
import ToDoItem from './ToDoItem'
import { useAuth } from "@clerk/nextjs";
import { getUndoneTodoItems, getDoneTodoItems, addTodoItem } from "@/modules/Data";

export default function ToDoList(props){
    const items = [
        {id:1, name:"stuff", done:false},
        {id:2, name:"isabel", done:false},
        {id:3, name:"applies", done:false},
        {id:4, name:"kneecaps", done:true},
        {id:5, name:"orange juice", done:false},
    ]
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [newName, setNewName] = useState("");

    useEffect(() => {
      async function process() {
        if (userId) {
          const token = await getToken({ template: "codehooks" });
          if(props.done){
            //only get done todo items
            setTodos(await getDoneTodoItems(token, userId));
            setLoading(false);
          } else {
            //only get undone todo items
            setTodos(await getUndoneTodoItems(token, userId));
            setLoading(false);
          }
          
          setLoading(false);
        }
      }
      process();
    }, [isLoaded]);

    async function add() {
        const token = await getToken({ template: "codehooks" });
        const done = false;
        const createdOn = new Date()
        const newTodo = await addTodoItem(token, userId, newName, done, createdOn);
        setNewName("");
        setTodos([newTodo].concat(todos));
    }


    if (loading) {
    return <span> loading... </span>;
    } else {
    const todoListItems = todos.map((element) => {
        return <li>
            <ToDoItem todo={element}/>
            {/* <ToDoItem key={element.id} id={element.id} name={element.name} done={element.done}/> */}
        </li>
    });
        //done page, no add new task input
        if(props.done){
            return (
                <>
                <ol>
                    {todoListItems}
                </ol>
                </>
            );
        //todo page, include add new task input
        } else {
            return (
                <>
                <ol>
                    <input
                    placeholder="add a todo"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                    ></input>
                    <button onClick={add}>add</button>
                    {todoListItems}
                </ol>
                </>
            );
        }
    }

    // return(
    //     <ul>
    //         {items.map((element) => {
    //             if(element.done == props.done)
    //             return <li>
    //                 <ToDoItem key={element.id} id={element.id} name={element.name} done={element.done}/>
    //             </li>
    //         })}
    //     </ul>
    // )
}