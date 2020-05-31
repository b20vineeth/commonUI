import React, { Component } from 'react'  
import NewsContainer from '../containers/NewsContainer' 

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  
    this.props.readData();
   
  }
   render() { 
   
    return (
      <React.Fragment>
        {this.props.loadingStatus=="true"? <NewsContainer/> :<Loading/>}
      </React.Fragment> 
    )
  }
 
}
class Loading extends React.Component {
  render() {
    return <div className="single-post-wrap">Loading</div>;
  }
}
