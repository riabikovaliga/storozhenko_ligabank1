import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import {withCreditRequest} from '../hocs/with-credit-request';
import {CREDIT_TYPE_TRANSLATE} from '../const';
import {valueMask, shakeEffect} from '../util/util';

const CreditRequest = (props) => {
	const {onInputChange, onFormSubmit, creditType, ownValue, initialFee, loanTerms} = props;
	const requestNumber = localStorage.getItem(`requestNumber`);
	return (
		<form className="credit-request" onSubmit={onFormSubmit}>
			<fieldset className="credit-request__fieldset">
				<legend className="credit-request__title">Шаг 3. Оформление заявки</legend>
					<ul className="credit-request__credit-info">
						<li className="credit-request__credit-info-item">
							<p className="credit-request__credit-info-parameter">№ {(`0000` + requestNumber).slice(-4)}</p>
							<h4 className="credit-request__credit-info-title">Номер заявки</h4>
						</li>
						<li className="credit-request__credit-info-item">
							<p className="credit-request__credit-info-parameter">{CREDIT_TYPE_TRANSLATE[creditType]}</p>
							<h4 className="credit-request__credit-info-title">Цель кредита</h4>
						</li>
						<li className="credit-request__credit-info-item">
							<p className="credit-request__credit-info-parameter">{valueMask(ownValue)}</p>
							<h4 className="credit-request__credit-info-title">Стоимость {creditType === `mortgage` ? `недвижимости` : `автомобиля`}</h4>
						</li>
						<li className="credit-request__credit-info-item">
							<p className="credit-request__credit-info-parameter">{valueMask(initialFee)}</p>
							<h4 className="credit-request__credit-info-title">Первоначальный взнос</h4>
						</li>
						<li className="credit-request__credit-info-item">
							<p className="credit-request__credit-info-parameter">{loanTerms + ` лет`}</p>
							<h4 className="credit-request__credit-info-title">Срок кредитования</h4>
						</li>
					</ul>
						<fieldset className="credit-request__user-info">
							<input onChange={onInputChange} name="name" value={localStorage.getItem(`name`) !== null ? localStorage.getItem(`name`) : ``} className="credit-request__user-info-field credit-request__user-info-field--name" type="text" placeholder="ФИО" required onInvalid={(evt) => {
								shakeEffect(evt.currentTarget);
							}} />
							<InputMask minLength={999} onChange={onInputChange} maskChar="" name="telephone" value={localStorage.getItem(`telephone`) !== null ? localStorage.getItem(`telephone`) : ``} mask="+7 (999) 999-99-99" className="credit-request__user-info-field credit-request__user-info-field--phone" type="tel" placeholder="Телефон" required/>
							<input onChange={onInputChange} name="email" value={localStorage.getItem(`email`) !== null ? localStorage.getItem(`email`) : ``} className="credit-request__user-info-field credit-request__user-info-field--email" type="email" placeholder="E-mail" required onInvalid={(evt) => {
								shakeEffect(evt.currentTarget);
							}} />
						</fieldset>
			</fieldset>
			<button className="credit-request__submit" type="submit">Отправить</button>
		</form>
	);
};

CreditRequest.propTypes = {
	creditType: PropTypes.string.isRequired,
	initialFee: PropTypes.number.isRequired,
	loanTerms: PropTypes.number.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	ownValue: PropTypes.number.isRequired,
}

export default withCreditRequest(CreditRequest);