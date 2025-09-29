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

const PORT = process.env.PORT ;

app.get('/ping',(req,res)=>{
    res.send("PONG");
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);
// Mount the book routes under the /api path, matching the frontend's expected URL
app.use('/api', bookRoutes); 


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
