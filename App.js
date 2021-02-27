import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './Navigation'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import userReducer from './redux/reducers/userReducers'
import userActions from './redux/actions/userActions';

const store = createStore(userReducer, applyMiddleware(thunk))

 const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>    
    );
}

export default App