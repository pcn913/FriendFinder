'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const config = require('rc')('app');
const path = require('path');
const app = express();

var friends = require('./app/data/friends');

const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);



// Start server
app.listen(config[env].port, err => {
    if (err) {
        throw err;
    }

    console.log(`${config[env].title} server running on http://localhost:${config[env].port}, Ctrl+C to stop`);
});
