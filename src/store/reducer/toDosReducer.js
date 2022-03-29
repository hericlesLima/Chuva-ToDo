const initialState = {
  todos: [{id: 1, todo: "Water the plants", completed: false}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_TO_DO":
        console.log(action.payload)
        return {  
          ...state
        };
  
      case "EDIT_TO_DO":
        console.log(action.payload)
        return {  
          ...state
        };

      case "DELETE_TO_DO":
        console.log(action.payload)
        return {  
          ...state
        };

      case "COMPLETE_TO_DO":
        console.log(action.payload)
        return {  
          ...state
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;