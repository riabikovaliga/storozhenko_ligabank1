import React, {createRef, PureComponent} from "react";

import {SLIDES} from "../mocks";
import {DESKTOP_WIDTH_BORDER, SLIDE_TIME} from "../const";

export const withSlider = (Component) => {
	class WithSlider extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				activeSlide: 1,
			}

			this.sliderListRef = createRef();

			this.activeSlidePosition = 0;

			this.onSwipeStartSlider = this.onSwipeStartSlider.bind(this);
			this._onSwipeMoveSlider = this._onSwipeMoveSlider.bind(this);
			this._onSwipeEndSlider = this._onSwipeEndSlider.bind(this);

			this._setIntervalChangeSlider = this._setIntervalChangeSlider.bind(this);
			this._removeIntervalChangeSlider = this._removeIntervalChangeSlider.bind(this);
		}

		_setIntervalChangeSlider() {
			this.sliderInterval = setInterval(() => {
				this.setState({activeSlide: this.state.activeSlide === SLIDES.length ? 1 : this.state.activeSlide + 1});
			}, SLIDE_TIME);
		}

		_removeIntervalChangeSlider() {
			clearInterval(this.sliderInterval);
		}

		componentDidMount() {
			this._setIntervalChangeSlider();
		}

		onSwipeStartSlider(evt) {
			this.sliderWidth = evt.view.innerWidth;
			
			if (this.sliderWidth >= DESKTOP_WIDTH_BORDER) {
				return;
			}
			this.sliderListRef.current.style.transition = `unset`;

			this._removeIntervalChangeSlider();

			this.slider = evt.currentTarget;
			const evtType = evt.type === `touchstart` ? evt.changedTouches[0] : evt;
			
			this.swipeLengthStart = evtType.clientX;
			this.swipeStartX = evtType.clientX;
			this.activeSlidePosition = (this.state.activeSlide - 1) * -this.sliderWidth;
			
			document.addEventListener(`touchmove`, this._onSwipeMoveSlider);
			document.addEventListener(`mousemove`, this._onSwipeMoveSlider);
			document.addEventListener(`touchend`, this._onSwipeEndSlider);
			document.addEventListener(`mouseup`, this._onSwipeEndSlider);
		}
		
		_onSwipeMoveSlider(evt) {
			const evtType = evt.type === `touchmove` ? evt.changedTouches[0] : evt;
			let swipeEndX = evtType.clientX;
			this.differenceX = this.swipeStartX - swipeEndX;

			
			this.activeSlidePosition += -this.differenceX;
			
			this.slider.style.marginLeft = `${this.activeSlidePosition}px`;

			if (this.activeSlidePosition <= (SLIDES.length - 1) * -this.sliderWidth) {
				this.slider.style.marginLeft = `${(SLIDES.length - 1) * -this.sliderWidth}px`;
			} else if (this.activeSlidePosition >= 0) {
				this.slider.style.marginLeft = `0px`;
			}

			this.swipeStartX = swipeEndX;
		}
		
		_onSwipeEndSlider(evt) {
			this.sliderListRef.current.style.transition = `margin-left 1s ease`;
			document.removeEventListener(`touchmove`, this._onSwipeMoveSlider);
			document.removeEventListener(`mousemove`, this._onSwipeMoveSlider);
			document.removeEventListener(`touchend`, this._onSwipeEndSlider);
			document.removeEventListener(`mouseup`, this._onSwipeEndSlider);

			let activeSlideStartPositionAbsolute = (this.state.activeSlide - 1) * this.sliderWidth;
			let swipeLength = -1 * (this.swipeLengthStart - evt.clientX);

			
			if (swipeLength <= -this.sliderWidth / 2) {
				this.setState({activeSlide: this.state.activeSlide === SLIDES.length ? 1 : this.state.activeSlide + 1});
				this._setIntervalChangeSlider();
				return;
			}
			
			if (swipeLength >= this.sliderWidth / 2) {
				this.setState({activeSlide: this.state.activeSlide === 1 ? SLIDES.length : this.state.activeSlide - 1});
				this._setIntervalChangeSlider();
				return;
			}
			
			this.slider.style.marginLeft = `-${activeSlideStartPositionAbsolute}px`;
			this._setIntervalChangeSlider();
		}

		render() {
			return (
				<Component
					activeSlide={this.state.activeSlide}
					sliderWidth={this.sliderWidth}
					onSwipeStartSlider={this.onSwipeStartSlider}
					sliderListRef={this.sliderListRef}
				/>
			);
		}
	}
	return WithSlider;
}
