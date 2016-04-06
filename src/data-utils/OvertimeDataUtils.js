/**
 * Created by AshZhang on 2016-4-5.
 */


import { dispatch } from '../dispatcher/Dispatcher';

import ajax, { ajaxDispatch } from '../common/utils/ajax';


export default {

	getEmpOtList(data) {
		ajaxDispatch({
			action: 'get-emp-ot-list',
			url: '/ess-ot-list',
			method: 'get',
			data: data
		});
	},

	getEmpOtRecord(id) {
		ajaxDispatch({
			action: 'get-emp-ot-record',
			url: '/ess-ot-detail',
			method: 'get',
			data: {
				id
			}
		});
	},

	getOtForm() {
		dispatch({
			type: 'get-ot-form'
		});

		ajax.get('/ess-ot-config')
			.then((form) => {

				ajax.getScript(form.JS_CONFIG_FILE)
					.then(() => {

						dispatch({
							type: 'get-ot-form-success',
							data: form
						});
					});
			});
	},

	insertOt(formData) {
		ajaxDispatch({
			action: 'insert-ot-form',
			url: '/ess-insert-ot',
			method: 'post',
			data: formData
		});
	},

	getEmpOtSummary(id) {
		ajaxDispatch({
			action: 'get-emp-ot-summary',
			url: '/ess-ot-summary',
			method: 'get',
			data: id ? { id } : null
		});
	},

	getPendingRecords(query) {
		ajaxDispatch({
			action: 'get-ot-pending-records',
			url: '/mss-ot-todolist',
			method: 'get',
			data: query
		});
	},

	approveRecord(data) {
		ajaxDispatch({
			action: 'approve-ot-pending-record',
			url: '/mss-ot-approve',
			method: 'post',
			data
		});
	},

	getTeamMembers(query) {
		ajaxDispatch({
			action: 'get-ot-history-members',
			url: '/ot-history-member',
			method: 'get',
			data: query
		});
	},

	getHistoryDetail(id) {
		ajaxDispatch({
			action: 'get-ot-history-detail',
			url: '/ot-approve-otdetail',
			method: 'get',
			data: {
				id
			}
		});
	},

	getSummaryMembers(query) {
		ajaxDispatch({
			action: 'get-ot-summary-list',
			url: '/team-info-page',
			method: 'get',
			data: query
		});
	}
};
