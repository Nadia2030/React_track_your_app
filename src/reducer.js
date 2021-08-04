const initialState ={
    ToDoList :[
       { id:0 , task:"do my workout", completed:false}
    ]
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              id: action.id,
              task: action.text,
              completed: false
            }
          ]
        case 'TOGGLE_TODO':
          return state.map(todo =>
            (todo.id === action.id) 
              ? {...todo, completed: !todo.completed}
              : todo
          )
        default:
          return state
      }
    }