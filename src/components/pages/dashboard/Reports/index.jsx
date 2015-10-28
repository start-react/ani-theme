import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreReports = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Reports.jsx'),

  preRender: function () {
  	return null; //<div>Loading Reports...</div>;
  }
});

export default PreReports;