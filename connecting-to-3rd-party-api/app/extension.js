// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';
import PhotoDay from './screens/PhotoDay';

export const screens = {
  PhotoDay
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
