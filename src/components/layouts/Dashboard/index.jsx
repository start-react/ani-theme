import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    //console.log(this.context);

    // var name = this.context.router.getCurrentPath();

    const { pathname } = this.props.location;

    var title = <span><a href="http://startreact.com/" title="Start React" rel="home"><img src="http://startreact.com/wp-content/themes/dazzling-child/images/logo.png" alt="Start React" title="Start React" height="35px" />&nbsp;SB Admin React - StartReact.com</a></span>;
    
    return (
        <div className="dashboard-page"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">Ani Theme <small>Free Edition</small></h2> 
                  <img src={require("../../../common/images/flat-avatar.png")} className="user-avatar" />
                  <br /> 
                  <Link to="/login" className="btn btn-white btn-outline btn-rounded btn-sm">Logout</Link> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <Link to='/'>Overview</Link>
                  </li> 
                  <li>
                    <Link to='/reports'>Reports</Link>
                  </li> 
                  <li>
                    <a href="http://www.strapui.com/ani-angularjs-theme">Ani Theme Premium Edition</a>
                  </li> 
                </ul> 
              </div>

              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view-main">
                <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(this.props.children || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>
              
                
              </div> 
            </div> 
          </div> 
        </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
