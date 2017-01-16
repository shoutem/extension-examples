import React, {
  Component,
} from 'react';

import {
  Title,
} from '@shoutem/ui';

export default class GreetingsScreen extends Component {
  render() {
    const { shortcut } = this.props;
    const { greetingName } = shortcut.settings;

    return (
      <Title>Hello {greetingName}!</Title>
    );
  }
}