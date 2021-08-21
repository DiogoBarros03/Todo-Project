import React from 'react';
import {getCurrentDate} from '../util/CurrentDate';

import './InputBar.css';

class InputBar extends React.Component{

    
    state = {text: '', key: '', bool: true};
    onTODOSubmit = (event) =>{
        event.preventDefault();
        
        let text = this.state.text;
        text = text.replace(/\s+/g, '');
        

        if( text !== ''){
            
            this.props.onSubmit(this.state.text, this.state.key)
            this.setState({text: '', key:'', bool:true})
        }
        
    };
    handleTextChange(text) {
        
     
        if (text !== '') {
            this.setState({bool: false})
        } else {
            this.setState({bool: true})
        }
    }

    render(){
        const key = Math.random().toString(36).substr(2, 5)
        const separate = "";
        return(
            <div className="width-control">
                <form onSubmit={this.onTODOSubmit} className="ui form ">
                    <div className="field" id="float-label" style={{textAlign:"left"}}>
                        <input
                            
                            type="text"
                            value = {this.state.text}
                            onChange={ (e) => {
                                this.handleTextChange(e.target.value);
                                this.setState({
                                    text: e.target.value,
                                    key: `${key}${separate}${getCurrentDate()}`
                                })
                            }}
                        
                        ></input>
                        <label className={ this.state.bool === false ? "Active" : ""}>new todo</label>
                    </div>
                    
                </form>
            </div>
        );
    };
}


    

export default InputBar;