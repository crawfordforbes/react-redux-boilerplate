import {UPDATE_META, UPDATE_META_GROUP} from '../constants/ActionTypes'
const meta = {
	view: "viewOne",
	loading: "false"
};
export default (state = meta, action) => {
	switch(action.type) {
		case UPDATE_META:

			let umState = {...state}
			umState[action.key] = action.value
			return Object.assign({}, state, umState)
			break;
		case UPDATE_META_GROUP:
		
			let group = action.group
			let umgState = {...state}
			group.forEach((pair)=>{
				umgState[pair[0]] = pair[1]
			})
			
			return Object.assign({}, state, umgState)

		default:
		return state
	}
}