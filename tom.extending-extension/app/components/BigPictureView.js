import React from 'react';
import moment from 'moment';

import {
  TouchableOpacity,
  Caption,
  Image,
  Tile,
  Title
} from '@shoutem/ui';

import { ListArticleView } from 'shoutem.news/components/ListArticleView';
import { getLeadImageUrl } from 'shoutem.rss';

export class BigPictureView extends ListArticleView {
  render() {
    const { article } = this.props;
    const dateFormat = moment(article.timeUpdated).isBefore(0) ?
    null : (<Caption>{moment(article.timeUpdated).fromNow()}</Caption>);

    return (
      <TouchableOpacity key={article.id} onPress={this.onPress}>
        <Image
          styleName="featured"
          source={{ uri: getLeadImageUrl(article) }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{article.title}</Title>
            {dateFormat}
          </Tile>
        </Image>
      </TouchableOpacity>
    );
  }
}
