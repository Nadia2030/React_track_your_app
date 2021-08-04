import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {}
  }
  handleChange=(event)=> {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    this.setState({
      ...this.state.ToDoList,[fieldName]:fieldValue
    })
  }
 
  render() {
    let taskList= this.props.ToDoList.map(obj=><li>{obj.task}</li>);

    return (
      <div>
        <div id="myDIV" class="header">
          <h2>Track Your Task</h2>
          <input type="text" name="task" placeholder="Title..." onChange={this.handleChange}/>
          <span onClick={()=>this.props.AddTask(this.state)} class="addBtn">Add</span>
        </div>
          <ul id="myUL">
          {taskList}
            <li>Hit the gym</li>
            <li class="checked">Pay bills</li>
            <li>Meet George</li>
            <li>Buy food</li>
            <li>Read a book</li>
            <li>Organize office</li>
          </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ToDoList: state.ToDoList
  }
}

export default connect(mapStateToProps)(App);