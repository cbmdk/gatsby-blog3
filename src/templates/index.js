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

const Page = ({ pageContext, location }) => {
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
          img="https://denstorerejse.file.core.windows.net/dsr/assets/images/size/w2000/2018/12/thailand-phuket-province-phuket-beach.jpg?sv=2019-02-02&ss=f&srt=sco&sp=r&se=2020-03-04T06:59:00Z&st=2020-03-03T22:59:00Z&spr=https,http&sig=VZQptAf1Yf6lRIz7fjSUG1Se%2FjrVPoMHijO17VjhBME%3D"
          title="Den Store Rejse"
          authorName="Læs med om vores store rejse..."
          authorImage=""
          subTitle=" "
        />
        <Sidebar />
        <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
          {group.map(({ node }) => (
            <Card {...node.frontmatter} url={node.frontmatter.slug ? node.frontmatter.slug : node.fields.slug} key={node.fields.slug} />
          ))}

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
