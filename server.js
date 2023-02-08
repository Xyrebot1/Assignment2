'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/postmessage', (req,res) => {

        var info = req.body;
        let postIt = new Object();
        let ts = Date.now();
        let date_ob = new Date(ts);
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let day = date_ob.getDate();
        let date = month + '/' + day + '/' + year;
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let time = hours + ':' + minutes + ':' + seconds;

        postIt.topic = info.topic;
        postIt.data = info.data;
        postIt.date = date;
        postIt.time = time;
        fs.appendFile('posts.txt', JSON.stringify(postIt) + '\n', function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("file was saved!");
        });
        
        fs.readFile('posts.txt', {encoding : 'utf8'}, (err, content) => {
            if(err) return console.error(err);
            res.send(content);
        });
});

app.use('/', express.static('pages'));

app.listen(PORT, HOST);
console.log('up and running');
