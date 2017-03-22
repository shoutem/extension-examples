import React, {
  Component
} from 'react';

import {
  TouchableOpacity,
} from 'react-native';

import {
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  Overlay,
  Screen
} from '@shoutem/ui';

import { NavigationBar } from '@shoutem/ui/navigation';
import { navigateTo } from '@shoutem/core/navigation';
import { ext } from '../extension';
import { connect } from 'react-redux';

import {
  find,
  isBusy,
  shouldRefresh,
  getCollection
} from '@shoutem/redux-io';

export class List extends Component {
  constructor(props) {
    super(props);

    // bind renderRow function to get the correct props
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    const { find, restaurants } = this.props;
    if (shouldRefresh(restaurants)) {
      find(ext('Restaurants'), 'all', {
          include: 'image',
      })
    }
  }

  // defines the UI of each row in the list
  renderRow(restaurant) {
    const { navigateTo } = this.props;

    return (
      <TouchableOpacity onPress={() => navigateTo({
        screen: ext('Details'),
        props: { restaurant }
      })}>
        <Image styleName="large-banner" source={{ uri: restaurant.image &&
        restaurant.image.url ? restaurant.image.url : undefined }}>
          <Tile>
            <Title>{restaurant.name}</Title>
            <Subtitle>{restaurant.address}</Subtitle>
          </Tile>
        </Image>
      </TouchableOpacity>
    );
  }

  render() {
    const { restaurants } = this.props;
    
    return (
      <Screen>
        <NavigationBar title="RESTAURANTS" />
        <ListView
          data={restaurants}
          loading={isBusy(restaurants)}
          renderRow={restaurant => this.renderRow(restaurant, navigateTo)}
        />
      </Screen>
    );
  }
}

// connect screen to redux store
export default connect(
  (state) => ({
    // get an array of restaurants from allRestaurants collection
    restaurants: getCollection(state[ext()].allRestaurants, state)
  }),
  { navigateTo, find }
)(List);
