/**
 * Created by AshZhang on 15/10/8.
 */


'use strict';

import dispatcher, { dispatch } from '../dispatcher/Dispatcher';

import ajax from '../common/utils/ajax';


export default {


  /**
   * Get leave form
   */
  getLeaveForm() {
    ajax.get('/leave-form')
      .then((form) => {

        ajax.getScript('/leave-validation')
          .then(() => {

            setTimeout(() => {
              dispatch({
                type: 'get-leave-form-success',
                data: form.data
              });
            }, 200);
          });
      });
  },


  /**
   * Get leave types
   */
  getLeaveTypes() {
    ajax.get('/leave-types')
      .then((res) => {
        dispatch({
          type: 'get-leave-types-success',
          data: res.data
        });
      });
  },


  /**
   * Get an employee's leave records
   * @param {Object} [params]
   */
  getEmpLeaveRecords(params) {
    ajax.get('/leave-records', params)
      .then((res) => {
        dispatch({
          type: 'get-emp-leave-records-success',
          data: res.data
        });
      });
  }
};