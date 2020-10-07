import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './components/JokesData';
import todosData from './components/todosData';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render () {
    const todoItems = this.state.todos.map(item => <TodoItem item={item} />)

    return (
      <div className="todo-list">
          {todoItems}
      </div>
    );
  }
}

export default App;
