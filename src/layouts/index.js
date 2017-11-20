import React from 'react';
import 'flexboxgrid/css/index.css';
import './common.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import Helmet from '../components/Helmet/Helmet';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import IntroMovie from '../components/IntroMovie/index';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <div className="app">
        <Helmet />
        <div className="app-header">
          <HeaderMenu />
          <Header />
          <IntroMovie />
        </div>
        <div className="app-body">{children()}</div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
