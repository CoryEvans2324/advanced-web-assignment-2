export const getTotalsText = (items, underWarranty, customerType, gstRate = 0.15) => {
	var bondTotal = 0
	if (customerType !== 'business') {
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			bondTotal += item.cost
		}
	}
	const serviceFee = underWarranty ? 0 : 85;

	const bondText = customerType === 'business' ? "No Bond" : `$${bondTotal.toFixed(2)}`;
	const serviceFeeText = `$${serviceFee.toFixed(2)}`;

	const total = bondTotal + serviceFee;
	const totalText = `$${total.toFixed(2)}`;
	const gst = total * gstRate;
	const gstText = `$${gst.toFixed(2)}`;
	const totalGst = total + gst;
	const totalGstText = `$${totalGst.toFixed(2)}`;

	return {
		bondText,
		serviceFeeText,
		totalText,
		gstText,
		totalGstText,
	}
}
