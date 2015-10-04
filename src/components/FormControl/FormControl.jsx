/**
 * Created by AshZhang on 15/9/28.
 */


'use strict';

import './formControl.less';

import React, { Component } from 'react';


export default class FormControl extends Component {

  constructor(props) {
    super(props);
    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
  }

  render() {
    const { label, tips, className } = this.props;

    let controlClass = 'form-control' + (className ? ' ' + className : '');

    const children = React.Children.map(this.props.children, (child) => {
      if (child.props.defaultValue !== void 0) {
        controlClass += ' form-has-data';
      }

      return React.cloneElement(child, {
        onValid: this.onValid,
        onInvalid: this.onInvalid,
        onFocus: this.onFocus.bind(this, child.props.onFocus),
        onBlur: this.onBlur.bind(this, child.props.onBlur)
      });
    });

    const tipEl = tips ? <span className='form-tips'>({tips})</span> : null;

    const labelEl = label
                      ? <div className='form-label'>
                          {label}
                          {tipEl}
                        </div>
                      : null;

    return (
      <div className={controlClass}>
        {labelEl}
        {children}
      </div>
    );
  }


  /**
   * `.form-valid` class
   */
  onValid() {
    const control = React.findDOMNode(this);

    control.classList.remove('form-invalid');
    control.classList.add('form-valid');
  }


  /**
   * `.form-invalid` class
   */
  onInvalid() {
    const control = React.findDOMNode(this);

    control.classList.remove('form-valid');
    control.classList.add('form-invalid');
  }


  /**
   * `.form-focus` class
   */
  onFocus(cb, e) {
    React.findDOMNode(this).classList.add('form-focus');
    cb && cb.call(null, e);
  }


  /**
   * remove `.form-focus` class
   */
  onBlur(cb, e) {
    const value = e.target.value,
          classList = React.findDOMNode(this).classList;

    classList.remove('form-focus');

    if (value) {
      classList.add('form-has-data');
    } else {
      classList.remove('form-has-data');
    }

    cb && cb.call(null, e);
  }
}