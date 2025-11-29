const express = require('express');
const connectDB = require('./src/config/db');
const mainRoutes = require('./src/routes/mainRoutes');

const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());

// 1. connnect to DB
connectDB();

// 2. Use Routes    
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}/`);
});