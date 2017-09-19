import React from 'react';
import { connect } from 'react-redux';
import { connectStyle } from '@shoutem/theme';

import {
  ArticlesListScreen,
  mapStateToProps,
  mapDispatchToProps,
} from 'shoutem.rss-news/screens/ArticlesListScreen';

import { BigPictureView } from '../components/BigPictureView';
import { ext } from '../extension';

export class ListWithBigPictures extends ArticlesListScreen {
  renderRow(article) {
    return (
      <BigPictureView
        article={article}
        onPress={this.openArticleWithId}
        articleId={article.id}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  connectStyle(ext('ListWithBigPictures'))(ListWithBigPictures),
);
