import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';

export const withCreditRequest = (Component) => {
	class WithCreditRequest extends PureComponent {
		constructor(props) {
			super(props);

			this.onInputChange = this.onInputChange.bind(this);
		}

		onInputChange(evt) {
			localStorage.setItem(evt.target.name, evt.target.value);
			this.setState({
				[evt.target.name]: evt.target.value,
			});
		}

		render() {
			return(
				<Component
					{...this.props}
					onInputChange={this.onInputChange}
					onFormSubmit={this.props.onFormSubmit}
				/>
			)
		}
	}

	WithCreditRequest.propTypes = {
		creditType: PropTypes.string.isRequired,
		initialFee: PropTypes.number.isRequired,
		loanTerms: PropTypes.number.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		ownValue: PropTypes.number.isRequired || PropTypes.string.isRequired,
	};

	return WithCreditRequest;
};
