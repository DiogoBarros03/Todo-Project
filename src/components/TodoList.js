import React from 'react';
import TodoItem from './TodoItem'


class TodoList extends React.Component{
    
    deleteElement = (index) =>{
        this.props.onDelete(index);
    }
    
    render(){
        
        if(this.props.todoItems.length !== 0){
            let count = -1;
            const renderedList = this.props.todoItems.map(({text,key}) => {
                count = count +1 ;
                
                return(
                    <TodoItem key={key} text={text} onDelete={this.deleteElement} deleteIndex={count}/>
                    
                );
                
            })
            return(
                <div className="ui list" style={{marginBottom: '10px'}}>
                    {renderedList}
                </div>
            );
        }
        return(null);
        
    };
}


export default TodoList;
