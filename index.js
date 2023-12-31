const { exec } = require('node:child_process')
const  CronJob = require('cron').CronJob;
require('dotenv').config()

const getCronTime = () =>{
	const interval = process.env.INTERVAL_TIME
	const intervalType = process.env.INTERVAL_TYPE

	if(intervalType == 'min'){
		console.log('Interval set:',interval +' '+intervalType,'(*/'+ interval +' * * * *)')
		return '*/'+ interval +' * * * *'
	}
	else{
		console.log('Interval set:',interval +' '+intervalType,'(*/'+ interval +' * * * * *)')
		return '*/'+ interval +' * * * * *'
	}
}

const executeIntervalScript = () =>{
	console.log('script execute')
	exec('sh run_interval_script.sh', (err, output) => {
		if (err) { return }
	})
}

console.log('Script started!! Saving first image...');
executeIntervalScript(); //running first iteration immediately

CronJob.from({
	cronTime: getCronTime(),
	onTick: function () {
		console.log('Saving current image...');
		executeIntervalScript(); //running iteration on each interval
	},
	start: true,
	timeZone: 'America/Los_Angeles'
});
