import React from 'react';
// MobX
import { observer } from 'mobx-react';
// Models
import rListModel from "./rList.model";


const RListItem = observer(function(props) {
	return(
		<div style={{
				 display: "inline-block",
				 width: rListModel.rList.itemWidth,
				 height: rListModel.rList.itemHeight
			 }}>
			{ props.children }
		</div>
	);
});


export default RListItem;