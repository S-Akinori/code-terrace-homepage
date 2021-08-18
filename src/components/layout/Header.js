import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import {useStaticQuery, graphql, Link } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
          <Link to="/">
            {data.site.siteMetadata.title}
          </Link>
        </div>
        {/* <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <AnchorLink className="px-4" href="#stats">
            Stats
          </AnchorLink>
          <AnchorLink className="px-4" href="#testimonials">
            Testimonials
          </AnchorLink>
        </div> */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="text-sm">お問い合わせはこちら</Button>
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
