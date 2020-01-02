import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

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
                <div onClick={(e)=>this.togglePanel(e)} className='header'>
                    <u>{this.props.title}</u>&nbsp;<FaMinusSquare /> 
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>  
                ) : (
                <div onClick={(e)=>this.togglePanel(e)} className='header'>
                    <u>{this.props.title}</u>&nbsp;<FaPlusSquare />  
                </div>)}
        </div>
      );
    }
}   
export default Collapsible;