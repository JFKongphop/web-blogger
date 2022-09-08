const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/myRouter')
const PORT = 8080

// set up ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// encode after send data by POST to show 
app.use(express.urlencoded({extended : false}))

// set app to use router
app.use(router)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Start server express at port ${PORT}`);
})
