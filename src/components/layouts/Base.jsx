import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Route, DefaultRoute, RouteHandler } from "react-router";

var Base = React.createClass({

  componentWillMount: function(){
    // this.props.history.pushState(null, '/dashboard/overview');
  },

  render: function() {
  	const { pathname } = this.props.location;

    if(pathname.substr(0, 10) == '/dashboard')
        var change = 'internal';
    else
        var change = pathname;

  	return (
      <div className="ui-view">
        <div className="ui-base">
        	{<ReactCSSTransitionGroup component="div"
                           transitionName="ng"
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
          >
            {React.cloneElement(<div className="ui-view">{this.props.children}</div> || <div />, { key: change })}
          </ReactCSSTransitionGroup>}
        </div>
      </div>
    );
  }

});

export default Base;