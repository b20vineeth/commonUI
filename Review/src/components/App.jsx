import React, { Component } from 'react'  
import ReviewContainer from '../containers/ReviewContainer' 

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
        {this.props.loadingStatus=="true"? <ReviewContainer/> :<Loading/>}
      </React.Fragment> 
    )
  }
 
}
class Loading extends React.Component {
  render() {
    return <div className="single-post-wrap">Loading</div>;
  }
}
