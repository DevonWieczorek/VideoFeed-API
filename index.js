const port = process.env.PORT || 3000

const express = require('express')
const queryString = require('query-string')
const helmet = require('helmet')

const app = express()

export const urlParamsToString = (location) => {
    const urlParams = queryString.parse(location.search);
    return `?${queryString.stringify(urlParams)}`;
}

// add some security-related headers to the response
app.use(helmet())

app.use(express.json());

app.get("/", (req, res, next) => {
    let page = req.query.page;
    let search = req.query.q;
    //let category = req.query.category;
    //let queryObj = {'page': page, 'search': search, 'category': category};

    //let concatQueries = queryString.stringify(queryObj);
    //queryObj['queryString'] = `?${concatQueries}`;

    // Send back the response
    res.json({'page': page, 'search': search});
});

app.post('/', function(request, response) {
    // Send back the response
    response.json(request.body);
});

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

module.exports = app
