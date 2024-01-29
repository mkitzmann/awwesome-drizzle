export const removeTrailingSlashes = (input?: string | unknown): string => {
	if (!input || typeof input !== 'string') {
		return;
	}
	return input.replace(/\/$/, '');
};
