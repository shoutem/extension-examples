// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';

// screens imports
import QRReaderScreen from './screens/QRReaderScreen';

// themes imports


export const screens = {
  QRReaderScreen
};

export const themes = {

};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
