// src/components/Modal.js
/*
  external imports
*/

import React, { Component } from 'react';

/*
  internal imports
*/

// ...

/*
  component definition
*/

class Modal extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.handleHide();
  }
  componentWillMount() {
    document.body.style.overflowY = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflowY = "visible";  
  }
  render() {
    return (
    <div>
        <div className="modal">
          <div className="closeBtn" onClick={this.clickHandler} />
          <div className="modal-content">
            <h2>{this.props.title}</h2>
            <div className="modal-content-imgwrap">
              <img className={this.props.imgClass} src={this.props.img}></img>
            </div>
            <h4>{this.props.desc}</h4>
            <div className="codepen-button">
            <a href={this.props.pen} target="_blank">VIEW ON CODEPEN</a>
            </div>
          </div>
        </div>
        <div className="modal-overlay" onClick={this.clickHandler}>
        </div>
    </div>
    );
  }
};

export default Modal;