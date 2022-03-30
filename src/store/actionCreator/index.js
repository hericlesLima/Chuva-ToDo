export const createToDo = (todo) => {
    console.log(todo)
    return (dispatch) => {
      dispatch({
        type: "CREATE_TO_DO",
        payload: todo,
      });
    };
  };
  
  export const editToDo = (todo) => {
    console.log(todo)
    return (dispatch) => {
      dispatch({
        type: "EDIT_TO_DO",
        payload: todo,
      });
    };
  };

  export const deleteToDo = (todo) => {
    console.log(todo)
    return (dispatch) => {
      dispatch({
        type: "DELETE_TO_DO",
        payload: todo,
      });
    };
  };

  export const completeToDo = (todo) => {
    // console.log(todo)
    return (dispatch) => {
      dispatch({
        type: "COMPLETE_TO_DO",
        payload: todo,
      });
    };
  };
  