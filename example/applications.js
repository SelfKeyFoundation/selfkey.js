const allIds = [];
const byId = {};
let runningId = 0;

exports.findById = id => {
	return byId[id];
};

exports.create = data => {
	let id = ++runningId;
	let application = { ...data, id };
	byId[id] = application;
	allIds.push(id);
	return application;
};

exports.update = data => {
	if (!data.id || !byId[data.id]) {
		return null;
	}
	let application = { ...byId[data.id], ...data };
	byId[application.id] = application;
	return application;
};

exports.delete = id => {
	let application = byId[id];
	if (!application) return false;
	let indx = allIds.indexOf(id);
	allIds.splice(indx, 1);
	delete byId[id];
	return application;
};

exports.findAll = () => {
	return allIds.map(id => byId[id]);
};
