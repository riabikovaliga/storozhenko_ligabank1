import React from 'react';
import PropTypes from 'prop-types';

import {MIN_MORTGAGE_AMOUNT, MIN_CAR_CREDIT_AMOUNT} from '../const';
import {valueMask} from '../util/util';

const CreditOffer = (props) => {
	const {onFormOpen} = props;
	const {type, creditAmount, percentRate, monthlyPayment, necessaryIncome} = props.userCredit;
	const minCreditValue = type === `mortgage` ? MIN_MORTGAGE_AMOUNT : MIN_CAR_CREDIT_AMOUNT;
	return (
		<section className="credit-offer">

			{creditAmount < minCreditValue && (
				<>
					<h3 className="credit-offer__title">{`Наш банк не выдаёт ${type === `mortgage` ? `ипотечные кредиты` : `автокредиты`} меньше ${valueMask(minCreditValue)}.`}</h3>
					<p className="credit-offer__info">Попробуйте использовать другие параметры для расчёта.</p>
				</>
			)}

			{creditAmount >= minCreditValue && (
			<>
				<h3 className="credit-offer__title">Наше предложение</h3>
				<ul className="credit-offer__specification">
					<li className="credit-offer__specification-item">
						<p className="credit-offer__parameter">{valueMask(creditAmount)}</p>
						<h4 className="credit-offer__parameter-title">{`Сумма ${type === `mortgage` ? `ипотеки` : `автокредита`}`}</h4>
					</li>
					<li className="credit-offer__specification-item">
						<p className="credit-offer__parameter">{percentRate.replace(".",",") + `%`}</p>
						<h4 className="credit-offer__parameter-title">Процентная ставка</h4>
					</li>
					<li className="credit-offer__specification-item">
						<p className="credit-offer__parameter">{valueMask(monthlyPayment)}</p>
						<h4 className="credit-offer__parameter-title">Ежемесячный платеж</h4>
					</li>
					<li className="credit-offer__specification-item">
						<p className="credit-offer__parameter">{valueMask(necessaryIncome)}</p>
						<h4 className="credit-offer__parameter-title">Необходимый доход</h4>
					</li>
				</ul>
				<button className="credit-offer__button" onClick={onFormOpen}>Оформить заявку</button>
			</>
			)}



		</section>
	);
};

CreditOffer.propTypes = {
	onFormOpen:  PropTypes.func.isRequired,
	userCredit: PropTypes.shape({
		creditAmount: PropTypes.number,
		monthlyPayment: PropTypes.number,
		necessaryIncome: PropTypes.number,
		percentRate: PropTypes.string,
		type: PropTypes.string,
	}),
}

export default CreditOffer;
