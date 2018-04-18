import React from 'react';
import ReactDOM from 'react-dom';
// RList
import RList from "./RList.component";


class Test extends React.Component {

	render () {
		return (
			<div>
				Hello ditch!!
				<RList />
			</div>
		);
	}
}


// Testing
ReactDOM.render(<Test />, document.getElementById('root'));

module.exports = { a: 42 };