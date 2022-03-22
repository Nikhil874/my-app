import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import {Routes,Route} from "react-router-dom"
import { TodoDetail } from './Components/tododetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo/>}></Route>
        <Route path='/todo/:id' element={<TodoDetail/>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
