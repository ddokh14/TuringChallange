import React, { Component } from 'react';
import './Tweets.css'
import Icon from './twitter.svg';

class Column extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    var name = this.props.screen_name;
    var count = this.props.count;
    fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=' + count + '&screen_name=' + name)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentWillReceiveProps(nextProps){
    var name = nextProps.screen_name;
    var count = nextProps.count;
    fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=' + count + '&screen_name=' + name)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  formatDate(date){
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return (day + "." + month + "." + year);
  }


  render() {
    return (
        <div>
          <div className="tweets-header" style={{backgroundColor: this.props.color}}>
            {this.props.screen_name}
          </div> 
          <div className="tweets">

            {this.state.data.map((res, index) =>(
              <div key={index} className="tweet">
                <div className="tweet-header">
                  <div className="tweet-name">{res.user.name}</div>
                  <div className="tweet-username">
                    <a href={"https://twitter.com/" + res.user.screen_name}>
                      @{res.user.screen_name}
                    </a>
                  </div>
                  <div className="tweet-time">
                    {this.formatDate(new Date(res.created_at))}
                  </div>
                  <div className="tweet-link">
                    <a href={"https://twitter.com/i/web/status/" + res.id_str}>
                      <img  src={Icon} alt="icon"/>
                    </a>
                  </div>
                </div>
                <div className="tweet-content">
                  {
                    res.truncated ? 
                      res.text.substring(0,res.text.lastIndexOf("https://t.co/")) 
                    : 
                      res.text
                  }
                </div>
              </div>

              ) 
            )}
            

          </div>
        </div>
    );
  }
}

export default Column;
