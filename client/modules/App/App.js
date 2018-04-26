import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
// import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header';
// import Footer from './components/Footer/Footer';
import LeftDrawer from './components/LeftDrawer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    // let { navDrawerOpen, isShowPopupUpdate, isShowPopupError, title, content } = this.state;
        const navDrawerOpen = false;

        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
            },
            container: {
                margin: '80px 20px 20px 15px',
                width: '97%',
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            }
        };
    return (
      <div>
        {/* {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} */}
        <div>
          {/* <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          /> */}
          {/* <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          /> */}
          {/* <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer /> */}
          <MuiThemeProvider>
            <div>
              <Header styles={{paddingLeft:300}} />
              <LeftDrawer/>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
