// @flow
import React from "react";
import PropTypes from "prop-types";

import WebHeaderView from "./WebHeaderView";

export default class WebHeaderController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickHeader: false,
    };
  }

  stickHeader = () => {
    if (window.scrollY >= 184) {
      this.setState({ stickHeader: true });
    } else {
      this.setState({ stickHeader: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.stickHeader);
  }

  static propTypes = {
    isHomePage: PropTypes.bool,
  };
  static defaultProps = {
    isHomePage: false,
  };

  render() {
    return (
      <WebHeaderView {...this.props} stickHeader={this.state.stickHeader} />
    );
  }
}
