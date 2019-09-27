// Import packages
const express = require('express');
const morgan = require('morgan');
// App
const app = express();
// Morgan
app.use(morgan('tiny'));
// First route
app.get('/colors', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify([
		{
			color: 'red',
			value: '#f00'
		},
		{
			color: 'green',
			value: '#0f0'
		},
		{
			color: 'blue',
			value: '#00f'
		},
		{
			color: 'cyan',
			value: '#0ff'
		},
		{
			color: 'magenta',
			value: '#f0f'
		},
		{
			color: 'yellow',
			value: '#ff0'
		},
		{
			color: 'black',
			value: '#000'
		}
	]));
});
// Starting server
app.listen('8080');
