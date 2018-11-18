import React, { Component, Fragment } from 'react';
import './Settings.css'
import Icon from './settings.svg';

class Column extends Component {

  constructor(props) {
    super(props);
    this.countInput = React.createRef();
    this.colorInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    localStorage.setItem('count', this.countInput.current.value);
    localStorage.setItem('color', this.colorInput.current.value);
    this.props.changeSettings(this.countInput.current.value,this.colorInput.current.value);
  }

  render() {
    return (
      <Fragment>
        <div className="icon-button" style={{backgroundColor: this.props.color}} onClick={this.props.handleOpen}>
            <img src={Icon} alt="icon"/>
        </div>
        {
         this.props.open ? 
          <div className="popup-wrapper">
            <div className="popup">
              <div className="popup-header" style={{backgroundColor: this.props.color}}>
                <h1>Settings</h1>
                <span onClick={this.props.handleClose}>&#x2716;</span>
              </div>
              <div className="popup-content">
                <label>Enter tweets count:</label>
                <input 
                  ref={this.countInput} 
                  defaultValue={localStorage.getItem('count') ? localStorage.getItem('count') : 30}
                  className="input" 
                  type="number" 
                  placeholder="Tweets"
                />
                <label>Enter primary color:</label>
                <input 
                  ref={this.colorInput} 
                  defaultValue={localStorage.getItem('color') ? localStorage.getItem('color') : "#4AB3F4"}
                  className="input color" 
                  type="color" 
                  placeholder="Color"
                />
                <button className="button" style={{backgroundColor: this.props.color}} onClick={this.handleChange}>Save</button>
              </div>
            </div> 
            </div>
         : 
          null
        }
        </Fragment>
    );
  }
}

export default Column;
