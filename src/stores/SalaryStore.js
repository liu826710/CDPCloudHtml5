/**
 * Home store
 */


'use strict';

import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';

import SalaryDataUtils from '../data-utils/SalaryDataUtils';


class SalaryStore extends ReduceStore {

  getInitialState() {
    return {
      basicInfo: {},
      status: 'loading',
      total: 0,
      infoList: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
    case 'get-salary':
      SalaryDataUtils.getSalary(action.data);
      return assign({}, state, {
        status: 'loading'
      });
    case 'get-salary-success':
      return assign({}, state, action.data.data, {
        status: 'loaded'
      });
    }
    return state;
  }
}


export default new SalaryStore(Dispatcher);