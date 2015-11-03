import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Route, DefaultRoute, RouteHandler } from "react-router";

var Base = React.createClass({

  render: function() {
	const { pathname } = this.props.location;
	console.log("base", pathname);
  	return (
      <div id="container">
      	<ReactCSSTransitionGroup component="div"
                         transitionName="ng"
                         transitionEnterTimeout={500}
                         transitionLeaveTimeout={300}
        >
          {React.cloneElement(this.props.children || <div />, { key: pathname })}
        </ReactCSSTransitionGroup>
       
      </div>
    );
  }

});

export default Base;