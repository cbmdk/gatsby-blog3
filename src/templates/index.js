/* eslint react/prop-types: 0 */
import React from 'react';
import Link from 'gatsby-link';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './index.scss';

const NavLinkText = ({ color, text }) => (
  <div
    className="navlink"
    style={{
      color,
    }}
  >
    {text}
  </div>
);

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <NavLinkText color="#7d7d7d" text={text} />;
  }

  return (
    <Link to={`${url}`}>
      <NavLinkText color="#66ccff" text={text} />
    </Link>
  );
};

const Page = ({ pageContext }) => {
  const {
    group, index, first, last, pathPrefix,
  } = pageContext;

  const previousUrl = index - 1 === 1 ? '' : `/${pathPrefix}/${index - 1}`;
  const nextUrl = `/${pathPrefix}/${index + 1}`;

  return (
    <React.Fragment>
      <div
        className="row homepage"
        style={{
          marginTop: 20,
        }}
      >
        <Header
          img="https://denstorerejse.blob.core.windows.net/assets/images/size/w2000/2018/12/thailand-phuket-province-phuket-beach.jpg"
          title="Den Store Rejse"
          authorName="Læs med om vores store rejse..."
          authorImage=""
          subTitle=" "
        />
        <Sidebar />
        <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
        <main id="site-main" className="site-main outer">
              <div className="inner posts">
                <div className="post-feed">
                  {group.map(({ node }) => (
            // <Card
            //   {...node.frontmatter}
            //   url={node.frontmatter.slug ? node.frontmatter.slug : node.fields.slug}
            //   key={node.fields.slug}
            //   description={node.excerpt}
            //   timeToRead={node.fields.readingTime.text}
            // />

                  <article className="post-card post tag-indonesien post-card-large">
                    <a className="post-card-image-link" href="/tilbage-pa-bali-de-sidste-dage/">
                      <img
                        className="post-card-image" 
                        sizes="(max-width: 1000px) 400px, 700px" 
                        src="https://denstorerejse.blob.core.windows.net/assets/images/size/w2000/2019/04/IMG_0009-6.jpg" 
                        alt="Tilbage på Bali, de sidste dage"
                      />
                    </a>
                    <div className="post-card-content">
                      <a className="post-card-content-link" href="/tilbage-pa-bali-de-sidste-dage/">
                        <header className="post-card-header">
                          <div className="post-card-primary-tag">Indonesien</div>
                          <h2 className="post-card-title">Tilbage på Bali, de sidste dage</h2>
                        </header>
                        <section className="post-card-excerpt">
                          <p>Efter at være taget fra Gili T, landede vi i Amed på Bali. Lidt uden for Amed havde vi booket en bungalow i flot balinesisk stil, lige ned til stranden.</p>
                        </section>
                      </a>
                      <footer className="post-card-meta">
                        <ul className="author-list">
                          <li className="author-list-item">
                            <div className="author-name-tooltip">Christian</div>            
                            <a href="/author/christian/" className="static-avatar">
                              <img className="author-profile-image" src="//www.gravatar.com/avatar/8752c22728f527bd8022f02eb7091fbc?s=250&amp;d=mm&amp;r=x" alt="Christian" />
                            </a>
                          </li>
                        </ul>
                        <div className="post-card-byline-content">
                          <span><a href="/author/christian/">Christian</a></span>
                          <span className="post-card-byline-date">
                            28 apr 2019
                            <span className="bull">•</span>
                            5 min read
                          </span>
                        </div>
                      </footer>

                    </div>
                  </article>
                  ))}
                </div>
              </div>
        </main>

          <div
            className="row"
            style={{
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <div className="previousLink">
              <NavLink test={!first} url={previousUrl} text="Previous" />
            </div>
            <div className="nextLink">
              <NavLink test={!last} url={nextUrl} text="Next" />
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-1 order-3" />
      </div>
    </React.Fragment>
  );
};

export default Page;
