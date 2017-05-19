// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';

// screens imports
import SwiperScreen from './screens/SwiperScreen';

// themes imports


export const screens = {
  SwiperScreen
};

export const themes = {

};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
