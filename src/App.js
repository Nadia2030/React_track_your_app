import {useDispatch, useSelector} from "react-redux";
import {AddTask,RemoveTask, UpdateTask } from './actions/TaskActions';
import { useState } from "react";
import "./style/style.css"; 
import {Helmet} from "react-helmet";

function App() {
  const [todo, setTask] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state)=> state.Todo);
  const { todos } = Todo;


  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTask(todo));

  };

  const handelChange = (t) => {
    dispatch(UpdateTask(t));

  };
  const removeHandler = (t) => {
    dispatch(RemoveTask(t));
  };


    return (
      <div>
      <Helmet> 
        <script src="https://use.typekit.net/foobar.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css" /> 
      </Helmet>
     
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
              <div class="col-md-12">
                  <div class="card px-3">
                      <div class="card-body"> 
                        <h4 class="card-title">Track Your Task</h4>
                        <form onSubmit={handelSubmit}> 
                          <div class="add-items d-flex">
                            <input class="form-control todo-list-input" placeholder="Add your task" 
                            onChange={(e) => setTask(e.target.value)}/>
                            <button type="submit" class="add btn btn-primary font-weight-bold todo-list-add-btn">Add Task</button>
                          </div>
                        </form>
                      <div class="list-wrapper">
                        <ul class="d-flex flex-column-reverse todo-list">
                          {
                            todos && todos.map((t)=> (
                              <li key= {t.id}>
                                    <div class="form-check">
                                      <label class="form-check-label"> 
                                      <input class="checkbox" type="checkbox" checked ={t.done}  onChange={() => handelChange(t)}/>  
                                      {t.todo} 
                                      <i class="input-helper"></i>
                                     </label>
                                    </div> 
                                <i class="remove mdi mdi-close-circle-outline" onClick={() => removeHandler(t)}>
                                  
                                </i>
                              </li>
                            ))
                          } 
                        </ul>
                      </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
 
export default App;