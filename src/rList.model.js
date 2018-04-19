import React from 'react';
// MobX
import { action, observable, runInAction } from 'mobx';


class RListModel {

	@observable rList = {
		containerWidth: 0,
		listScrollTop: 0,
		itemWidth: 0,
		itemHeight: 0
	};


	@action
	update(rList) {
		for(const key in rList) {
			this.rList[key] = rList[key];
		}
	}
}


export default new RListModel;