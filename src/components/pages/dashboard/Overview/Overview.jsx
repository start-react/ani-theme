import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link> 
        <h2>Overview <small>Why is Ani Theme so awesome?</small></h2> 
        <Jumbotron> 
          <h1>Welcome!</h1> I don't want to bloat this Ani Theme Free Edition AngularJS Admin theme with a lot of plugins. To install plugins we have bower. Let's keep it real clean!
          <br /><br /> 
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
        </Jumbotron> 
      </div>
      
      
    );
  }

});

export default Blank;
