'use strict';
import React from 'react';
import {StackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import ResultsDetails from './ResultsDetails';


const App = StackNavigator({
  Home: {screen: SearchPage},
  Results: {screen: SearchResults},
  Details: {screen: ResultsDetails},
});

export default App;