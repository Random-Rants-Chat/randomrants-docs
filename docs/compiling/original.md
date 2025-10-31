---
slug: /compiling/original
title: Random Rants compilation tutorial
hide_table_of_contents: true
---

# Random Rants Compilation and Local Execution Tutorial

:::danger
SECURITY WARNING

Random Rants is an outdated version of Random Rants + and has significant security vulnerabilities. This tutorial is provided strictly for historical reference and to allow local testing. DO NOT expose this application to the public internet or use it for any real-world communication.
:::
:::info
This guide covers the bare minimum setup: the website (client) and a basic WebSocket echo server. The original application may have used additional, optional servers.
You may get warnings or error messages mentioning servers are unavailible, these are servers that have gone down because of glitch removing & shutting down app hosting.
:::

## Required Software

Ensure you have the following installed on your system:

- Node.js (and npm): Essential for running the JavaScript server and installing packages.
- Git: Necessary for downloading the source code repositories.
- Terminal/Command Prompt: To execute the required commands (e.g., cmd.exe on Windows, Terminal on macOS/Linux).
- Code Editor: To modify a configuration file (e.g., VS Code, Sublime Text, Notepad++).

## Set Up the Website (Client)

The website will be served using http-server, a simple static file server.

### 1.1 Terminal Setup (Terminal Window 1)

Open your first terminal window.

1.2 Get the Source Code

Run the following commands to download the website's source code and enter the directory:

```bash
git clone https://github.com/Random-Rants-Chat/randomrants.git
cd randomrants
```

### 1.3 Install the Web Server

Install the http-server package globally so you can use it anywhere:

```bash
npm install --global http-server
```

### 1.4 Run the Web Server

Start the local server. Do not open the URL yet; the WebSocket server needs to be running first.

```bash
http-server
```

The output will usually show the server is running on http://localhost:8080. Keep this terminal window open and running.

### Set Up the WebSocket Echo Server

The client needs a live WebSocket server to connect to. This server will handle real-time communication.

### 2.1 Terminal Setup (Terminal Window 2)

Open a second terminal window.

## 2.2 Get the Server Source Code

Run these commands to download the server's source code and enter its directory:

```
git clone [https://github.com/Random-Rants-Chat/randomrants-ws](https://github.com/Random-Rants-Chat/randomrants-ws)
cd randomrants-ws
```

## 2.3 Install Dependencies

Install the necessary libraries for the server to run:

```
npm install
```

## 2.4 Run the Server

Start the WebSocket server:

```
npm run start
```

You should see a confirmation message, like "Server started!". This server is typically running on port 3000. Keep this terminal window open and running.

## Set Up the WebSocket Echo Server

The client needs a live WebSocket server to connect to. This server will handle real-time communication.

:::tip
Alternative Cloud Setup & Reinforced Security

If you prefer not to install Node.js locally, you could potentially use cloud development environments like CodeSandbox or Replit to run your servers.

If you use such a service, remember that any preview URL provided by the service should be treated as private. Sharing or exposing this URL publicly could allow others to interact with your running server, potentially exposing you to security risks, especially given the known vulnerabilities of the old Random Rants version.
:::

### 2.1 Terminal Setup (Terminal Window 2)

Open a second terminal window.

### 2.2 Get the Server Source Code

Run these commands to download the server's source code and enter its directory:

```
git clone https://github.com/Random-Rants-Chat/randomrants-ws
cd randomrants-ws
```

### 2.3 Install Dependencies

Install the necessary libraries for the server to run:

```
npm install
```

### 2.4 Run the Server

Start the WebSocket server:

```
npm run start
```

You should see a confirmation message, like "Server started!". This server is typically running on port 3000. Keep this terminal window open and running.

Set Up the WebSocket Echo Server

The client needs a live WebSocket server to connect to. This server will handle real-time communication.

:::tip
Alternative Cloud Setup & Reinforced Security

If you prefer not to install Node.js locally, you could potentially use cloud development environments like CodeSandbox or Replit to run your servers.

If you use such a service, remember that any preview URL provided by the service should be treated as private. Sharing or exposing this URL publicly could allow others to interact with your running server, potentially exposing you to security risks, especially given the known vulnerabilities of the old Random Rants version.
:::

2.1 Terminal Setup (Terminal Window 2)

Open a second terminal window.

2.2 Get the Server Source Code

Run these commands to download the server's source code and enter its directory:

git clone [https://github.com/Random-Rants-Chat/randomrants-ws](https://github.com/Random-Rants-Chat/randomrants-ws)
cd randomrants-ws

2.3 Install Dependencies

Install the necessary libraries for the server to run:

npm install

2.4 Run the Server

Start the WebSocket server:

npm run start

You should see a confirmation message, like "Server started!". This server is typically running on port 3000. Keep this terminal window open and running.

## Configure the Website (Client)

The website's code needs to be updated to point to your local WebSocket server (ws://localhost:3000) instead of the default production URLs.

### 3.1 Locate the File

Using your code editor, open the file:
`randomrants/chat.js`

### 3.2 Find the Configuration

Search (usually Ctrl+F or Cmd+F) for the variable ws_uri. You will find the following lines:

var ws_uri = "wss://randomrants-ws.glitch.me";
var ws_screen_uri = "wss://randomrants-sc.glitch.me";
var ws_audio_uri = "wss://randomrants-audio.glitch.me";

### 3.3 Update the Configuration

Change those lines to point to your local server running on port 3000. The server is a simple echo server, so all three client features (chat, screen, audio) can use the same endpoint:

```js
// Use the local WebSocket echo server running on port 3000
var ws_uri = "ws://localhost:3000";
var ws_screen_uri = "ws://localhost:3000";
var ws_audio_uri = "ws://localhost:3000";
```

Save and close the chat.js file.

### Run the Application

With both servers running and the client configured, you can now access the application:

Open your web browser.

Navigate to: `http://localhost:8080`

Accept any server connection errors warnings or dialogs (such as the file server) to try the basic features.

:::info
There is some additional servers, for things like polling and file attachments, you can safely ignore the errors or messages, every feature just won't work. Again - you can use online tools to quickly spin up all the servers that it needed, making sure they are set to private so that no attackers can access them.
:::
