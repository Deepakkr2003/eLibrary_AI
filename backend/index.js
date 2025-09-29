const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
const bookRoutes = require('./Routes/BookRouter'); 

require('dotenv').config();
require('./Models/db'); // Mongoose connection logic

const PORT = process.env.PORT; // Can safely be kept, but is ignored by Vercel

app.get('/ping',(req,res)=>{
    res.send("PONG");
})

app.use(bodyParser.json());

// 💡 RECOMMEND using explicit CORS for deployment 💡
app.use(cors({ 
    origin: ['http://localhost:5174', 'https://e-library-ai.vercel.app'], 
    credentials: true, 
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    optionsSuccessStatus: 204
}));

app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);
app.use('/api', bookRoutes); 

// 🚨 CRITICAL CHANGE FOR VERCEL: Export the app instance
module.exports = app; 

// ❌ CRITICAL CHANGE FOR VERCEL: Remove app.listen()
/*
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
*/