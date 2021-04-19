// const express = require ('express');
// const http = require('http');
// const path =  require('path');

// const app = express();

// const port = 3001;

// app.use(express.static(__dirname + '/dist/front-end'))

// app.get('/*', (req,res)=> res.sendFile(path.join__dirname));

// const server = http.createServer(app);

// server.listen(port, ()=> console.log('Running...'))

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-app-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);