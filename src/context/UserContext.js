import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { user: action.payload };  
    case 'logout': 
      return { user: null };
    case 'default_context':
      return { company: null }
    default:
      return state;
  }
};

const login = dispatch => user => {
  dispatch({type: 'login', payload: user });
}

const logout = dispatch => () => {
  dispatch({type: 'logout'});
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, logout },
  { user: null }
);