# Personal web app
This app has been developed to present myself proffesionally to the world. Think it as an online resume. It has been developed using React in the client part and Firebase in the server part. After finishing it, I thought it wouldn't be difficult to make it easy to install via a python script so anyone, without coding knowledge, could have they own online resume.

## Windows installation
First of all, you need to have a Linux distribution. Nevertheless, it's easy to install one above your Window 10 system

### Install and configure WSL
##### 1. Allow this feature.

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
  sudo apt-get upgrade -y
  ```
  It will last a couple of minutes and show you a screen in which, with your keyboard arrows you need to move to the yes option and confirm   with the enter key
  ```
  sudo apt-get update -y
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
In the header of the web page, click in the </> button. Then type the same name in your app nickname as the name you choose for the project(*follow the recommendations to have an awesome web domain*). 

Check the "*Also check Firebase Hosting*" option and click register app

Ignore the next steps, click *Next->Next->Continue to console*

##### 4. Enable Google Authentication
In the left Firebase sections, click on *Develop->Authentication* then go to *Sign-in method* and click on *Google* card. Change the swith to enable it , select your email in *Project support email* and click on *Save*

