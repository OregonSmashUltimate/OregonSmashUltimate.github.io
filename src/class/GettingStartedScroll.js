import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { render } from 'react-dom';
import Button from 'react-bootstrap/Button';

const imageList = [];

class GettingStartedScroll extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
 
        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
     
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
     
        scrollSpy.update();
     
      }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default GettingStartedScroll;