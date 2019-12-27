import React from 'react';
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
        
      return (<div>
        <u><div onClick={(e)=>this.togglePanel(e)} className='header'>
            {this.props.title}</div></u>
        {this.state.open ? (
            <div className='content'>
                {this.props.children}
            </div>
            ) : null}
      </div>);
    }
}   
export default Collapsible;