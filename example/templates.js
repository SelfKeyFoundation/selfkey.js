const allIds = [];
const byId = {};
let runningId = 0;

exports.findById = id => {
	return byId[id];
};

exports.create = data => {
	let id = ++runningId;
	let tpl = { ...data, id };
	byId[id] = tpl;
	allIds.push(id);
	return tpl;
};

exports.delete = id => {
	let tpl = byId[id];
	if (!tpl) return false;
	let indx = allIds.indexOf(id);
	allIds.splice(indx, 1);
	delete byId[id];
	return tpl;
};

exports.findAll = () => {
	return allIds.map(id => byId[id]);
};
