import React, { Component, PropTypes } from 'react'
import Nav from './Nav'
import Home from './Home'
import ViewOne from './ViewOne'
import ViewTwo from './ViewTwo'

class Body extends Component {
  constructor(props, context) {
    super(props, context)
  }
  changeView(e){
    this.props.actions.updateMeta("view", e.target.id)
  }
  
  componentDidMount(){

  }

  render() {
  	console.log(this)
    let view;
    switch (this.props.meta.view) {
      case "home":
        view = <Home />
        break;
      case "viewOne":
        view = <ViewOne />
        break;
      case "viewTwo":
        view = <ViewTwo />
        break;
      default:
        view = <Home />
    }
    return (
			<div>
      <div id="home" onClick={this.changeView.bind(this)}>Table of Contents</div>
				<Nav 
        changeView={this.changeView.bind(this)} />
        {view}
          
				
			</div>
    )
  }
}

Body.propTypes = {
  meta: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Body
