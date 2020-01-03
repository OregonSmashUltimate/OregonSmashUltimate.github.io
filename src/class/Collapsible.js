import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

//Custom Collapsible class for expanding/collapsing text on webpage

class Collapsible extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            open:false
        }
        this.togglePanel = this.togglePanel.bind(this)
    }
    
    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        
      return (
        <div>
            
            {this.state.open ? (
                <div className='header'>
                    <u style={{cursor : 'pointer'}} onClick={(e)=>this.togglePanel(e)}>{this.props.title} <FaMinusSquare /></u>
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>  
                ) : (
                <div className='header'>
                    <u style={{cursor : 'pointer'}} onClick={(e)=>this.togglePanel(e)}>{this.props.title} <FaPlusSquare /></u>  
                </div>)}
        </div>
      );
      // Cursor reference: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
    }
}   
export default Collapsible;