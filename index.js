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

CronJob.from({
	cronTime: getCronTime(),
	onTick: function () {
		console.log('Saving image...');
		exec('sh run_interval_script.sh', (err, output) => {
            if (err) { return }
        })
	},
	start: true,
	timeZone: 'America/Los_Angeles'
});




// C:\Program Files\Adobe\Adobe Photoshop 2022\Photoshop.exe D:\Backup\Sumit\photoshop\scripts\save_timelapse_interval.jsx

// C:\"Program Files"\Adobe\"Adobe Photoshop 2022"\Photoshop.exe D:\Backup\Sumit\photoshop\scripts\save_timelapse_interval.jsx

// /c/Program Files/Adobe/Adobe Photoshop 2022/Photoshop.exe /d/Backup/Sumit/photoshop/scripts/save_timelapse_interval.jsx

// /c/"Program Files"/Adobe/"Adobe Photoshop 2022"/Photoshop.exe /d/Backup/Sumit/photoshop/scripts/save_timelapse_interval.jsx
