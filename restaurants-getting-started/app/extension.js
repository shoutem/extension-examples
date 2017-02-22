// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';
import List from './screens/List';
import Details from './screens/Details';

export const screens = {
  List,
  Details
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
