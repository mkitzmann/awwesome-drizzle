import {AwwesomeConfig} from "./src/lib/types";

export const config: AwwesomeConfig = {
	chunkSize: 20,
	lowCommitCount: 2,
	urls: [
		'https://raw.githubusercontent.com/awesome-selfhosted/awesome-selfhosted/master/README.md',
		'https://raw.githubusercontent.com/awesome-foss/awesome-sysadmin/master/README.md'
	],
	requestDelay: 0
};
