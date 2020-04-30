import { combineReducers } from 'redux';
// import {Action} from 'redux';

export interface RootState {
  user: {
    name: string;
  };
}

/** User reducer */
interface User {
  name: string;
}

const userInitialState: User = {
  name: '',
};

export const userReducer = (state = userInitialState, action: any): User => {
  switch (action.type) {
    case 'user/addName':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers<RootState>({
  user: userReducer,
});
