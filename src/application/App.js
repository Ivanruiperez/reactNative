import React from 'react';
import Navigation from './navigation/Navigation';
import configureStore from '../Redux/configureStore'
import { Provider } from 'react-redux'


const store = configureStore({factReducer: {lovedFacts:[]}})

export default function App() {
  return (
    <Provider store={store}>
    <Navigation/>
    </Provider>
  );
}