import fs from 'fs';
import path from 'path';

export const readTextFile = filename => {
	return fs.readFileSync(path.resolve(filename), 'utf8');
};
