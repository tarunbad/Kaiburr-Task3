import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/tasks');
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

// Add other action creators (createTask, deleteTask, etc.) similarly
