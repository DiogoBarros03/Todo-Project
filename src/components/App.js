import React from 'react';

import InputBar from './InputBar';
import TodoList from './TodoList';

import './App.css';


class App extends React.Component{

    state = {todoItems : [
            {
                text: '',
                key: ''
            }
        ]
    }
    onInputSubmit = (newText,newKey) =>{
        let arr = {text: newText, key: newKey};
        
        if(this.state.todoItems[0].text === '' ) {
            
            this.setState({
                todoItems: [arr]
            });
        }else{
            this.setState({
                todoItems: this.state.todoItems.concat(arr)
            });
        }
        
       
      
    };
    deleteElement = (index) =>{
        let arr = this.state.todoItems;
        arr.splice(index,1);
        console.log(arr.length);
        if(arr.length !== 0){
            this.setState({
                todoItems: arr
            });
        }else{
            this.setState({
                todoItems: [{
                    text: '',
                    key: ''
                }]
            });
        }
        
       
        
       
        
    }
    
    render(){
        
        return (
            <div className="ui  container-css" >
                
                <div className="ui one column stackable center aligned page grid" style={{padding: '0',width:'100%'}}>
                    <div className="column twelve wide" style={{maxWidth: '500px'}}>
                        <h1 style={{textAlign:'left'}}>TODO APP</h1>
                        <InputBar onSubmit={this.onInputSubmit}></InputBar>
                    </div>
                </div>
                <div className="ui one column stackable center aligned page grid" style={{marginTop: '0px'}}>
                    <div className="column twelve wide">
                        <TodoList todoItems={this.state.todoItems} onDelete={this.deleteElement}></TodoList>
                    </div>
                </div>
            </div>
    
        );
    };
}



export default App;