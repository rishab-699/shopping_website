const express = require('express');
const fs = require('fs');
const form = require('formidable');
const querystring = require('querystring');
const formidable = require('formidable');

const app = express();
const port = 8000;
const hostname = '127.0.0.1';
app.set('view engine','hbs');
app.set('views','./view');
app.use(express.static(__dirname+"/publilc/css"));
app.use(express.static(__dirname+"/publilc/js"));
app.use(express.static(__dirname+"/publilc/img/SVG"));
app.use(express.static(__dirname+"/publilc/img/adds", {
    setHeaders: (res, path) => {
        const extension = path.split(".").pop().toLowerCase();
        const contentType = {
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "gif": "image/gif"
        };
        
        if (contentType[extension]) {
          res.setHeader("Content-Type", contentType[extension]);
        }
      }
  }));
  app.use(express.static(__dirname+"/publilc/img/PNGs", {
    setHeaders: (res, path) => {
        const extension = path.split(".").pop().toLowerCase();
        const contentType = {
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "gif": "image/gif"
        };
        
        if (contentType[extension]) {
          res.setHeader("Content-Type", contentType[extension]);
        }
      }
  }));

  app.get('/',(req,res)=>{
    res.render('home');
  });
  app.get('/login',(req,res)=>{
    res.render('login');
  });
  app.get('/products',(req,res)=>{
    res.render('products');
  });
  app.get('/wishlist',(req,res)=>{
    res.render('wishlist');
  });
  app.get('/bag',(req,res)=>{
    res.render('orders');
  });
  app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
  });
  app.post('/dashboard' , (req , res)=>{
    res.render('dashboard');
    console.log('product form submitted');
    var form = new formidable.IncomingForm();
    let product;
    form.parse(req, async function(err, fields, files){
      if(err){
        console.log('form data is not able to submit',err);
        return res.status(500).send('unable to fully submit the data');
      }
      console.log('Files:');
      console.log(files);
      console.log('Fields');
      console.log(fields)
    });
  })
  app.listen(port, ()=>{
    console.log('server is running on ${port}');
  })