const express = require('express');
const fs = require('fs');
const form = require('formidable');
const querystring = require('querystring');

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
  app.listen(port, ()=>{
    console.log('server is running on ${port}');
  })