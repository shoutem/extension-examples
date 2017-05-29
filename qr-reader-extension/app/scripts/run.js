const fs = require('fs-extra');
const plist = require('plist');

const infoPlistPath = './ios/ShoutemApp/Info.plist';
const infoPlistFile = fs.readFileSync(infoPlistPath, 'utf8');
const infoPlist = plist.parse(infoPlistFile);

console.log('Adding camera and microphone permissions to Info.plist');
infoPlist.NSCameraUsageDescription = 'App needs your camera to be able to scan QR codes';
infoPlist.NSMicrophoneUsageDescription = 'App needs your microphone to be able to scan QR codes';
fs.writeFileSync(infoPlistPath, plist.build(infoPlist));

const exec = require('child_process').execSync;

const dependenciesToLink = ['react-native-camera'];

const command = 'node node_modules/react-native/local-cli/cli.js link';

dependenciesToLink.forEach((dependency) => {
  exec(`${command} ${dependency}`);
});
