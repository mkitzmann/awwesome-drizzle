import schedule from "node-schedule"
const job = schedule.scheduleJob('*/1 * * * *', function () {
	console.log('This runs every minute')
})
