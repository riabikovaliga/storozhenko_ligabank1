import React from 'react';
import PropTypes from 'prop-types';

import {withSlider} from '../hocs/with-slider';
import Identificator from './identificator';

import {SLIDES} from '../mocks';

const Slider = (props) => {
	const {activeSlide, onSwipeStartSlider, sliderListRef} = props;
	return (
		<section className="slider">
			<div className="slider__container">
				<ul className="slider__list" ref={sliderListRef} style={{marginLeft: `-${(activeSlide - 1) * 100}vw`}} onTouchStart={onSwipeStartSlider} onMouseDown={onSwipeStartSlider}>
					{SLIDES.map((slide, index) => {
						return (
							<li key={index} className={`slider__item ${slide.modificator !== `` ? `slider__item--${slide.modificator}` : ``}`}>
								<div className={`slider__background ${slide.modificator !== `` ? `slider__background--${slide.modificator}` : ``}`}></div>
								<div className={`slider__block ${slide.modificator !== `` ? `slider__block--${slide.modificator}` : ``}`}>
									<p className={`slider__title ${slide.modificator !== `` ? `slider__title--${slide.modificator}` : ``}`}>{slide.title}</p>
									<h2 className={`slider__text ${slide.modificator !== `` ? `slider__text--${slide.modificator}` : ``}`}>{slide.text}</h2>
									{slide.modificator !== `` && slide.buttonText !== `` && (
									<a className={`slider__button ${`slider__button--${slide.modificator}`}`} href={slide.href !== undefined ? slide.href : ``}>{slide.buttonText}</a>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<Identificator array={SLIDES} activeElement={activeSlide} />

		</section>
	);
};

Slider.propTypes = {
	activeSlide: PropTypes.number.isRequired,
	onSwipeStartSlider: PropTypes.func.isRequired,
	sliderListRef: PropTypes.shape({}).isRequired,
	sliderWidth: PropTypes.number,
}

export default withSlider(Slider);
