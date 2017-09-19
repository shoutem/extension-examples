import React, {
  Component
} from 'react';

import {
  Screen,
  View,
  Image,
  Spinner,
  Tile,
  Title,
  Subtitle
} from '@shoutem/ui';

// public API, you can get yours on: https://api.nasa.gov
const apiKey = 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';

// NASA photo API url
var photoUrl = "https://api.nasa.gov/planetary/apod";


export default class PhotoDay extends Component {
  state = {
    photo: null
  }

  componentDidMount() {
    fetch(photoUrl + '?api_key=' + apiKey, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((photo => {
        this.setState({ photo });
      }));
  }
  
  render() {
    const { photo } = this.state;
    // render Spinner is photo is not fetched
    const content = photo ?
    (
      <Image
        styleName="large-portrait"
        source={{ uri: photo.url }}
      >
        <Tile>
          <Title>{photo.title}</Title>
          <Subtitle>{photo.copyright}</Subtitle>
        </Tile>
      </Image>
    ) : <Spinner />;

    return (
      <Screen>
        <View styleName="flexible vertical v-center">
          {content}
        </View>
      </Screen>
    );
  }
}