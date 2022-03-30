import "./App.css";

//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./pages/home/home";
import AddToDo from "./pages/todos/addToDo/addToDo";
import ToDoList from "./pages/todos/toDoList/toDoList";
import Board from "./pages/todos/board/board";
import Contacts from "./pages/contacts/contacts";
import EditToDo from "./pages/todos/editTodo/editToDo";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_new" element={<AddToDo />} />
          <Route path="/to_do_list" element={<ToDoList />} />
          <Route path="/edit_to_do" element={<EditToDo />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
