let express = require('express');
let app = express();

app.get('/data1', (req, res) => {
    res.send({
        a: 12,
        b: 14
    });
});

app.get('/data2', (req, res) => {
    res.send({
        b: 99,
        c: 33
    });
});


app.listen(3000, () => console.log('Listening on port 3000'));
