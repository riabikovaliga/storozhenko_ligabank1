import React from 'react';
import PropTypes from 'prop-types';

import {withLoginPopup} from '../hocs/with-login-popup';

const LoginPopup = (props) => {
	const {onPopupClose, onInputChange, onViewPasswordGrip, onViewPasswordGripEnd} = props;
	return (
		<section className="login-popup" onClick={(evt) => {
			evt.stopPropagation();
			onPopupClose();
		}}>
			<form className="login-popup__form" onClick={(evt) => evt.stopPropagation()}>
				<div className="login-popup__header">
					<a className="login-popup__logo" href="#top"><span className="visually-hidden">Логотип Лига Банка</span></a>
					<button className="login-popup__close-button" type="button" aria-label="Закрыть окно входа в личный кабинет" onClick={onPopupClose}></button>
				</div>
				<fieldset className="login-popup__wrapper">
					<legend className="visually-hidden">Вход в личный кабинет</legend>

					<label className="login-popup__field">
						<span className="login-popup__input-title">Логин</span>
						<input className="login-popup__input" name="login" type="text" value={localStorage.getItem(`login`) !== null ? localStorage.getItem(`login`) : ``} autoFocus onChange={onInputChange} autoComplete="username"></input>
					</label>
					<label className="login-popup__field login-popup__field--secret">
						<span className="login-popup__input-title">Пароль</span>
						<input className="login-popup__input" name="password" type="password" value={localStorage.getItem(`password`) !== null ? localStorage.getItem(`password`) : ``} onChange={onInputChange} autoComplete="current-password"></input>
						<button className="login-popup__field-button-secret" type="button" aria-label="Показать или скрыть пароль" onMouseDown={onViewPasswordGrip}onMouseUp={onViewPasswordGripEnd}></button>
					</label>
					<a className="login-popup__help" href="#top">Забыли пароль?</a>
					<button className="login-popup__submit-button" type="submit" onClick={onPopupClose}>Войти</button>
				</fieldset>
			</form>
		</section>
	);
};

LoginPopup.propTypes = {
	isPasswordShow: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onPopupClose: PropTypes.func.isRequired,
	onViewPasswordGrip: PropTypes.func.isRequired,
	onViewPasswordGripEnd: PropTypes.func.isRequired,
}

export default withLoginPopup(LoginPopup);
