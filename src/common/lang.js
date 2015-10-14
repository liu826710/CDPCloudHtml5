/**
 * Lauguages
 */


'use strict';

import cookies from '../common/utils/cookies';


const supported = ['zh', 'en', 'jp'];

const lang = {

  zh: {

    // Login
    COMPANY: '公司',
    USERNAME: '用户',
    PASSWORD: '密码',
    LOGIN: '登　录',
    REMEMBER: '记住我',
    FORGOT_PWD: '忘记密码',
    COPYRIGHT: 'CDP © 2015 版权所有',

    // Forgot password
    MOBILE: '手机',
    CAPTCHA: '验证码',
    GET_CAPTCHA: '获得验证码',
    RETRY_CAPTCHA: '秒后重试',
    NEXT: '下一步',
    NEW_PWD: '新密码',
    REPEAT_PWD: '再次输入密码',
    RESET_PWD: '重置密码',
    AT_LEAST_6: '至少 6 位',
    SAME_PWD: '必须和密码相同',
    PWD_RESET_SUCCESS: '密码重置成功',

    // HOME
    EMPLOYEE: '员工',
    MANAGER: '经理',

    PROFILE: '个人信息',
    MY_SALARY: '我的薪酬',
    MY_LEAVE: '请假',
    MY_OT: '加班',
    TEAM_PROFILE: '团队信息',
    LEAVE_MGR: '请假管理',
    OT_MGR: '加班管理',

    CHANGE_PWD: '修改密码',
    CHANGE_MOBILE: '修改手机',
    LOGOUT: '退出登录',

    // Profile
    WORK_EXP: '工作经历',

    // Salary
    YEAR: '年',
    MONTH: '月',
    ACTUAL_SALARY: '实发工资',

    // Team profile
    ENTER_USER_SEARCH: '员工姓名、基本资料…',
    NAME: '姓名',
    JOIN_TIME: '入职时间',

    // Leave
    APPLY_LEAVE: '申请休假',
    MY_APPLY: '我的申请',
    LEAVE_QUOTA: '假期配额',
    LEAVE_SUMMARY: '假期汇总',
    APPLY_SUCCESS: '申请成功',
    ALL: '全部',
    TIME: '时间',
    THIS_WEEK: '本周',
    THIS_MONTH: '本月',
    THIS_YEAR: '今年',
    TYPE: '类型',
    STATUS: '状态',
    APPROVED: '已审批',
    PENDING: '未审批',
    REJECTED: '已拒绝',

    // Validation
    REQUIRED: '必填',

    // Pull loader
    PULL_TO_LOAD: '上拉加载更多',
    NO_MORE_DATA: '没有更多数据了',

    // Punctuation
    COLON: '：',
    COMMA: '，'
  },

  en: {

    // Login
    COMPANY: 'Company',
    USERNAME: 'User',
    PASSWORD: 'Password',
    LOGIN: 'Login',
    REMEMBER: 'Remember me',
    FORGOT_PWD: 'Forgot password',
    COPYRIGHT: 'CDP © 2015 All rights reserved',

    // Forgot password
    MOBILE: 'Mobile',
    CAPTCHA: 'CAPTCHA',
    GET_CAPTCHA: 'Get CAPTCHA',
    RETRY_CAPTCHA: 'seconds',
    NEXT: 'Next',
    NEW_PWD: 'New password',
    REPEAT_PWD: 'Enter password again',
    RESET_PWD: 'Reset Password',
    AT_LEAST_6: 'At least 6 characters',
    SAME_PWD: 'Must the same as password',
    PWD_RESET_SUCCESS: 'Password reset succeeded.',

    // HOME
    EMPLOYEE: 'Employee',
    MANAGER: 'Manager',

    PROFILE: 'Profile',
    MY_SALARY: 'My Salary',
    MY_LEAVE: 'Leave',
    MY_OT: 'Overtime',
    TEAM_PROFILE: 'Team Profile',
    LEAVE_MGR: 'Leave Management',
    OT_MGR: 'Overtime Management',

    CHANGE_PWD: 'Change Password',
    CHANGE_MOBILE: 'Change Mobile',
    LOGOUT: 'Log out',

    // Profile
    WORK_EXP: 'Work Experience',

    // Salary
    YEAR: 'Year',
    MONTH: 'Month',
    ACTUAL_SALARY: 'Actual income',

    // Team profile
    ENTER_USER_SEARCH: 'Employee name, info, etc.',
    NAME: 'Name',
    JOIN_TIME: 'Join Time',

    // Leave
    APPLY_LEAVE: 'Apply for Leave',
    MY_APPLY: 'Applications',
    LEAVE_QUOTA: 'Quota',
    LEAVE_SUMMARY: 'Summary',
    APPLY_SUCCESS: 'Your application was successfully sent.',

    // Validation
    REQUIRED: 'Required',

    // Pull loader
    PULL_TO_LOAD: 'Pull up to load more',
    NO_MORE_DATA: 'No more data',

    // Punctuation
    COLON: ': ',
    COMMA: ', '
  },

  jp: {

    // Login
    COMPANY: '株式会社',
    USERNAME: 'ユーザー',
    PASSWORD: 'パスワード',
    LOGIN: 'ログイン',
    REMEMBER: '私を覚えて',
    FORGOT_PWD: 'パスワードを忘れました',
    COPYRIGHT: 'CDP © 2015 版権所有',

    // Forgot password
    MOBILE: '携帯電話',
    CAPTCHA: 'キャプチャ',
    GET_CAPTCHA: 'キャプチャを得る',
    RETRY_CAPTCHA: '秒後リトライ',
    NEXT: '次に',
    NEW_PWD: '新パスワード',
    REPEAT_PWD: 'パスワードを再入力',
    RESET_PWD: 'パスワードをリセット',
    AT_LEAST_6: '至少 6 位',
    SAME_PWD: 'パスワードと同じなければならない',
    PWD_RESET_SUCCESS: 'パスワードをリセットし',

    // HOME
    EMPLOYEE: '従業員',
    MANAGER: 'マネージャー',

    PROFILE: 'プロフィール',
    MY_SALARY: '私の給料',
    MY_LEAVE: '休暇',
    MY_OT: '残業',
    TEAM_PROFILE: 'チームプロフィール',
    LEAVE_MGR: '休暇管理',
    OT_MGR: '残業管理',

    CHANGE_PWD: 'Change Password',
    CHANGE_MOBILE: 'Change Mobile',
    LOGOUT: 'ログアウト',

    // Profile
    WORK_EXP: '仕事の経歴',

    // Salary
    YEAR: '年',
    MONTH: '月',
    ACTUAL_SALARY: '実給料',

    // Team profile
    ENTER_USER_SEARCH: '社員の名前、情报…',
    NAME: '名前',
    JOIN_TIME: '入職時間',

    // Leave
    APPLY_LEAVE: '申請する',
    MY_APPLY: '私を申請',
    LEAVE_QUOTA: '割当',
    LEAVE_SUMMARY: 'まとめ',
    APPLY_SUCCESS: '申請成功',

    // Validation
    REQUIRED: '必要です',

    // Pull loader
    PULL_TO_LOAD: 'プルアップ',
    NO_MORE_DATA: 'もっとのデータがない',

    // Punctuation
    COLON: '：',
    COMMA: '，'
  }
};

const bl = navigator.browserLanguage;
const ls = navigator.languages;
const l = navigator.language;

let defaultLang = cookies.getItem('lang')
                    || (bl && bl.split('-')[0]) // IE11+
                    || (ls && ls[0] && ls[0].split('-')[0])
                    || (l && l.split('-')[0]);

if (supported.indexOf(defaultLang) === -1) {
  defaultLang = 'en';
}


export default {

  setLang(code) {
    defaultLang = code;
    cookies.setItem('lang', code);
  },

  getLang() {
    return defaultLang;
  },

  getItem(key) {
    return lang[defaultLang][key] || '';
  }
};