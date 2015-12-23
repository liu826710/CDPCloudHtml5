/**
 * Profile container
 */


'use strict';

import React, { Component } from 'react';
import { Container } from 'flux/utils';
import dispatcher, { dispatch } from '../dispatcher/Dispatcher';

import { getItem as getLang } from '../common/lang';
import Header from '../components/Header/Header.jsx';
import Loader from '../components/Loader/Loader.jsx';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import InfoCard from '../components/InfoCard/InfoCard.jsx';
import TopAction from '../components/TopAction/TopAction.jsx';
import ProfileStore from '../stores/ProfileStore';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.getProfileCategories(this.props.params.id);
  }

  static getStores() {
    return [ProfileStore];
  }

  static calculateState() {
    return ProfileStore.getState();
  }

  render() {
    const {
            basicInfo,
            infoList,
            status,
            picInfo = {}
          } = this.state,

      listElements = infoList.map((list) => {

        return (
          <div key={list.cmdId}>
            <h2 className='info-card-heading gap-t gap-b'
                onTouchTap={this.loadCategory.bind(null, list)}>
              {list.pla_lan}

              {
                list.items ? null : <i className='fa fa-angle-double-down pull-right' style={{marginTop: '0.25rem'}}></i>
              }
            </h2>

            {
              list.status
                ? <Loader status={list.status}>
                    {
                      list.items && list.items.map((card, index) => {
                        return <InfoCard items={card} key={index} />;
                      })
                    }
                  </Loader>
                : null
            }

            <hr className='gap-t-lg gap-b-lg' />

            <TopAction />
          </div>
        );
      });

    return (
      <div>
        <Header back title={getLang('PROFILE')} />

        <Loader status={status} className='side-gap pad-b'>
          {
            picInfo
              ? <UserInfo className='gap-t-lg gap-b-lg' userInfo={picInfo} />
              :null
          }

          {listElements}
        </Loader>
      </div>
    );
  }


  /**
   * Get profile category list
   * @param id
   */
  getProfileCategories(id) {
    dispatch({
      type: 'get-profile-categories',
      data: id
    });
  }


  /**
   * Load a list of info items
   * @param list
   */
  loadCategory(list) {

    if (!list.items && (list.status !== 'loading')) {
      dispatch({
        type: 'get-profile-category-detail',
        data: list.cmdId
      });
    }
  }


  /**
   * Get an employees profile
   * @param {number} [id]
   */
  getProfile(id) {
    dispatch({
      type: 'get-profile',
      data: id
    });
  }
}


export default Container.create(Profile);