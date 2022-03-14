import express from  'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import bodyParser from 'body-parser';
import mechanicalRoute from './routes/mechanicalRoute';

dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose.connect(mongodbURL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex :true
}).catch(error => console.log(error.reason));




const app = express();
app.use(bodyParser.json());
app.use("/api/products",productRoute);
 app.use("/api/users",userRoute);
 app.use('/api/orders', orderRoute);
 app.use('/api/mechanicals', mechanicalRoute);

//  app.get ('/api/config/QRCode', (req, res) => {

//   res.send(process.env.QRCode || 'sb');

//  });


//  app.get("/api/products/:id", (req, res) => {
// //   const productId = req.params.id;
//   const product = data.products.find (x => x._id === req.params.id);
//     if(product)
//     res.send(product);
//     else
//      res.status(404).send({msg: "Product Not Found."})  
// });


// app.get("/api/products", (req, res) => {

//     res.send(data.products);
// });

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
})