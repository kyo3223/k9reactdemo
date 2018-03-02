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
const selectedTab=(state='',action)=>{
  // console.log('reducers',action)
  switch (action.type) {
    case ActionTypes.SET_TAB:
    return action.tab
    default:
    return state  // 没有匹配的action type，返回原来的state
  }

}
const rootReducer = combineReducers({
  errorMessage,
  selectedTab
})

export default rootReducer