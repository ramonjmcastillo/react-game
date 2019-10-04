import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> {this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(App);
