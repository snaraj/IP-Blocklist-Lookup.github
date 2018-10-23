const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let data = fs.readFileSync('data.json');
let ip_list = JSON.parse(data);

app.get('/', (req, res) => {
	res.json(ip_list);
})

app.listen(3000, () => {
	console.log('app is running on port 3000');
});