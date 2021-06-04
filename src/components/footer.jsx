import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<a href="#top" className="footer__logo"><span class="visually-hidden">Логотип ЛИГА Банк</span></a>
				<div className="footer__location">
					<p className="footer__location-text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
				</div>
				<nav className="footer-navigation">
						<ul className="footer-navigation__list">
							<li className="footer-navigation__list-item">
								<a className="footer-navigation__item-link" href="#top">Услуги</a>
							</li>
							<li className="footer-navigation__list-item">
								<a className="footer-navigation__item-link" href="#creditCalculator">Рассчитать кредит</a>
							</li>
							<li className="footer-navigation__list-item">
								<a className="footer-navigation__item-link" href="#top">Контакты</a>
							</li>
							<li className="footer-navigation__list-item">
								<a className="footer-navigation__item-link" href="#top">Задать вопрос</a>
							</li>
						</ul>
					</nav>
				<div className="footer-hotline">
					<div className="footer-hotline__phone footer-hotline__phone--cell">
						<p className="footer-hotline__title footer-hotline__title--cellphone">*0904</p>
						<small className="footer-hotline__info footer-hotline__info--cellphone">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</small>
					</div>
					<div className="footer-hotline__phone footer-hotline__phone--regular">
						<p className="footer-hotline__title footer-hotline__title--phone">8 800 111 22 33</p>
						<small className="footer-hotline__info footer-hotline__info--phone">Бесплатный для всех городов России</small>
					</div>
				</div>
				<ul className="footer-social">
					<li className="footer-social__item">
						<a className="footer-social__link footer-social__link--facebook" href="#top"aria-label="Наша страница в Фейсбук"><span className="visually-hidden"></span></a>
					</li>
					<li className="footer-social__item">
						<a className="footer-social__link footer-social__link--instagram" href="#top"><span className="visually-hidden">Наша страница в Инстаграм</span></a>
					</li>
					<li className="footer-social__item">
						<a className="footer-social__link footer-social__link--twitter" href="#top"><span className="visually-hidden">Наша страница в Твиттер</span></a>
					</li>
					<li className="footer-social__item">
						<a className="footer-social__link footer-social__link--youtube" href="#top"><span className="visually-hidden">Наша страница в Ютьюб</span></a>
					</li>
				</ul>
			</div>
		</footer>
	)
};

export default Footer;
