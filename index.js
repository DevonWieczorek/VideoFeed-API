const port = process.env.PORT || 3000

const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.use(express.json());

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

app.get("/get", (req, res, next) => {
    res.json({
        "version": process.env.VERSION
    });
});

app.post('/post', function(request, response) {
    response.send(request.body);
});

module.exports = app
