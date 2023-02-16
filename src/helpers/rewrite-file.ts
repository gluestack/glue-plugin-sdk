import { readFile, writeFile } from '@gluestack/helpers';

// Replaces file's content with the given database name
export const reWriteFile = async (filePath: string, db_Name: string, defaultVar = 'my_first_db') => {
	return new Promise(async (resolve, reject) => {
		try {
			let data = await readFile(filePath, "utf8");
			// @ts-ignore
			data = data.replaceAll(defaultVar, db_Name);

			await writeFile(filePath, data);
			resolve('done');
		} catch (err) {
			reject(err)
		}
	})
};
