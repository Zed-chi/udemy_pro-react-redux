import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elems = [...todos].map(
        (e)=>{
            return (
            <li key={e.id} className="list-group-item todo-list">
                <TodoListItem 
                    {...e} 
                    onDeleted={()=>onDeleted(e.id)}
                    onToggleDone={()=>onToggleDone(e.id)}
                    onToggleImportant={()=>{onToggleImportant(e.id)}}
                />
            </li>);
        }
    );
    return (
        <ul className="list-group todo-list w-100">
          {elems}
        </ul>);
};

export default TodoList;
