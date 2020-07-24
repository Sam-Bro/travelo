import React from 'react';
var unirest = require("unirest");

var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

req.headers({
	"x-rapidapi-host": "google-translate1.p.rapidapi.com",
	"x-rapidapi-key": "8968730aa8mshccd0052154d0957p1e3e1cjsn7827894c698a",
	"accept-encoding": "application/gzip",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

req.form({
	"source": "en",
	"q": "Hello, world!",
	"target": "es"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

class Translate extends React.Component {
    render() {
        return (
            <div>
                <h1>translate</h1>
            </div>
        )
    }
}

export default Translate