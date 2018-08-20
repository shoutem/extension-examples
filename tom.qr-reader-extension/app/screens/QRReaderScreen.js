import React, { Component } from 'react';
import { Alert } from 'react-native';
import Camera from 'react-native-camera';
import _ from 'lodash';

export default class QRReaderScreen extends Component {
  constructor(props) {
    super(props);
    this.onBarCodeRead = this.onBarCodeRead.bind(this);
  }

  // when camera recognizes a QR code, it will store it's content in 'code'
  // and then display an alert with the 'code' contents,
  onBarCodeRead(code) {
    Alert.alert(
      'QR Code Detected',
      code.data,
      [
        { text: 'OK, read it.', onPress: () => console.log('User saw QR Code contents.') },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <Camera
        onBarCodeRead={_.debounce(this.onBarCodeRead, 1000, { leading: true, trailing: false })}
        style={{ flex: 1 }}
      />
    );
  }
}
