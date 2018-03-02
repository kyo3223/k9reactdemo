import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'

const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === 'RESET_ERROR_MESSAGE') {
    return null
  } else if (error) {
    return error
  }

  return state
}
const setSelectedTab=(state,action)=>{
  switch (action.type) {
    case ActionTypes.SET_TAB:
    return {
      tab:action.tab
    }
    default:
    return state  // 没有匹配的action type，返回原来的state
  }

}
const rootReducer = combineReducers({
  errorMessage,
  setSelectedTab
})

export default rootReducer