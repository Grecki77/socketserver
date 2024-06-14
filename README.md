# SocketServer

The SocketServer application is a simple application that sends notifications when someone or something sends a message. It is intended to work in the background and communicate between applications, mainly to trigger a specific reaction in an application or device also listening to the same network socket.

The application is designed to operate a local network. If you want it to work on the Internet, you need to modify the `localNetworkRegex` variable

If you think you need to change the port on which the server is available, you can do it in `package.json`. Modification of the main file is only required when the `PORT` parameter is not passed.

# Instalation guide

1. Install `node.js` from official project site;
2. Install `Yarn` from official site (or modify scripts in `package.json`);
3. Install `git` from official site or download ZIP archive from GitHub and uncompress it;
4. Type in Command line:
    4.1 `$ yarn install`
    4.2 `$ yarn start`
5. If you wont use the applicaton in background use `$ yarn bgStart` - this command run the application in background.  Several helper scripts have been created, such as `bgLog`, `bgStop` etc. For more information about `pm2` check it on official page.
