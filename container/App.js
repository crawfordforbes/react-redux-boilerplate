import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from '../store'
import Body from '../components/Body'
import * as OtherActions from '../actions/index'

class App extends Component {
	render() {
		const {actions, data, meta} = this.props
		return (
			<div>
				<Body actions={actions} data={data} meta={meta}/>
			</div>)
	}
}

App.propTypes = {
	actions: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		meta: state.meta,
		data: state.data
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(OtherActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)