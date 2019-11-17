import React from "react";

class SearchPanel extends React.Component{
    render(){
        return <input 
            type="text" 
            placeholder="Type To Search" 
            className="w-100"
            onChange={(e)=>{
                this.props.onChange(e.target.value);                
            }}
            value={this.props.value}
        />;
    }
}

export default SearchPanel;