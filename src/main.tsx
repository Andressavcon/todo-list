import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './pages/TodoList/ToDoList';
import './css/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
