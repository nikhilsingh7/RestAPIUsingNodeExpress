//dUR0v7nlFBa8ZXdz


//  REST APT AND CURD OPERATIONS



const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

server.listen(8080, () => {
  console.log('server started');
});










    /*Express and Mallware
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express=require('express')
const server=express();
server.use(express.json)



const auth=(req,res,next)=>{
  if(req.body.pass=='123'){
    next()
  }else{
    res.sendStatus(401);
  }
}


server.get('/',auth,(req,res)=>{
  res.json({type:'GET'})

})
server.post('/',auth,(req,res)=>{
  res.json({type:'POST'})

})
server.put('/',(req,res)=>{
  res.json({type:'PUT'})

})
server.delete('/',(req,res)=>{
  res.json({type:'DELETE'})

})
server.patch('/',(req,res)=>{
  res.json({type:'PATCH'})

})

server.listen(8080,()=>{
  console.log('hello')
});








/*     --Creating Api Using pur Node without using express framework---



const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id))
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;
  }
//   '/product':
//       res.setHeader('Content-Type', 'text/html');
//       let modifiedIndex = index.replace('**title**', product.title)
//       .replace('**url**', product.thumbnail)
//       .replace('**price**', product.price)
//       .replace('**rating**', product.rating)
//       res.end(modifiedIndex);
//       break;



  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.end(index);
      break;
    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end();
  }

  console.log('server started');
  //   res.setHeader('Dummy', 'DummyValue');

  //
});

server.listen(8080);*/