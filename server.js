const express =  require('express');


const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("Hello world from nodemon");
});

app.listen(port, ()=> console.log(`Server running localhost:${port}`))