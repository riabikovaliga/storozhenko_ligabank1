import React, {PureComponent} from 'react';

export const withHeader = (Component) => {
	class WithHeader extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				isPopupOpen: false,
				isNavigationOpen: false,
			};

			this.onPopupOpenClick = this.onPopupOpenClick.bind(this);
			this.onPopupClose = this.onPopupClose.bind(this);
			this.onNavigationOpen = this.onNavigationOpen.bind(this);
			this.onNavigationClose = this.onNavigationClose.bind(this);
		}

		onNavigationOpen() {
			this.setState({isNavigationOpen: true});
		}

		onNavigationClose() {
			this.setState({isNavigationOpen: false});
		}

		onPopupOpenClick(evt) {
			evt.preventDefault();
			this.setState({isPopupOpen: true});
		}
		
		onPopupClose() {
			this.setState({isPopupOpen: false});
		}

		render() {
			return(
				<Component
					isPopupOpen={this.state.isPopupOpen}
					isNavigationOpen={this.state.isNavigationOpen}
					onPopupOpenClick={this.onPopupOpenClick}
					onPopupClose={this.onPopupClose}
					onNavigationOpen={this.onNavigationOpen}
					onNavigationClose={this.onNavigationClose}
				/>
		)}
	}

	return WithHeader;
}
