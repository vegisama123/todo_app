import react,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const changeHandler = e =>{
    setTask(e.target.value)

  }
  const submitHandler = e =>{
   e.preventDefault();
    if(task==="")
    {
      alert("blanks not allowed")
      return;
    }
    const newTodos=[...todos,task]; //Ekkada old array value + new array value add avuthunai ante already unna values tho add avuthunai
    setTodos(newTodos); // kotha array values ni manam ekkada assign chesukuntunam task update avuthundhi ekkada
    setTask(""); // ekkada manam input lo values echi add ni click cheyagane malli blank ga maripothad input box
  }

  const deleteHandler = (indexValue) =>{
    const newTodos=todos.filter((todos,index)=> index !== indexValue)
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <center>
          <h5>Todo Management Application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" name='text' value={task} onChange={changeHandler}/><br/>
            <input type="submit" value="Add" name='Add'/>
          </form>
          <TodoList todoList={todos} deleteHandler={deleteHandler}/>
      </center>
    </div>
  );
}

export default App;
