import React from 'react';
// MobX
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react';
// Models
import rListModel from "./rList.model";
// Components
import RListItem from "./RListItem.component";


@observer
class RList extends React.Component {


	static displayName = 'RList.component';

	static propTypes = {
	};


	@observable containerRef = React.createRef();

	@observable itemRef = React.createRef();


	componentDidMount() {
		if(!this.containerRef.current) return;

		rListModel.update({
			itemWidth:  this.itemRef.current.offsetWidth,
			itemHeight: this.itemRef.current.offsetHeight
		});

		window.addEventListener('scroll', (event)=> {
			rListModel.update({
				listScrollTop: window.pageYOffset - this.containerRef.current.offsetTop
			});
		});

		window.addEventListener('resize', (event)=> {
			rListModel.update({
				itemWidth:  this.itemRef.current.offsetWidth,
				itemHeight: this.itemRef.current.offsetHeight
			});
		});
	}

	@computed get rList() { return rListModel.rList; };

	@computed get itemsInRow() { return Math.round(this.containerRef.current.offsetWidth / this.rList.itemWidth); };

	@computed get widthOfPart() { return this.itemsInRow * this.rList.itemWidth; };

	@computed get rowsInPart() { return Math.floor(window.innerHeight / this.rList.itemHeight); };

	@computed get itemsInPart() { return this.rowsInPart * this.itemsInRow; };

	@computed get heightOfPart() { return this.rowsInPart * this.rList.itemHeight; };

	@computed get visibleCurrentPart() {
		const visibleCurrentValue = Math.ceil(this.rList.listScrollTop / this.heightOfPart);
		return visibleCurrentValue > 0 ? visibleCurrentValue : 1;
	};


	get partsCount() { return Math.ceil(this.items.length / this.itemsInPart) };

	get gameParts() { return this.chunk(this.items, this.itemsInPart); };

	get items() { return this.props.children.type ? [this.props.children] : this.props.children; };


	chunk(array, chunkSize) {
		return [].concat.apply([], array.map(function (elem, i) {
			return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
		}));
	}

	isInRange(x, min, max) { return ((x-min)*(x-max) <= 0); };


	isRenderPart(partNumber) {
		// rendering of previous, current, next parts in relation to currentVisible part
		return this.isInRange(this.visibleCurrentPart, partNumber-1, partNumber+2);
	}


	renderFakeList() {
		return (
			<div className="r-list" style={{ opacity: 0, position: "absolute" }}>
				<div ref={ this.itemRef }
					 style={{ display: "inline-block" }}>
					{ this.items[0] }
				</div>
			</div>
		);
	}


	renderParts() {
		return (
			<div className="r-list-parts">
				{ Array.apply(null, new Array(this.partsCount)).map((item, partNumber)=> {
					return this.renderPart(partNumber);
				}) }
			</div>
		);
	}
	
	
	renderPart(partNumber) {
		if(!this.isRenderPart(partNumber)) return this.renderPlaceholder();

		return (
			<div className={ `r-list-part-${partNumber}`}>
				{ this.gameParts[partNumber].map((item, index)=> <RListItem>{ item }</RListItem>) }
			</div>
		);
	}


	renderPlaceholder() {
		return (
			<div style={{
				width: this.widthOfPart,
				height: this.heightOfPart,
				background: "transparent"
			}} />
		);
	}


	render() {
		if(!this.props.children) return <div className="r-list">empty</div>;

		return (
			<div>
				{ this.containerRef.current ?
					<div style={{ position: "fixed", bottom: 5, zIndex: "1", right: 5, background: "lightgray", padding: 10 }}>
						<p>itemWidth: { this.rList.itemWidth }</p>
						<p>itemHeight: { this.rList.itemHeight }</p>
						<p>itemsInRow: { this.itemsInRow }</p>
						<p>widthOfPart: { this.widthOfPart }</p>
						<p>rowsInPart: { this.rowsInPart }</p>
						<p>itemsInPart: { this.itemsInPart }</p>
						<p>heightOfPart: { this.heightOfPart }</p>
						<p>partsCount: { this.partsCount }</p>
						<p>visibleCurrentPart: { this.visibleCurrentPart }</p>
					</div>
				: null }

				<div className="r-list" ref={ this.containerRef }>
					{ this.containerRef.current ? this.renderParts() : null }
				</div>

				{ this.renderFakeList() }
			</div>
		);
	}
}

export default RList;