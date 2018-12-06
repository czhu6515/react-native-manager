import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL 
} from '../actions/types'

const INITAL_STATE = {
  email: '', 
  password: '',
  user: null,
  error: ''
}

export default (state=INITAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN_USER_SUCCESS:
      return {...state, error: '', user: action.payload, }
    case LOGIN_USER_FAIL:
      return {...state, error:'Authentication Failed', password: ''}
    default:
      return state
  }
}
