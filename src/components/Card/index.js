import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${headerImage})`,
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <div className="wrapper post-card-image-link" style={imageStyle(image, backgroundColor)} />
  </Link>
);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  timeToRead,
  tags = [],
}) => (
  <div className="post-card-content">
    <a className="post-card-content-link" href={url}>

      <header className="post-card-header">
        {/* {{#if primary_tag}}
        {{#primary_tag}}
        <div class="post-card-primary-tag">{{name}}</div>
        {{/primary_tag}}
        {{/if}} */}
        <h2 className="post-card-title">{title}</h2>
      </header>

      <section className="post-card-excerpt">
        {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
        />
        )}
        {description}
        {/* {{#if feature_image}}
        <p>{{excerpt words="30"}}</p>
    {{else}}
        <p>{{excerpt words="44"}}</p>
    {{/if}} */}
      </section>
    </a>

    <footer className="post-card-meta">
      <ul className="author-list" />
      <div className="post-card-byline-content">
        {/* <span>{{#has author="count:>2"}}Multiple authors{{else}}{{authors}}{{/has}}</span> */}
        <span>Christian</span>
        <span className="post-card-byline-date">
          {date}
          <span className="bull">&bull;</span>
          {timeToRead}
        </span>
      </div>
    </footer>
  </div>
  // <div className="col-sm-12 pb-4">
  //   <div className="post-card">
  //     {headerImage && (
  //       <CardHeader
  //         url={url}
  //         image={headerImage}
  //         backgroundColor={headerBackgroundColor}
  //       />
  //     )}
  //     <div className="post-card-content">
  //       <div className="content">
  //         <div className="stats">
  //           <span className="date">{date.split('T')[0]}</span>
  //           {tags.map(name => (
  //             <Tag name={name} key={name} />
  //           ))}
  //           {timeToRead}
  //         </div>
  //         <Link to={url} href={url}>
  //           <h4 className="title">{title}</h4>
  //         </Link>
  //         <p>{description}</p>
  //         <Link to={url} href={url}>
  //           Read on...
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export default Card;
