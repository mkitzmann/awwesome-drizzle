import schedule from "node-schedule"
import {addProjectAction} from "./lib/server/db/actions";
const job = schedule.scheduleJob('*/1 * * * *', async function () {
	console.log('\x1B[34m[crawler] started')
	// await addProjectAction('tst')
})
