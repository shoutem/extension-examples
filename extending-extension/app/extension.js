// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';
import List from './screens/List';

export const screens = {
  List
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
