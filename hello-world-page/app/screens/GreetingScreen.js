import React, {
  Component,
} from 'react';

import {
  Title,
} from '@shoutem/ui';

export default class GreetingScreen extends Component {
  render() {
    const { shortcut } = this.props;
    const { greeting } = shortcut.settings;

    return (
      <Title>Hello {greeting}!</Title>
    );
  }
}