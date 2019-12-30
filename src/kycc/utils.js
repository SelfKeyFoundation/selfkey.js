export const parseApplicationAttributes = applicationAttributes =>
	Object.keys(applicationAttributes).map(id => {
		const { label, title, optional, schema, valid, value, description } = applicationAttributes[
			id
		];
		return {
			id,
			title: label || title,
			required: !optional,
			schemaId: schema,
			valid,
			data: value,
			description
		};
	});
