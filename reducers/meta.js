import {UPDATE_META} from '../constants/ActionTypes'
const meta = {
	view: "home"
};
export default (state = meta, action) => {
	switch(action.type) {
		case UPDATE_META:

			let updateMetaState = state
			updateMetaState[action.key] = action.value
			return Object.assign({}, state, updateMetaState)
			break;


		default:
		return state
	}
}