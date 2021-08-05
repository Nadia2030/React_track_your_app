export const AddTask= (todo) => (dispatch,getState) => {  
    const {
        Todo: {todos},
    } = getState();

    const hasTask= todos.find(i=> i.todo === todo);
    if(!hasTask && todo !==''){
        dispatch({
            type:"ADD_TASK",
            payload: [{id:Date.now()+1, todo:todo, done: false},...todos],
        });
    }
};

export const RemoveTask = (todo) => (dispatch,getState) => {
    const {
        Todo: {todos},
    } = getState();

    dispatch({
        type:"REMOVE_TASK",
        payload: todos.filter((t) => t.id !== todo.id),
    });
};


export const UpdateTask = (todo) => (dispatch,getState) => {
    const {
        Todo: {todos},
    } = getState();
    const index = todos.findIndex(
        (todos) => todos.id === todo.id
    );
    todos[index].done = ! todo.done;
    dispatch({
        type:"UPDATE_TASK",
        payload: todos,
    });
};


