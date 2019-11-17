import React from "react";

class TodoItemFilter extends React.Component{
    render(){
        return (
            <div className="btn-group w-100">
                <button className="btn btn-outline-secondary">all</button>
                <button className="btn btn-outline-secondary">active</button>
                <button className="btn btn-outline-secondary">done</button>
            </div>    
        );
    }
}

export default TodoItemFilter;