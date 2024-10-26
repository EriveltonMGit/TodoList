import { useState } from "react";
// IMPORT CSS
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  // PEGA OS DADOS
  const [todos, setTodos] = useState([
    
  
  ]);

  // criar lista
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompemented: false,
      },
    ];
    
    setTodos(newTodos);
  };

  // Remover item da lista pelo ID
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // completar tarefas
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompemented = !todo.isCompemented) : todo
    );
    setTodos(newTodos);
  };
  // PESQUISAR SEARCH
  const [search, setSearch] = useState("");

  // FILTRAR CAMPOS
  const [filter, setFilter] = useState ("All");
  const [sort, setSort] = useState ("Asc");




  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter   filter={filter}  setFilter={setFilter}  setSort={setSort} />
      <div className="todo-list">
        {todos
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompemented : !todo.isCompemented )
        .sort((a,b)=> sort === "Asc" ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
