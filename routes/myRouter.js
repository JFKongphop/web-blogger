const express = require('express');
const router = express.Router();
const multer = require('multer')

// use model 
// when it use are create to database
const Blogger = require('../models/blog')

// set path to get file image
const storage = multer.diskStorage({

    // position set file image
    destination : function(rq, res, cb){
        
        cb(null, './public/images/blogimg') 
    },

    // set file name
    filename : function(rq, res, cb){
        
        cb(null, Date.now() + ".jpg")
    },
})

// start upload image to folder
const upload = multer({
    storage : storage
})


// go to home page
router.get('/', (req, res)=>{

    Blogger.find().exec((err, doc)=>{
        res.render('index', {product : doc})
    })
})

// go to admin page
router.get('/admin', (req, res)=>{
    res.render('admin')
})

// save data form admin
router.post('/insert', upload.single("image"), (req, res)=>{
    console.log(req.body);

    let data = new Blogger({
        title : req.body.title,
        date : req.body.date,
        description : req.body.description,
        image : req.file.filename,
        content : req.body.content
    })

    Blogger.saveProduct(data, (err)=>{
        if (err) console.log(err);
        res.redirect('/')
    })

})

module.exports = router