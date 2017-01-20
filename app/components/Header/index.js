import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ImgSmall } from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ImgSmall src={Banner} alt="Ennovar" />
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
          <HeaderLink to="/dashboard">
            <FormattedMessage {...messages.dashboard} />
          </HeaderLink>
        </NavBar>
        <hr />
      </div>
    );
  }
}

export default Header;
