import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withLoginPopup = (Component) => {
	class WithLoginPopup extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				isPasswordShow: false,
			};

			this.onInputChange = this.onInputChange.bind(this);
			this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);
			this.onViewPasswordGrip = this.onViewPasswordGrip.bind(this);
			this.onViewPasswordGripEnd = this.onViewPasswordGripEnd.bind(this);
		}

		onClosePopupKeydown(evt) {
			if (evt.key === `Escape`) {
				this.props.onPopupClose();
			}
		}

		componentDidMount() {
			document.addEventListener(`keydown`, this.onClosePopupKeydown);
			document.documentElement.style.overflow = `hidden`;
		}
		
		componentWillUnmount() {
			document.removeEventListener(`keydown`, this.onClosePopupKeydown);
			document.documentElement.style.overflow = `auto`;
		}

		onInputChange(evt) {
			evt.preventDefault();

			localStorage.setItem(evt.target.name, evt.target.value);
			this.setState({[evt.target.name]: evt.target.value});
		}

		onViewPasswordGrip(evt) {
			evt.currentTarget.parentNode.querySelector(`.login-popup__input`).removeAttribute('type');
			evt.currentTarget.parentNode.querySelector(`.login-popup__input`).setAttribute('type', 'text');
		}

		onViewPasswordGripEnd(evt) {
			evt.currentTarget.parentNode.querySelector(`.login-popup__input`).removeAttribute('type');
			evt.currentTarget.parentNode.querySelector(`.login-popup__input`).setAttribute('type', 'password');
		}

		render() {
			return(
				<Component
					isPasswordShow={this.state.isPasswordShow}
					onInputChange={this.onInputChange}
					onPopupClose={this.props.onPopupClose}
					onViewPasswordGrip={this.onViewPasswordGrip}
					onViewPasswordGripEnd={this.onViewPasswordGripEnd}
				/>
		)}
	}

	WithLoginPopup.propTypes = {
		onPopupClose: PropTypes.func.isRequired,
	};

	return WithLoginPopup;
}