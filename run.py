import os

def format(line):
    if ":" in line:
        return "  \"" + line[2:line.index(":")] + "\"" + line[line.index(":"):len(line)]
    return line

os.system('curl -sL https://deb.nodesource.com/setup_12.x >> installNpm')
os.system('chmod +x installNpm')
os.system('sudo ./installNpm')
os.system('sudo apt-get install nodejs -y')
os.system('sudo apt-get install npm -y')
os.system("sudo apt-get install -f")
os.system("npm install")
os.system("curl -Lo ./firebase_bin https://firebase.tools/bin/linux/latest")
os.system("./firebase_bin login")
print("NOW, YOU WILL BE ASKED SOME PARAMETERS\n")
print("   + Select ONLY Hosting with the spacebar (moving with the arrows) and press enter\n")
print("   + Select the project you have created\n")
print("   + Write 'build' and press enter\n")
print("   + Write 'y' and press enter \n")
print("Press enter when you are ready\n")
input()
os.system("./firebase_bin init")
print("Go to your firebase console. Settings -> Your Applications -> Configuration\n")
print("Paste the JSON of firebaseConfig from the character '{'  to the character '}'. Press enter + * + enter to save it.\n")

contents = []
fout = open("./src/conf.json", "w")
while True:
    line = input()
    if "*" in line:
        break
    fout.write(format(line))

fout.close()
print("Write your name. This name will be displayed in your web page")
name = input("Name:")


fin = open("./src/constants.js", "r")
fout = open("out.js", "w")

for line in fin:
    if "<replace>" in line:
	    fout.write(line.replace('<replace>', name))
    else:
        fout.write(line)

fin.close()
fout.close()


os.system("cp out.js ./src/constants.js")
os.system("rm out.js")
os.system("npm run build")
print("Go to your firebase console. In Authentication -> Log in methods and enable Google log in \n")
print("Press enter when you are ready\n")
input()
os.system("./firebase_bin deploy")
print("Now you will be able to access your personal web page!\n")
print("Please, follow the steps presented in the github repository https://github.com/pabloi09/personal-web-app or in the video to finish\n")
print("Press enter to end the program")
input()


