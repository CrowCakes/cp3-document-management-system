import React from 'react';
import {Link} from 'react-router';

/**
 * Implementation of the homepage component by extending my documentation
 */
class HomePage extends React.Component {
  /**
   * @return {Object} - Div element to be rendered in the dom
   */
  render() {
    return (
      <div>
        <h1> CP3 Document Management System</h1>
        <Link to="about">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
