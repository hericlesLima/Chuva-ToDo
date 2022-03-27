import "./App.css";

//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./pages/home/home";
import AddToDo from "./pages/toDos/addToDo";
import ToDoList from "./pages/toDos/toDoList";
import Board from "./pages/toDos/board";
import Contacts from "./pages/contacts/contacts";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_new" element={<AddToDo />} />
          <Route path="/to_do_list" element={<ToDoList />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
