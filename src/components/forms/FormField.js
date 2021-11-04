export default function FormField(props) {
	var wrapperClass = "grid gap-2 sm:grid-cols-2"
	if (props.type === 'checkbox') {
		wrapperClass = 'flex space-x-2 space-x-reverse items-center flex-row-reverse justify-end'
	}

	var disabled = false
	if (props.disabled) {
		disabled = true
		wrapperClass += ' text-gray-700'
	}

	const label = (<label htmlFor={props.name} className="flex items-center select-none">
		{props.label}&nbsp;{props.required && <span className="text-red-500">*</span>}
	</label>)

	if (props.choices) {
		return (
			<div className={wrapperClass}>
				{label}
				<select
					name={props.name}
					id={props.name}
					value={props.value}
					onChange={props.onChange}
					disabled={disabled}
				>
					{props.choices.map((choice) => {
						return <option key={choice} value={choice}>{choice}</option>
					})}
				</select>
			</div>
		)
	}

	return (
		<div className={wrapperClass}>
			{ label }
			{ props.isTextArea ?
				<textarea
					type={props.type}
					name={props.name}
					id={props.name}
					value={props.value}
					onChange={props.onChange}
					placeholder={props.placeholder}
					required={props.required}
				/>
				:
				<input
					ref={props.inputRef}
					type={props.type}
					name={props.name}
					id={props.name}
					value={props.value}
					onChange={props.onChange}
					placeholder={props.placeholder}
					required={props.required}
					disabled={disabled}
				/>
			}
		</div>
	)
}