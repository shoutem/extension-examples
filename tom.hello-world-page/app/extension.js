// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';
import GreetingScreen from './screens/GreetingScreen';

export const screens = {
  GreetingScreen
};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
