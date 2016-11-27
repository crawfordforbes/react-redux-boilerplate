import * as types from '../constants/ActionTypes'

export function updateMeta(key, value){
  return {type: types.UPDATE_META, key, value}
}

export function updateData(key, value){
	return {type: types.UPDATE_DATA, key, value}
}

export function getData(argument){
	return function(dispatch){
		dispatch(updateMeta("loading", true))
		return $.ajax({
	        type: "POST",
	        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	        url: "",
	        data: argument,
	        dataType: "json",
	        success: function(data){
	        	dispatch(updateData("data", data))
	        	dispatch(updateMeta("loading", false))
	        }
	    });
	}
}
