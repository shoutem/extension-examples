import { storage, collection } from '@shoutem/redux-io';
import { combineReducers } from 'redux';
import { ext } from './extension';

// combine reducers into one root reducer
export default combineReducers({
  restaurants: storage(ext('Restaurants')),
  allRestaurants: collection(ext('Restaurants'), 'all')
});