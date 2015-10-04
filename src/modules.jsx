/**
 * Modules development
 */


'use strict';

import '../node_modules/font-awesome/css/font-awesome.css';
import './common/styles/app.less';

import React, { Component } from 'react';
import ReactTap from 'react-tap-event-plugin';

import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';
import Tab from './components/Tab/Tab.jsx';
import Sorter from './components/Sorter/Sorter.jsx';
import ActionMenu from './components/ActionMenu/ActionMenu.jsx';
import Button from './components/Button/Button.jsx';
import TextInput from './components/TextInput/TextInput.jsx';
import Select from './components/Select/Select.jsx';
import Checkbox from './components/Checkbox/Checkbox.jsx';
import FormControl from './components/FormControl/FormControl.jsx';
import Form from './components/Form/Form.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import UserList from './components/UserList/UserList.jsx';
import InfoCard from './components/InfoCard/InfoCard.jsx';
import Chart from './components/Chart/Chart.jsx';
import PageOpener from './components/PageOpener/PageOpener.jsx';


React.initializeTouchEvents(true);
ReactTap();


// Callbacks
// ---------------------------

function onEvent(e) {
  console.log(e.type);
}

function activateTab(name) {
  console.log(name);
}

function onSort(name, order) {
  console.log(name, order);
}

function onSearch(text) {
  console.log(text);
}

function afterSubmit(res) {
  console.log(res);
}


// Render
// ---------------------------

const dropdownItems = {
  items: [{
    text: '中文',
    name: 'zh'
  },
  {
    text: 'English',
    name: 'en'
  }],
  onClickItem(name) {
    console.log(name);
  }
};

const tabItems = [
  {
    text: '菜单 1',
    name: 'points',
    notification: true
  },
  {
    text: '菜单 2',
    name: 'gift'
  },
  {
    text: '菜单 3',
    name: 'address'
  }
];

const actionMenuItems = [
  {
    text: '我的信息',
    style: 1,
    icon: 'user',
    link: 'profile',
    label: 99
  },
  {
    text: '我的薪资',
    style: 2,
    icon: 'money',
    link: 'my-salary',
    label: 8
  },
  {
    text: '请假',
    style: 3,
    icon: 'plane',
    link: 'my-leave'
  },
  {
    text: '加班',
    style: 4,
    icon: 'coffee',
    link: 'my-ot'
  }
];

const userInfo = {
  userInfo: {
    id: 1,
    name: '张阿十',
    avatar: 'a2e0012df0916596196342a0915d6c5f.png',
    position: '前端设计师'
  },
  action: {
    text: '查看薪资',
    link: '/#/salary/1'
  }
};

const userList = [
  {
    id: 1,
    name: '张阿十',
    avatar: 'a2e0012df0916596196342a0915d6c5f.png',
    position: '前端设计师'
  },
  {
    id: 2,
    name: '张阿十',
    avatar: 'a2e0012df0916596196342a0915d6c5f.png',
    position: '前端设计师'
  }
];

const infoCard =[
  {
    name: '姓名',
    value: '张阿十'
  },
  {
    name: '性别',
    value: '女'
  }
];

const selectItems = [
  {
    text: '2015',
    value: 2015
  },
  {
    text: '2016',
    value: 2016
  }
];

const chartData = [
  {
    value: 300,
    color: '#5dc9e6',
    label: '基本工资'
  },
  {
    value: 50,
    color: '#f773bd',
    label: '私活'
  },
  {
    value: 100,
    color: '#fdbb7d',
    label: '补贴'
  },
  {
    value: 40,
    color: '#6dded5',
    label: '报销'
  },
  {
    value: 120,
    color: '#a06081',
    label: '加班费'
  }
];

const sorterItems = [
  {
    text: '姓名',
    name: 'name',
    order: 'desc'
  },
  {
    text: '入职时间',
    name: 'joinTime',
    order: 'desc'
  }
];

const submitButton = {
  text: '登录',
  hollow: true
};

const controls = [
  {
    type: 'text',
    id: 'company',
    name: 'company',
    icon: 'home',
    label: 'Company',
    tips: '必填',
    required: true
  },
  {
    type: 'text',
    id: 'username',
    name: 'username',
    icon: 'user',
    label: 'Username',
    tips: '必填',
    required: true
  },
  {
    type: 'text',
    id: 'password',
    name: 'password',
    icon: 'lock',
    label: 'Password',
    tips: '必填',
    required: true
  },
  {
    type: 'checkbox',
    id: 'remember',
    name: 'remember',
    placeholder: 'Remember me'
  }
];

class Page extends Component {

  constructor(props) {
    super(props);
    this.openPage = this.openPage.bind(this);
  }

  render() {

    return (
      <div>
        <Header title='页面标题' iconLeft='sign-out' iconRight='cog'
                onTapLeft={onEvent} onTapRight={onEvent} />

        <Header title='页面标题' back>
          <Search placeholder='请输入搜索内容' onSearch={onSearch} />
        </Header>

        <Header title='页面标题' back dropdown={dropdownItems} />

        <Tab items={tabItems} onActivate={activateTab} />

        <Sorter items={sorterItems} defaultItem='name' onSort={onSort}></Sorter>

        <Form action='//localhost:9090/form' submitButton={submitButton} controls={controls}
              afterSubmit={afterSubmit}></Form>

        <TextInput icon='home' placeholder='用户名' defaultValue='Ash' />

        <Select options={selectItems} placeholder='年份'></Select>

        <Checkbox placeholder='记住我' defaultChecked={true} id='check' />

        <div className='row'>
          <div className='col-1-2'>
            <FormControl label='年份'>
              <Select options={selectItems} defaultValue='2015'></Select>
            </FormControl>
          </div>
          <div className='col-1-2'>
            <FormControl label='年份' tips='不得晚于 2015 年'>
              <TextInput required />
            </FormControl>
          </div>
        </div>

        <Button text='重置密码'></Button>

        <Button type='submit' text='登&nbsp;&nbsp;&nbsp;&nbsp;录' hollow></Button>

        <Button text='获取验证码' link onClick={this.openPage}></Button>

        <Chart height='200' data={chartData} />

        <UserInfo userInfo={userInfo.userInfo} action={userInfo.action}></UserInfo>

        <UserList userList={userList}></UserList>

        <InfoCard title='基本信息' items={infoCard}></InfoCard>

        <ActionMenu items={actionMenuItems} />

        <PageOpener ref='page'>
          <h1>获取验证码</h1>
        </PageOpener>
      </div>
    );
  }

  openPage(e) {
    this.refs.page.open(e);
  }
}

React.render(
  <Page />,
  document.getElementById('app')
);