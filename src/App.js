import React, { Component,Fragment } from 'react';
import DragableGrid from './components/DragableGrid/DragableGrid';
import Settings from './components/Settings/Settings';

const items = [
  {
    id: "item-1",
    name : "MakeSchool",
  },
  {
    id: "item-2",
    name : "newsycombinator",
  },
  {
    id: "item-3",
    name : "ycombinator",
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      count: localStorage.getItem('count') ? localStorage.getItem('count') : 30,
      color: localStorage.getItem('color') ? localStorage.getItem('color') : "#4AB3F4",
    }
    this.handlePopupOpen = this.handlePopupOpen.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
  }

  changeSettings(count,color){
    this.setState({
      count: count,
      color: color,
      open: false,
    });
  }

  handlePopupOpen(){
    this.setState({open: true});
  }

  handlePopupClose(){
    this.setState({open: false});
  }

  render() {
    return (
      <Fragment>
        <DragableGrid 
          items={items} 
          count={this.state.count}
          color={this.state.color}  
        />
        <Settings 
          open={this.state.open} 
          handleOpen={this.handlePopupOpen} 
          handleClose={this.handlePopupClose} 
          changeSettings={this.changeSettings}
          color={this.state.color}
        />
      </Fragment>
    );
  }
}

export default App;
