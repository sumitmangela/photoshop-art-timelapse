# photoshop-art-timelapse
Node script which uses cron job and photoshop jsx script to save a screenshot of the photo/art at given interval of time. so later those screenshots can be combined into a time-lapse of the art process.

# interval

interval configuration will be stored in .env file. if not created earlier please create using env-sample provided. please set interval time and type as needed. interval can be given either in mins or seconds.

# photoshop location configuration

set appropriate photoshop installation loaction in run_interval_script.sh file

# running photoshop art timelapse script

first install required dependencies using `npm i` \
then use `npm run start` to run the script \
It can also run by double clicking on run_photoshop_timelapse.sh \
Note that before running the script make sure that photoshop is running and the file is saved atleast once. please create a folder name `timelapse` where the file is saved this is the folder where timelapse interval files will be stored. name of the folder can be changed in save_timelapse_interval.jsx


# photoshop save warning

to disable save warning go to `C:\Users\[User Name]\AppData\Roaming\Adobe\[Photoshop_version]\[Photoshop_version]Settings\` \
find file named `PSUserConfig.txt` and add this line to it `WarnRunningScripts 0`

# file names

by default filenames will be timestamps so as they wont be sequential it wont work if you load it as image sequence so I suggest renaming it later using a bulk renamer. If you want to get sequentials file names right away then uncomment that logic in save_timelapse_interval.jsx and comment line for timestamp file names
