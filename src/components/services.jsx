import React from 'react';
import PropTypes from 'prop-types';

import {withServices} from '../hocs/with-services';
import Identificator from './identificator';
import {SERVICES} from '../mocks';

const Services = (props) => {
	const {onTabChange, onSwipeStartSlider, activeSlide, servicesListRef} = props;
	return (
		<section className="services">
			<div className="services__wrapper">

				<ul className="services__tabs">
				{SERVICES.map((element, i) => {
						return (
							<li key={i} value={i + 1} className={`services__tab ${activeSlide - 1 === i ? `services__tab--active` : ``} services__tab--${element.modificator}`} onClick={onTabChange}>{element.tabTitle}</li>
						);
					})}
				</ul>

				<ul className="services__list" style={{marginLeft: `-${(activeSlide - 1) * 100}%`}} onMouseDown={onSwipeStartSlider} onTouchStart={onSwipeStartSlider} ref={servicesListRef}>
					{SERVICES.map((element, i) => {
						return (
							<li key={i} className={`services__item services__item--${element.modificator}`}>

								<div className={`services__item-wrapper services__item-wrapper--${element.modificator}`}>
									<h3 className={`services__item-title services__item-title--${element.modificator}`}>{element.title}</h3>

									<ul className={`services__options-list  services__options-list--${element.modificator}`}>
										{element.optoins.map((option, optionIndex) => {
											return (
												<li key={optionIndex}>
													<p className="services__option">{option}</p>
												</li>
											);
										})}
									</ul>

									{element.offer === `credit` && (
										<p className="services__offer" >Рассчитайте ежемесячный платеж {<br/>}
										и ставку по кредиту воспользовавшись нашим<a href="#top" className="services__offer-link"> кредитным калькулятором</a></p>
									)}

									{element.buttonText !== undefined && (
										<a href="#top" className="services__option-button">{element.buttonText}</a>
									)}
								</div>

							</li>
						)
					})}
				</ul>

				<Identificator array={SERVICES} activeElement={activeSlide} type={`services`}/>

			</div>

		</section>
	);
};

Services.propTypes = {
	activeSlide: PropTypes.number.isRequired,
	onSwipeStartSlider: PropTypes.func.isRequired,
	onTabChange: PropTypes.func.isRequired,
	servicesListRef: PropTypes.shape({}).isRequired,
	sliderWidth: PropTypes.number,
}

export default withServices(Services);
