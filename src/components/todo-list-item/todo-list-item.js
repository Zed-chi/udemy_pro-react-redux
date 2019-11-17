import React from "react";
import "./todo-list-item.css";


class TodoListItem extends React.Component{
    render(){
        const {label, onToggleImportant, onToggleDone, done, important} = this.props;
        let className = "label";
        if (done){
            className += " done";
        }
        if (important){
            className += " important";
        }
        return (
            <div className="todo-list-item d-flex justify-content-between"> 
                <span onClick={onToggleDone} className={className}>
                    {label}
                </span>
                <div className="buttons">
                <button onClick={onToggleImportant}><i className="fa fa-thumbs-o-up"></i></button>
                <button onClick={this.props.onDeleted}><i className="fa fa-remove"></i></button> 
                </div>
                
            </div>);
    }
    
}

export default TodoListItem;