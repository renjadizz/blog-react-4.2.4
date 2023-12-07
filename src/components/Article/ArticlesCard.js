import { Card } from 'antd';
import { format } from 'date-fns';
import './ArticlesCard.css';
import { truncate } from 'lodash';

import heartEmpty from '../../icons/heart_empty.svg';
import heartFull from '../../icons/heart_full.svg';

function ArticlesCard({ articleInfo }) {
  const { title, description, tagList, favorited, favoritesCount, createdAt, author } = articleInfo;
  return (
    <Card className="articles-card">
      <div className="articles-card__header">
        <div className="articles-card__header__left">
          <span className="articles-card__header__title">{truncate(title, { length: 60 })}</span>
          <span className="articles-card__header__likes">
            {favorited ? (
              <img src={heartFull} alt="heartFull" className="articles-card__header__heart" />
            ) : (
              <img className="articles-card__header__heart" src={heartEmpty} alt="heartEmpty" />
            )}
            <span>{favoritesCount}</span>
          </span>
          <div>
            {tagList.map((object, i) => (
              <span className="articles-card__header__tags" key={i}>
                {object}
              </span>
            ))}
          </div>
          <div>{truncate(description, { length: 150 })}</div>
        </div>
        <div className="articles-card__header__right">
          <div>
            <p className="articles-card__header__author-name">{author.username}</p>
            <p className="articles-card__header__author-date">{format(new Date(createdAt), 'MMMM d, yyyy')}</p>
          </div>
          <div>
            <img className="articles-card__header__author-img" src={author.image} alt="authorImg" />
          </div>
        </div>
      </div>
    </Card>
  );
}
export default ArticlesCard;