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

export const createKyccFileProcessor = (client, fileProcessor) => async fileObj => {
	const file = client.files.get(fileObj.content, { stream: !!fileProcessor.stream });
	const newContent = await fileProcessor.process(file, fileObj.content);
	return { ...fileObj, content: newContent };
};
