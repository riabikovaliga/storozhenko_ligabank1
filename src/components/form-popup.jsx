import React from 'react';
import PropTypes from 'prop-types';

import {withFormPopup} from '../hocs/with-form-popup';

const FormPopup = (props) => {
	const {onFormPopupClose} = props;
	return (
		<div onClick={onFormPopupClose} className="form-popup__overlay">
			<div className="form-popup" onClick={(evt) => {evt.stopPropagation()}}>
				<button onClick={onFormPopupClose} className="form-popup__close-button" type="button"></button>
				<b className="form-popup__title">Спасибо за обращение в наш банк.</b>
				<p className="form-popup__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
			</div>
		</div>
	)
};

FormPopup.propTypes = {
	onFormPopupClose: PropTypes.func.isRequired,
};

export default withFormPopup(FormPopup);
