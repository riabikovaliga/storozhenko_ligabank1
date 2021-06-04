import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
	const {isNavigationOpen} = props;
	return (
		<nav className={`navigation ${isNavigationOpen ? `navigation--open`: ``}`}>
			<ul className="navigation__list navigation__list--header">
				<li className="navigation__list-item navigation__list-item--header">
					<a className="navigation__item-link  navigation__item-link--header" href="#top">Услуги</a>
				</li>
				<li className="navigation__list-item navigation__list-item--header">
					<a className="navigation__item-link  navigation__item-link--header" href="#top">Рассчитать кредит</a>
				</li>
				<li className="navigation__list-item navigation__list-item--header">
					<a className="navigation__item-link  navigation__item-link--header" href="#top">Конвертер валют</a>
				</li>
				<li className="navigation__list-item navigation__list-item--header">
					<a className="navigation__item-link  navigation__item-link--header" href="#top">Контакты</a>
				</li>
			</ul>
		</nav>
	);
};

Navigation.propTypes = {
	isNavigationOpen: PropTypes.bool.isRequired,
}

export default Navigation;
