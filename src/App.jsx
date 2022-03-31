import { useEffect, useState } from "react";

//Css
import "./App.css";

//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./pages/home/home";
import AddToDo from "./pages/toDos/addToDo/addToDo";
import ToDoList from "./pages/toDos/toDoList/todoList";
import Board from "./pages/toDos/board/board";
import EditToDo from "./pages/toDos/editTodo/editTodo";
import SplashScreen from "./components/splashScreen/splashScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_new" element={<AddToDo />} />
          <Route path="/to_do_list" element={<ToDoList />} />
          <Route path="/edit_to_do" element={<EditToDo />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
