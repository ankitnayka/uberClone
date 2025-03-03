import http from 'http';
import app from './app.js'
import connectDB from './db/db.js';

const server=http.createServer(app)

const PORT=process.env.PORT
connectDB();
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})