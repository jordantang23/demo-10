import { combineReducers } from 'redux';
import { switchReducer } from './reducer';

export const rootReducer = combineReducers ({
    app: switchReducer
})

export type RootState = ReturnType<typof rootReducer>;
