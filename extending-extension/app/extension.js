// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';
import ListWithBigPictures from './screens/ListWithBigPictures';

export const screens = {
  ListWithBigPictures
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
