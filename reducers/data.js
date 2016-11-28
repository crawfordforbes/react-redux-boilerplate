import {UPDATE_DATA} from '../constants/ActionTypes'
const data = {
};
export default (state = data, action) => {
	switch(action.type) {
		case UPDATE_DATA:

			let updateDataState = action.value
			return Object.assign({}, state, updateDataState)
			break;


		default:
		return state
	}
}