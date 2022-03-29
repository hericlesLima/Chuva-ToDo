import "./App.css";

//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./pages/home/home";
import AddToDo from "./pages/todos/addToDo/addToDo";
import ToDoList from "./pages/todos/toDoList/toDoList";
import Board from "./pages/todos/board/board";
import Contacts from "./pages/contacts/contacts";
import PageHeader from "./components/header/pageHeader";
import { useSelector } from "react-redux";

export default function App() {
  const state = useSelector((state) => ({ ...state }));
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
