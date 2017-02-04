#Mariokard

import {UPDATE_ME, UPDATE_ME_GROUP} from '../constants/ActionTypes'
const me = {
	name: "repooper",
	hand: [0,1,2,3,4]
};
export default (state = me, action) => {
	switch(action.type) {
		case UPDATE_ME:

			let umState = {...state}
			umState[action.key] = action.value
			return Object.assign({}, state, umState)
			break;
case UPDATE_ME_GROUP:
		
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