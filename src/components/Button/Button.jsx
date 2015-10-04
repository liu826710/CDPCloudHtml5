/**
 * Created by AshZhang on 15/9/25.
 */


'use strict';

import React, { Component } from 'react';

import './button.less';

import Icon from '../Icon/Icon.jsx';


export default class Button extends Component {

  render() {
    const {
            type = 'button',
            text, icon, hollow, link, className,
            submitting,
            ...attr
          } = this.props;
    const btnClassName = (className || '')
            + (submitting ? ' btn-submitting' : '')
            + (hollow ? ' btn-hollow' : '')
            + (link ? ' btn-link' : '');

    return (
      <button type={type} className={btnClassName.trim()} {...attr}>
        {
          icon ? <Icon name={icon} button></Icon> : null
        }
        {
          submitting ? <Icon name='spinner fa-pulse' button></Icon> : null
        }
        {text}
      </button>
    );
  }
}