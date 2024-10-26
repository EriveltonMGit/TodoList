/* eslint-disable react/prop-types */



const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompemented ? "Line-through": ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
        <div>
          <button className="complete" onClick={()=> completeTodo(todo.id)}  >Completar</button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
