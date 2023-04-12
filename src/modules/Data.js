const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

//get all todo items for this user
export async function getTodoItems(authToken, userId) {
  const result = await fetch(backend_base + "/todos?userId=" + userId, {
    'method':'GET',
    'headers': {'Authorization':'Bearer ' + authToken,}
  })
  return await result.json();
}

//get all done todo items for this user
export async function getDoneTodoItems(authToken, userId) {
    const result = await fetch(backend_base + "/todos?userId=" + userId + "&done=true", {
      'method':'GET',
      'headers': {'Authorization':'Bearer ' + authToken,}
    })
    if (result.ok) {
        const todos = await result.json();
        todos.sort(dateCompare);
        return todos;
    } else {
        return null;
    }
    
  }

  //get all undone todo items for this user
export async function getUndoneTodoItems(authToken, userId) {
    const result = await fetch(backend_base + "/todos?userId=" + userId + "&done=false", {
      'method':'GET',
      'headers': {'Authorization':'Bearer ' + authToken,}
    })
    return await result.json();
  }

  // add a new todo item
export async function addTodoItem(authToken, userId, name, done, createdOn) {
    const result = await fetch(backend_base+"/todos",{
        'method':'POST',
        'headers': {'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({userId,
            name,
            done,
            createdOn})
    })
    return await result.json();
}

//This function is a comparison function to be used for json sorting, the following sites were used as reference/example
//https://www.coderstool.com/json-sort
//https://stackabuse.com/compare-two-dates-in-javascript/
function dateCompare(a,b){
    const dateA = new Date(a);
    const dateB = new Date(b);
    if(dateA > dateB){
        return 1;
    }
    if(dateB > dateA){
        return -1;
    } 
    return 0;
}