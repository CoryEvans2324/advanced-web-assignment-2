import React from "react";

class NotificationPopup extends React.Component {
	render() {
		const defaultClassName = 'bg-green-400'
		const classNames = {
			warning: 'bg-yellow-400',
			error: 'bg-red-400',
		}

		const className = 'rounded shadow-sm bg-opacity-90 backdrop-blur-sm flex justify-between items-center ' + classNames[this.props.type] || defaultClassName

		return (
			<div className="relative select-none">
				<div className={className}>
					<h1 className="px-2 py-1 font-semibold">{this.props.message}</h1>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
				</div>
			</div>
		)
	}
}

export default NotificationPopup