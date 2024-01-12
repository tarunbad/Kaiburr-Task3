const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TASKS':
        return action.payload;
      // Add other cases (CREATE_TASK, DELETE_TASK, etc.) similarly
      default:
        return state;
    }
  };
  
  export default taskReducer;
  