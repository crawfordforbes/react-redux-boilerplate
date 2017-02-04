import * as types from '../constants/ActionTypes'

export function updateMeta(key, value){
  return {type: types.UPDATE_META, key, value}
}
export function updateMetaGroup(group){
	return {type: types.UPDATE_META_GROUP, group}
}
export function updateData(value){
	return {type: types.UPDATE_DATA, value}
}

export function getDataAjax(url){
	return function(dispatch){
		dispatch(updateMeta("loading", true))
		return $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function(data){
      	dispatch(updateData(data))
      	dispatch(updateMeta("loading", false))
      }
    });
	}
}
