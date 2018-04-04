const http = require('http');

// const req = http.get(
//     'http://www.google.bg'
const req = http.request(
    {
        hostname: 'www.google.bg'
    },
    (response) => {
        console.log(response.statusCode);
        console.log(response.headers);

        response.on('data', (data) => {
            console.log(data.toString());
        });
    }
)

req.on('error', (e) => console.log(e));

//remove if you're using get
req.end();
