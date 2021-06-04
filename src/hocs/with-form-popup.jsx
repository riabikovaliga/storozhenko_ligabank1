import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFormPopup = (Compopnent) => {
	class WithFormPopup extends PureComponent {
		constructor(props) {
			super(props);

			this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);
		}

		onClosePopupKeydown(evt) {
			if (evt.key === `Escape`) {
				this.props.onFormPopupClose();
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

		render() {
			return(
				<Compopnent
					onFormPopupClose={this.props.onFormPopupClose}
				/>
			)
		}
	}

	WithFormPopup.propTypes = {
		onFormPopupClose: PropTypes.func.isRequired,
	};

	return WithFormPopup;
}
