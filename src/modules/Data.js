const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

//get all todo items for this user
export async function getTodoItems(authToken) {
  const result = await fetch(backend_base + "/todos", {
    'method':'GET',
    'headers': {'Authorization':'Bearer ' + authToken,}
  })
  return await result.json();
}

//get all done todo items for this user
export async function getDoneTodoItems(authToken, userId) {
    const result = await fetch(backend_base + "/todos", {
      'method':'GET',
      'headers': {'Authorization':'Bearer ' + authToken,}
    })
    return await result.json();
  }

  //get all undone todo items for this user
export async function getUndoneTodoItems(authToken, userId) {
    const result = await fetch(backend_base + "/todos", {
      'method':'GET',
      'headers': {'Authorization':'Bearer ' + authToken,}
    })
    return await result.json();
  }

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