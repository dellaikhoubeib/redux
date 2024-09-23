// src/reducers/taskReducer.js

// Initial state of tasks
const initialState = {
    tasks: [
      { id: 1, description: 'Task 1', isDone: false },
      
    ],
  };
  
  // Reducer function for managing tasks
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, description: action.payload.description } : task
          ),
        };
  
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  