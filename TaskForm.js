import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../actions/taskActions';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleCreateTask = () => {
    dispatch(createTask({ name: taskName }));
    setTaskName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default TaskForm;
