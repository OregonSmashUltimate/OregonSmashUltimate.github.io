import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { FaMinusSquare} from 'react-icons/fa';

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
                    <u>{this.props.title}&nbsp;<FaMinusSquare /></u>  
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>  
                ) : (
                <div onClick={(e)=>this.togglePanel(e)} className='header'>
                    <u>{this.props.title}&nbsp;<FaPlusSquare /></u>  
                </div>)}
        </div>
      );
    }
}   
export default Collapsible;