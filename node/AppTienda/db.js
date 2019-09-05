const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1/neoland';
const url = 'mongodb://heroku_kwv4qtx7:aptsnjeke383dae4iejhq5pq4s@ds057548.mlab.com:57548/heroku_kwv4qtx7';

mongoose.connect(url, { useNewUrlParser: true });