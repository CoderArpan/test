const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/insta', (req, res ) => {
    res.send("He")
})

app.get('/', (req, res ) => {
    res.send("This is Home  page")
})

app.get('*', (req,res) => {
    res.send("Page Not Found")
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})