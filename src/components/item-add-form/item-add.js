import React from "react";
import "./item-add.css";

export default class ItemAddForm extends React.Component{
    state = {
        label:""
    }
    onLabelChange = (e)=>{
        this.setState({
            label:e.target.value
        })
    };

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({label:""})
    };


    render(){
        return (
            <form className="item-add-form d-flex w-100"onSubmit={this.onSubmit}>                
                <input 
                    type="text" 
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="type"
                    value={this.state.label}
                />                
                <button className="btn btn-outline-secondary w-50" type="submit">Add Item</button>
            </form>
        );
    }
}