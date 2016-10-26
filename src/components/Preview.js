// src/components/Preview.js
/*
  external imports
*/

import React, { Component } from 'react';
import Modal from './Modal';

/*
  internal imports
*/

// ...

/*
  component definition
*/

class Preview extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      showModal : false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({
      showModal : true
    });
  }
  closeModal() {
    this.setState({
      showModal : false
    });
  }
  render() {
    return (
      <div className={this.props.wrap}>  
        {this.state.showModal ? <Modal handleHide={this.closeModal} img={this.props.imgUrl} imgClass={this.props.imgClass} title={this.props.title} desc={this.props.desc} pen={this.props.pen} /> : null}
        <div className={this.props.inside} onClick={this.openModal}>
        </div>
        <div className="overlay">
        </div>
      </div>
    );
  }
};

export default Preview;