# Simple CORS server

## Setup and run the server

```
git clone https://github.com/__PLACEHOLDER__/cors-server.git 

&& cd cors-server
```

Install the server dependencies
```
npm ci
```

Start the server
```
node cors-server.js
```

## Endpoint URLs

You have to modify the endpoint URLs slightly by prepending `http://localhost:8088/` to the API endpoints.

### Example

If the endpoint URL is `https://api-example.com/v2/accounts/1500/sites/1/users.json` the URL to use in your app will become
`http://localhost:8088/https://api-example.com/v2/accounts/1500/sites/1/users.json`

## Options

To change the default port (8088) you can set the environment variable `PORT` when starting the server, e.g. change to port 9000
```
PORT=9000 node cors-server.js
```

The host can be changed via the environment variable `HOST`, bust should usually be left to the default of 0.0.0.0
```
HOST=example.com node cors-server.js
```
