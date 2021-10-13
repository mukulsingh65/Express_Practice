const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// making own middleware
// const Mukul_middleware = (req, res, next) => {
//     console.log('req');
//     next();
    
// }
app.use(express.static(path.join(__dirname, 'public')));
// app.use(Mukul_middleware);


app.get('/hello/:name', (req, res) => {
    res.send("hello world!" + req.params.name);
    
})


app.get('/about', (req, res) => {
    //res.send("about");
    //res.sendFile(path.join(__dirname, 'index.html'));
    //res.status(500);
    res.json({"Mukul":400, "Done":450});
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});