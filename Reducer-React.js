// To reduce this complexity and keep all your logic in one easy-to-access place, 
// you can move that state logic into a single function outside your component, called a “reducer”.

// can migrate from useState to useReducer in three steps:

// Move from setting state to dispatching actions.
// Write a reducer function.
// Use the reducer from your component.

// Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, 
// you specify “what the user just did” by dispatching “actions” from your event handlers. (The state update logic will live elsewhere!) 
// So instead of “setting tasks” via an event handler, you’re dispatching an “added/changed/deleted a task” action. 
// This is more descriptive of the user’s intent.

import { useReducer } from 'react';
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}

// Step 2: Write a reducer function 
// A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:

function yourReducer(state, action) {
  // return next state for React to set
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
