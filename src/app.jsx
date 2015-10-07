/**
 * App entrance
 */


'use strict';

import '../node_modules/font-awesome/css/font-awesome.css';
import './common/styles/app.less';

import React, { Component } from 'react';
import ReactTap from 'react-tap-event-plugin';
import { Router, Route, IndexRoute } from 'react-router';

import ajax from './common/utils/ajax';

import HomeContainer from './containers/HomeMenu/HomeContainer.jsx';
import EmployeeContainer from './containers/HomeMenu/EmployeeContainer.jsx';
import ManagerContainer from './containers/HomeMenu/ManagerContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';
import SalaryContainer from './containers/SalaryContainer.jsx';
import LeaveContainer from './containers/LeaveContainer.jsx';
import OvertimeContainer from './containers/OvertimeContainer.jsx';
import TeamProfileContainer from './containers/TeamProfileContainer.jsx';
import LeaveMgrContainer from './containers/LeaveMgrContainer.jsx';
import OvertimeMgrContainer from './containers/OvertimeMgrContainer.jsx';


// Settings
// ---------------------------

React.initializeTouchEvents(true);
ReactTap();

if (process.env.NODE_ENV !== 'production') {
  ajax.setDomain('//localhost:9090');
}


// Routes
// ---------------------------

React.render((
  <Router>
    <Route path='/' name='home' component={HomeContainer}>
      <IndexRoute component={EmployeeContainer} />

      <Route path='profile' name='profile' component={ProfileContainer} />
      <Route path='my-salary' name='my-salary' component={SalaryContainer} />
      <Route path='my-leave' name='my-leave' component={LeaveContainer} />
      <Route path='my-ot' name='my-ot' component={OvertimeContainer} />

      <Route path='team-profile' name='profile' component={TeamProfileContainer} />
      <Route path='leave-mgr' name='leave-mgr' component={LeaveMgrContainer} />
      <Route path='ot-mgr' name='ot-mgr' component={OvertimeMgrContainer} />

      <Route path='manager' name='manager' component={ManagerContainer} />
      <Route path='*' name='employee' component={EmployeeContainer} />
    </Route>
  </Router>
), document.getElementById('app'));