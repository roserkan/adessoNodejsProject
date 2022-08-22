const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' })
const url = `mongodb://localhost:27023/adessodb`;

mongoose.connect(url)
.then(console.log('DB OK'))
.catch(err => console.log('DB Error'));
