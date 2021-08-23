import React from 'react';


class TodoItem extends React.Component{
    deleteElement(index){
        this.props.onDelete(index);
    }


    render(){
       
        if(this.props.text !== ''){
            return(
                <div  className="item" style={{marginTop:'12px'}}>
                    <div className="content">
                        <div className="content" style={{
                            textAlign:"left", 
                            fontSize:'20px', 
                            height: '40px', 
                            alignItems: 'center',
                            display: 'flex',
                            wordBreak: 'break-word'}}>
                            <div style={{display:'inline'}}>
                                {this.props.text}
                            </div>
                            <div className="delete" id={this.props.deleteIndex} 
                                    onClick={() =>{
                                        this.deleteElement(this.props.deleteIndex)}
                                    } 
                                    style={
                                        {
                                            display:'inline', 
                                            marginLeft: 'auto', 
                                            order: '2',
                                            width:'40px',
                                            height: '40px',
                                            
                                            alignItems: 'center',
                                            justifyItems: 'center',
                                            cursor: 'pointer'
                                        }
                                    }>
                                <i className="trash icon"  style={{padding:'10px'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return(null);
        
    };
}


export default TodoItem;