# Electron Socket.io POC

This is a proof of concept of using electron, express and socket.io.

## Getting Started

1. Pre-requisites
* node/npm installed
* git installed

2. Clone the project locally
```bash
git clone git@github.com:bgguna/electrosock-poc.git
cd electrosock-poc
```

3. Install the npm dependencies
```bash
npm install
```

4. Run it
```bash
# run the server
node server.js

# run a terminal client
node test-client.js

# open a browser client
# navigate to https://localhost:3000

# open an electron client
npm start

# you can now start sending messages from one client to the others
# the server will broadcast the messages using sockets
```

## Resources
* [Node.js](https://nodejs.org/)
* [Writing Your First Electron App](https://electronjs.org/docs/tutorial/first-app)
* [Socket.io Chat](https://socket.io/get-started/chat)