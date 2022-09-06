const revalidation: Record<string, number> = {
	standard: 3600, // 1 hour.
	notFound: 86_400, // 24 hours.
};

export default revalidation;
