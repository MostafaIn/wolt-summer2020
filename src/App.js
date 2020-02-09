import React from 'react'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducer'

import RestaurantsList from './components/RestaurantsList'


const store = createStore(reducer,applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
     <RestaurantsList />
    </Provider>
  )
}

export default App