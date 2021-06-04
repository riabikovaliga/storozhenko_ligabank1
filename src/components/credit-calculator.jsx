import React from 'react';
import PropTypes from 'prop-types';

import {MIN_OWN_LOAN_TERMS, MIN_CAR_LOAN_TERMS, MAX_OWN_LOAN_TERMS, MAX_CAR_LOAN_TERMS, INITIAL_FEE_STEP_COEFFICIENT} from '../const';
import {valueMask} from '../util/util';
import {withCreditCalculator} from '../hocs/with-credit-calculator';
import CreditOffer from './credit-offer';
import CreditRequest from './credit-request';
import FormPopup from './form-popup';

const CreditCalculator = (props) => {
	const {isFormOpen, isFormPopupOpen, creditType, isLifeInsuranceWanted, isKaskoWanted, isMaternalCapitalUsed, onOpenSelect, onCloseSelect, onOwnValueChange, isSelectOpen, ownValue, initialFee, maxInitialFee, minInitialFee, onOwnValueBlur, onOwnValueMaskClick, onButtonOwnValueChange, onChangeInitialFee, onInitialFeeMaskClick, onInitialFeeBlur, onInitialFeeRangeChange, onLoanTermsChange, onLoanTermsBlur, onLoanTermsMaskClick, loanTerms, onLoanTermsRangeChange, onCheckboxChange, userCredit, onFormSubmit, onFormOpen, onFormPopupClose, inputOwnValueRef} = props;
	return (
		<section className="credit-calculator">
			<div className="credit-calculator__steps-wrapper">
				<h2 id="creditCalculator" className="credit-calculator__title">Кредитный калькулятор</h2>
				<div className="credit-calculator__step credit-calculator__step--first">

					<fieldset className="credit-calculator__fieldset">
						<legend className="credit-calculator__legend">Шаг 1. Цель кредита</legend>

						<ul className="credit-calculator__select">
							<li className={`credit-calculator__option-placeholder ${isSelectOpen ? `credit-calculator__option-placeholder--open` : ``}`} onClick={isSelectOpen === false ? onOpenSelect : onCloseSelect} tabIndex="0">Выберите цель кредита</li>
							<li value="0" className="credit-calculator__option" tabIndex="0">Ипотечное кредитование</li>
							<li value="1" className="credit-calculator__option" tabIndex="0">Автомобильное кредитование</li>
						</ul>

					</fieldset>

				</div>


				{creditType !== null && (
					<div className="credit-calculator__step credit-calculator__step--second">
						<fieldset className="credit-calculator__fieldset">
							<legend className="credit-calculator__legend credit-calculator__legend--second">Шаг 2. Введите параметры кредита</legend>

							<p className="credit-calculator__input-title">{`Стоимость ${creditType === `mortgage` ? `недвижимости` : `автомобиля`}`}</p>
							<div className="credit-calculator__input-wrapper">
								<button className="credit-calculator__value-changer credit-calculator__value-changer--down" onClick={onButtonOwnValueChange}></button>
								<input ref={inputOwnValueRef} className="credit-calculator__input credit-calculator__input--own-value-mask" type="text" value={valueMask(ownValue)} onMouseDown={onOwnValueMaskClick} onChange={onOwnValueChange} />
								<input className="credit-calculator__input credit-calculator__input--own-value" type="number" value={ownValue} onBlur={onOwnValueBlur} onChange={onOwnValueChange} />
								<button className="credit-calculator__value-changer credit-calculator__value-changer--up" onClick={onButtonOwnValueChange}></button>
							</div>
							<small className="credit-calculator__input-info">{creditType === `mortgage` ? `От 1 200 000  до 25 000 000 рублей` : `От 500 000  до 5 000 000 рублей`}</small>

							<p className="credit-calculator__input-title">Первоначальный взнос</p>
							<input className="credit-calculator__input credit-calculator__input--initial-fee-mask" type="text" value={valueMask(initialFee)} onClick={onInitialFeeMaskClick} onChange={onChangeInitialFee} />
							<input className="credit-calculator__input credit-calculator__input--initial-fee" type="number" value={initialFee} onChange={onChangeInitialFee} onBlur={onInitialFeeBlur} />
							<div className="credit-calculator__input-range-wrapper">
								<input className="credit-calculator__input-range" type="range" step={maxInitialFee * INITIAL_FEE_STEP_COEFFICIENT} value={initialFee} min={minInitialFee} max={maxInitialFee} onChange={onInitialFeeRangeChange} />
								<small className="credit-calculator__input-range-unit-title">{maxInitialFee === 0 ? `0%` : Math.round(initialFee / (maxInitialFee / 100)) + `%`}</small>
							</div>

							<p className="credit-calculator__input-title">Срок кредитования</p>
							<input className="credit-calculator__input credit-calculator__input--loan-terms-mask" type="text" value={loanTerms + ` лет`} onClick={onLoanTermsMaskClick} onChange={onLoanTermsChange} />
							<input className="credit-calculator__input credit-calculator__input--loan-terms" type="number" value={loanTerms} onChange={onLoanTermsChange} onBlur={onLoanTermsBlur} />

							<div className="credit-calculator__input-range-wrapper">
								<input className="credit-calculator__input-range credit-calculator__input-range--loan-terms" type="range" step="1" value={loanTerms} min={creditType === `mortgage` ? MIN_OWN_LOAN_TERMS : MIN_CAR_LOAN_TERMS} max={creditType === `mortgage` ? MAX_OWN_LOAN_TERMS : MAX_CAR_LOAN_TERMS} onChange={onLoanTermsRangeChange} />
								<small className="credit-calculator__input-range-unit-title">{creditType === `mortgage` ? `5 лет` : `1 год`}</small>
								<small className="credit-calculator__input-range-unit-title credit-calculator__input-range-unit-title--max">{creditType === `mortgage` ? `30 лет` : `5 лет`}</small>
							</div>

							{creditType === `mortgage` && (
								<>
									<input className="credit-calculator__input-checkbox" name="isMaternalCapitalUsed" id="maternalCapital" type="checkbox" onChange={onCheckboxChange}/>
									<label className={`credit-calculator__input-checkbox-custom ${isMaternalCapitalUsed ? `credit-calculator__input-checkbox-custom--active` : ``}`} htmlFor="maternalCapital">Использовать материнский капитал</label>
								</>
							)}

							{creditType === `car` && (
								<>
									<input className="credit-calculator__input-checkbox" id="kasko" type="checkbox" name="isKaskoWanted" onChange={onCheckboxChange}/>
									<label className={`credit-calculator__input-checkbox-custom ${isKaskoWanted ? `credit-calculator__input-checkbox-custom--active` : ``}`} htmlFor="kasko">Оформить КАСКО в нашем банке</label>

									<input className="credit-calculator__input-checkbox" id="life-insurance" type="checkbox" name="isLifeInsuranceWanted" onChange={onCheckboxChange}/>
									<label className={`credit-calculator__input-checkbox-custom ${isLifeInsuranceWanted ? `credit-calculator__input-checkbox-custom--active` : ``}`} htmlFor="life-insurance">Оформить Страхование жизни в нашем банке</label>
								</>
							)}
						</fieldset>
					</div>
				)}
			</div>
			{creditType !== null && ownValue !== `Некорректное значение` && (
				<CreditOffer userCredit={userCredit} onFormOpen={onFormOpen}/>
			)}
			{isFormOpen && (
				<CreditRequest onFormSubmit={onFormSubmit} creditType={creditType} ownValue={ownValue} initialFee={initialFee} loanTerms={loanTerms} />
			)}
			{isFormPopupOpen && (
				<FormPopup onFormPopupClose={onFormPopupClose}/>
			)}

			
		</section>
	);
};

CreditCalculator.propTypes = {
	creditType: PropTypes.string,
	initialFee: PropTypes.number,
	inputOwnValueRef: PropTypes.shape({}).isRequired,
	isFormOpen: PropTypes.bool.isRequired,
	isFormPopupOpen: PropTypes.bool.isRequired,
	isKaskoWanted: PropTypes.bool,
	isLifeInsuranceWanted: PropTypes.bool,
	isMaternalCapitalUsed: PropTypes.bool,
	isSelectOpen: PropTypes.bool.isRequired,
	loanTerms: PropTypes.number,
	maxInitialFee: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	minInitialFee: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onButtonOwnValueChange: PropTypes.func.isRequired,
	onChangeInitialFee: PropTypes.func.isRequired,
	onCheckboxChange: PropTypes.func.isRequired,
	onCloseSelect: PropTypes.func.isRequired,
	onFormOpen: PropTypes.func.isRequired,
	onFormPopupClose: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onInitialFeeBlur: PropTypes.func.isRequired,
	onInitialFeeMaskClick: PropTypes.func.isRequired,
	onInitialFeeRangeChange: PropTypes.func.isRequired,
	onLoanTermsBlur: PropTypes.func.isRequired,
	onLoanTermsChange: PropTypes.func.isRequired,
	onLoanTermsMaskClick: PropTypes.func.isRequired,
	onLoanTermsRangeChange: PropTypes.func.isRequired,
	onOpenSelect: PropTypes.func.isRequired,
	onOwnValueBlur: PropTypes.func.isRequired,
	onOwnValueChange: PropTypes.func.isRequired,
	onOwnValueMaskClick: PropTypes.func.isRequired,
	ownValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	userCredit: PropTypes.shape({
		creditAmount: PropTypes.number,
		monthlyPayment: PropTypes.number,
		necessaryIncome: PropTypes.number,
		percentRate: PropTypes.string,
		type: PropTypes.string,
	}).isRequired,
}

export default withCreditCalculator(CreditCalculator);
