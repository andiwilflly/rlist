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

	render() {
		return (
			<div>
				Hello ditch
				<RList>
					<div key="1" style={{
						width: 200,
						height: 100,
						background: 'orange',
						border: '1px solid black'
					}}>test1
					</div>
					<span key="2" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test2</span>
					<span key="3" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test23</span>
					<span key="4" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test4</span>
					<span key="5" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test5</span>
					<span key="6" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test6</span>
					<span key="7" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test7</span>
					<span key="8" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test8</span>
					<span key="9" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test9</span>
					<span key="10" style={{
						background: 'orange',
						border: '1px solid black'
					}}>test2</span>
				</RList>
			</div>
		);
	}
}


// Testing
ReactDOM.render(<Test/>, document.getElementById('root'));

module.exports = {a: 42};