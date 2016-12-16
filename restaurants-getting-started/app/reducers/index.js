import { storage, collection } from '@shoutem/redux-io';
import { combineReducers } from 'redux';
import { ext } from '../const';

export default combineReducers({
  restaurants: storage(ext('Restaurants')),
  allRestaurants: collection(ext('Restaurants'), 'all')
});