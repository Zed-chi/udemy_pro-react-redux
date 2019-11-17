import React from "react";

class TodoItemFilter extends React.Component{
    render(){
        return (
            <div className="btn-group w-100">
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={()=>{this.props.onFilterClick("all")}}
                >all</button>
                <button 
                    className="btn btn-outline-secondary"
                    onClick={()=>{this.props.onFilterClick("active")}}
                >active</button>
                <button className="btn btn-outline-secondary" onClick={()=>{this.props.onFilterClick("done")}}>done</button>
            </div>    
        );
    }
}

export default TodoItemFilter;