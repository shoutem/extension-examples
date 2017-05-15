// Reference for app/index.js can be found here:
// http://shoutem.github.io/docs/extensions/reference/extension-exports

import reducer from './reducer';
import * as extension from './extension.js';

export const screens = extension.screens;
export const themes = extension.themes;

export { reducer };
