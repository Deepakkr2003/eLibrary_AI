const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
// Import the new book routes handler
const bookRoutes = require('./Routes/BookRouter'); 

require('dotenv').config();
require('./Models/db'); // This handles your Mongoose connection logic

const PORT = process.env.PORT || 3006;

app.get('/ping',(req,res)=>{
    res.send("PONG");
})

app.use(bodyParser.json());
app.use(cors({
  // Add your local development environment
  origin: 'http://localhost:5173', 
  // Allow credentials (like cookies or Authorization headers)
  credentials: true, 
  // Ensure all necessary methods, including OPTIONS (preflight), are allowed
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  // Respond with a 204 for the OPTIONS preflight request
  optionsSuccessStatus: 204 
}));
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);
// Mount the book routes under the /api path, matching the frontend's expected URL
app.use('/api', bookRoutes); 


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
