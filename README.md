# Personal web app
This app has been developed to present myself proffesionally to the world. Think it as an online resume. It has been developed using React in the client part and Firebase in the server part. After finishing it, I thought it wouldn't be difficult to make it easy to install via a python script so anyone, without coding knowledge, could have they own online resume.

## Windows installation
First of all, you need to have a Linux distribution. Nevertheless, it's easy to install one above your Windows 10 system

THERE IS A VIDEOTUTORIAL: https://youtu.be/tYbQJ0Pr57Y
### Install and configure WSL
##### 1. Enable this feature.

   Open the powershell with administrator privileges. Then type/paste with a right click
```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
   It will run a process and then ask you to restart the computer. Type "y" in the terminal to confirm
##### 2. Install Ubuntu

   Go to the microsoft store app and search Ubuntu. Install the first option of the list
##### 3. Open the Ubuntu app.

   It will last a couple of minutes to install. Then you will have to configure user and password
##### 4. Go to your files explorer Local Disk (C:)->Users
   
   Note the name of your user, you will need it in the next step
##### 5. In the Ubuntu terminal type/paste with right click:
   ```
   cd /mnt/c/Users/<your_user>
   ```
   change <your_user> with the user name you have noted in the last step

##### 6. Prepare your laptop to installation
Type the following commands in the terminal and if the terminal asks for confirmation, say yes to everything
  ```
  sudo apt-get update -y
  sudo apt-get upgrade -y
  ```
  It will last a couple of minutes and show you a screen in which, with your keyboard arrows you need to move to the yes option and confirm   with the enter key
  ```
  sudo apt-get install python3-pip -y
  sudo apt-get install git -y
  git clone https://github.com/pabloi09/personal-web-app
  cd personal-web-app
  ```
## Prepare your Firebase project
##### 1. Log in with your google account
Go to https://console.firebase.google.com and log in with your google account
##### 2. Create a new project
Click at the create a new project button. Select a name to the project. **It is important that you select a good name at this stage, your web domain will be associated with the project name**. I would recommend to use your name and surnames and cross fingers for it to be the unique project with that name. For example: mariano-rajoy-brey. Click next
In the second step, disable google analytics option. Click next
Wait until the project is created and open it
##### 3. Add a web app
On the header of the web page, click in the </> button. Then type the same name in your app nickname as the name you choose for the project(*follow the recommendations to have an awesome web domain*). 

Check the "*Also check Firebase Hosting*" option and click register app

Ignore the next steps, click *Next->Next->Continue to console*

##### 4. Enable Google Authentication
On the left Firebase sections, click on *Develop->Authentication* then go to *Sign-in method* and click on *Google* card. Change the swith to enable it , select your email in *Project support email* and click on *Save*

##### 5. Enable Database
On the left Firebase sections, right click on *Develop->Database* and open it in a new tab. Click on this new tab

Scroll to the *Or choose Real Time Database* section and click on *Create database*

Check *Start in test mode* and click *Enable*

**Leave this tab open** and go back to the first tab

##### 6. Enable Storage
On the left Firebase sections, right click on *Develop->Storage* and open it in a new tab. Click on this new tab

Click on *Get started*

Click on *Next* , select the storage location you prefer and click on *Done*

**Leave the browser open, we will need to do some configurations later**

## Install the web app on Firebase
Go back to the Ubuntu terminal
##### 1. Type 
```
python3 run.py
```
##### 2. Read what the terminal says and follow the steps
You will be asked about data before logging in, type "y".Then, to log in you will be redirect to your browser. Use the same google account you used for logging in Firebase

##### 3. Inputs
You will be asked some questions to configure your project
* Select ONLY Hosting with the spacebar (*moving with the arrows*) and press enter
* Select the project you have created
* Write 'build' and press enter
* Write 'y' and press enter 

Then, it will ask you about firebase configuration. Go to your browser, and on the first tab of firebase you opened click on the Settings button at the top left of the web. Then click on *Project settings* .

Scroll down to *Firebase SDK snippet* section and check the *Config* option

Copy the text shown from *{* to *}*, **both included**

Paste this in the Ubuntu console, then click enter + * + enter to continue

##### 4. Your web domain
Once it has finished, it will give you your web app domain. Type enter to close the installer

We are almost done, we just need to configure some security rules for you to be the only one capable of editing the web page

## Configure the security rules

##### 1. Log in as admin
Go to your web domain (*the one that the Ubuntu console gave you before*) and Log in as admin with your google account.

##### 2. Get your User UID
On the first tab of firebase that you opened, on the left Firebase sections, click on *Develop->Authentication*. At the *User* tab you will see your user.

Copy and note your User UID. You will need it

##### 3. Configure your database security rules
On the second tab of firebase that you opened, cick on *Rules* tab

Delete the content and paste the following one: 
```
{
  "rules": {
    	".read": "true",
      ".write": "auth.uid == '<User UID>'"
  }
}
```
Substitute <User UID> with the id you note in the last step and click on *Publish*

##### 4. Configure your storage security rules
On the last tab of firebase that you opened, cick on *Rules* tab

Delete the content and paste the following one: 
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read ;
      allow write: if request.auth.uid == "<User UID>";
    }
  }
}
```
Substitute <User UID> with the id you note in the last step and click on *Publish*

## :tada:NOW YOUR WEB PAGE IS READY TO BE USED:tada: 
Log in as admin and click on this new button with you account name. You will now be able to click on *Edit Web Page*. Feel free to add the sections you want and, if you are a programmer, feel free to change the code! You can also do pull requests. 
*Note: I only ask not to appropiate of and lucrate with my code. Please, recognize the author!*

## (Optional) Delete WSL and the files

##### 1. Delete the files
On the Ubuntu terminal, type the following commands:
```
cd ..
rm -rf personal-web-app
```
##### 2. Delete Ubuntu 
In the windows search bar, look for  Apps & features, search Ubuntu and click on *Uninstall*

Once it has finished (*it can last a couple of minutes*), continue with the last step

##### 3. Disable this feature.

   Open the powershell with administrator privileges. Then type/paste with a right click
```
Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
   It will run a process and then ask you to restart the computer. Type "y" in the terminal to confirm
