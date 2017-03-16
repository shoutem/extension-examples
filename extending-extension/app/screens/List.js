import { screens } from 'shoutem.rss-news';
import { Item } from '../components/Item';

export default class List extends screens.ArticlesListScreen {
  renderRow(article) {
    return (
      <Item
        article={article}
        onPress={this.openDetailsScreen}
      />
    );
  }
}
