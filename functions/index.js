const functions = require ('firebase-functions');
const express = require ('express');
const cors = require ('cors');
const { request, response } = require('express');
const stripe = require ('stripe')('sk_test_51Hmh4yART9HVADBy3JmRiXwgd1BFtGzm9KcqWvQ3xtLQtz7AYgPxn2ysa8DtIB6qqIBsQh4WvL2WA56fygTXDNTg00ZtYd0FqU')

//app config
 const app = express();
// middlewares
app.use(cors({origin: true}));
app.use(express.json());
// api routs;
   app.get('/',(request, response) => response.status(200).send('hello world'))
   app.post('/payments/create', async(request, response) => {
       const total = request.query.total;
       
       console.log('Payment Request Recieved BOOM!!! for this amount >>>', total )

       const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
       });
   })
// listen command

exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-d5fc0/us-central1/api