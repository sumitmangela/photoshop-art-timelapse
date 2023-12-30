# photoshop-art-timelapse
Node script which uses cron job and photoshop jsx script to save a screenshot of the photo/art at given interval of time. so later those screenshots can be combined into a time-lapse of the art process.

# photoshop art timelapse script

first install required dependencies using `npm i` \ 
set appropriate photoshop installation loaction in sync.sh file \
then use `npm run start` to run the script \
Note that before running the script make sure that photoshop is running and the file is saved atleast once. please create a folder name `timelapse` where the file is saved this is the folder where timelapse interval files will be stored. the folder name can be configured in .env

# interval



# photoshop save warning

to disable save warning go to `C:\Users\[User Name]\AppData\Roaming\Adobe\[Photoshop_version]\[Photoshop_version]Settings\` \
find file named `PSUserConfig.txt` and add this line to it `WarnRunningScripts 0`


