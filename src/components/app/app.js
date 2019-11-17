import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoItemFilter from "../todo-item-filter/todo-item-filter";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add";


class App extends React.Component{
    constructor(){
        super();
        this.maxId = 0;
        this.state = {
            todoData:[
                this.createItem("first"),
            ]
        }
        

    }

    createItem = (label)=>{
        return  {
            label,
            done:false,
            important:false,
            id:this.maxId++,
        }
    };

    deleteItem = (id)=>{
        this.setState(({todoData})=>{
            return {todoData: todoData.filter(e=>e.id!== id)}
        })
    };

    addItem = (label)=>{
        let item = this.createItem(label);
        this.setState(({todoData})=>{
            return {
                todoData:JSON.parse(JSON.stringify(todoData)).concat(item)
            };
        })
    };

    onToggleImportant = (id)=>{
        console.log("imp",id);
        this.setState(({todoData}) => {
            return {
                todoData:JSON.parse(JSON.stringify(todoData)).map(
                    (e)=>{
                        if (e.id === id) {e.important = !e.important;}
                        return e;
                    }
                )
            }
        });
    };

    onToggleDone = (id)=>{
        console.log("done",id);
        this.setState(({todoData}) => {
            return {
                todoData:JSON.parse(JSON.stringify(todoData)).map(
                    (e)=>{
                        if (e.id === id) {e.done = !e.done;}
                        return e;
                    }
                )
            }
        });
    };
    
    render(){
        const {todoData} = this.state;
        const doneCount = todoData.filter(e=>e.done===true).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <AppHeader className="col-md-6" todo={todoCount} done={doneCount} />
                </div>
                <div className="row d-flex justify-content-center">
                    <SearchPanel />
                    <TodoItemFilter/>
                </div>
                <div className="row d-flex justify-content-center">
                    <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
                </div>
                <div className="row d-flex justify-content-center">
                    <ItemAddForm className="col-md-6" onItemAdd={this.addItem}/>
                </div>                      
            </div>);
    }
}

export default App;