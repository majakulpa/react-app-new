import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Layout.module.css";
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  sideDrawerClosedHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          openDrawer={this.sideDrawerOpenHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.token !== null };
};

export default connect(mapStateToProps)(Layout);
