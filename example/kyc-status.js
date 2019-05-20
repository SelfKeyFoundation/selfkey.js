// KYC process is approved
exports.APPROVED = 2;
// KYC process is rejected
exports.REJECTED = 3;
// User has submitted KYC data
// and process ready for review
exports.UPLOADED = 4;
// KYC process is canceled
exports.CANCELED = 8;
// Additional data requested
exports.ADDITIONAL_REQUEST = 9;
// User still filling out forms
exports.USER_PROCESSING_REQUIREMENTS = 11;
// KYC process is approved by manager or checker (for multi person checks)
exports.PARTIALLY_APPROVED = 12;
// Manager has been assigned
exports.MANAGER_ASSIGNED = 14;

exports.codeToStatus = {
	[exports.APPROVED]: { code: exports.APPROVED, name: 'Approved' },
	[exports.REJECTED]: { code: exports.REJECTED, name: 'Rejected' },
	[exports.UPLOADED]: { code: exports.UPLOADED, name: 'Uploaded' },
	[exports.CANCELED]: { code: exports.CANCELED, name: 'Canceled' },
	[exports.ADDITIONAL_REQUEST]: {
		code: exports.ADDITIONAL_REQUEST,
		name: 'Additional attributes requested'
	},
	[exports.PARTIALLY_APPROVED]: { code: exports.PARTIALLY_APPROVED, name: 'Partially approved' },
	[exports.MANAGER_ASSIGNED]: { code: exports.MANAGER_ASSIGNED, name: 'Approved' },
	[exports.USER_PROCESSING_REQUIREMENTS]: {
		code: exports.USER_PROCESSING_REQUIREMENTS,
		name: 'User processing requirements'
	}
};
