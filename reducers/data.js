import {UPDATE_MONTHS} from '../constants/ActionTypes'
const initialState = {
	data: [
		{
			title: "item 1"
		},
		{
			title: "item 2"
		}
	]
};
export default (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_MONTHS:
			const updateMonthsState = JSON.parse(JSON.stringify(state));
			updateMonthsState.loans[action.idx].months = parseInt(action.newMonths)
			return Object.assign({}, state, updateMonthsState)



		default:
		return state
	}
}