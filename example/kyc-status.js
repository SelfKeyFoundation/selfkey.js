// KYC process is approved
export const APPROVED = 2;
// KYC process is rejected
export const REJECTED = 3;
// User has submitted KYC data
// and process ready for review
export const UPLOADED = 4;
// KYC process is canceled
export const CANCELED = 8;
// Additional data requested
export const ADDITIONAL_REQUEST = 9;
// User still filling out forms
export const USER_PROCESSING_REQUIREMENTS = 11;
// KYC process is approved by manager or checker (for multi person checks)
export const PARTIALLY_APPROVED = 12;
// Manager has been assigned
export const MANAGER_ASSIGNED = 14;

export const codeToStatus = {
	[APPROVED]: { code: APPROVED, name: 'Approved' },
	[REJECTED]: { code: REJECTED, name: 'Rejected' },
	[UPLOADED]: { code: UPLOADED, name: 'Uploaded' },
	[CANCELED]: { code: CANCELED, name: 'Canceled' },
	[ADDITIONAL_REQUEST]: { code: ADDITIONAL_REQUEST, name: 'Additional attributes requested' },
	[PARTIALLY_APPROVED]: { code: PARTIALLY_APPROVED, name: 'Partially approved' },
	[MANAGER_ASSIGNED]: { code: MANAGER_ASSIGNED, name: 'Approved' },
	[USER_PROCESSING_REQUIREMENTS]: { code: USER_PROCESSING_REQUIREMENTS, name: 'User processing requirements'}
};
