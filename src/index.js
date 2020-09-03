const express = require('express');
const livereload = require('livereload');
const connectLR = require('connect-livereload');
const path = require('path');

const PORT = 5000;
const server = express();
const lrServer = livereload.createServer();
const publicPath = path.join(__dirname, '../public');

server.use(connectLR());
server.use(express.static(publicPath));
lrServer.watch(publicPath);

server.listen(PORT, () => {
	console.log(`Server up on port ${PORT}.`);
});
