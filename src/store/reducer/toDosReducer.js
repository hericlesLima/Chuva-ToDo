import { v4 as uuidv4 } from "uuid";

const initialState = [{ id: 1, task: "Start adding tasks", completed: false }];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "CREATE_TO_DO":
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      
      const createdToDo = [...state, newTodo];
      
      return createdToDo;

    case "EDIT_TO_DO":
      const updateTodo = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updateTask };
        }
      });
     
      return {
        ...state,
      };

    case "DELETE_TO_DO":
      const filterTodo = state.filter(
        (filter) => filter.id !== action.payload.id
      );

      return filterTodo;

    case "COMPLETE_TO_DO":
      const toggleTodos = state.map((toggle) =>
        toggle.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : toggle
      );

      return toggleTodos;

    default:
      return state;
  }
};

export default reducer;
