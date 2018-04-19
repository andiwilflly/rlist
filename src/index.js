import React from 'react';
import ReactDOM from 'react-dom';
// RList
import RList from "./RList.component";


Object.defineProperty(Array.prototype, 'chunk', {
	value: function(chunkSize) {
		let array = this;
		return [].concat.apply([],
			array.map(function (elem, i) {
				return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
			})
		);
	}
});


class Test extends React.Component {

	times(times = 10, fn=()=>{}) { return Array.apply(null, new Array(times)).map(fn); };


	render() {
		return (
			<div style={{ width: "50%", margin: '0 auto' }}>
				<div style={{ height: 100 }}>test header</div>
				<RList>
					{ this.times(100, (item, index)=> <div key={index} style={{
						width: 200,
						height: 100,
						background: 'orange'
					}}>{ index }
					</div>) }
				</RList>
			</div>
		);
	}
}


// Testing
ReactDOM.render(<Test/>, document.getElementById('root'));

module.exports = {a: 42};