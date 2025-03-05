import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import captainRoutes from './routes/captain.routes.js'
import mapsRoutes from './routes/map.routes.js'
import cookieParser from 'cookie-parser'


dotenv.config();

const app=express()

app.use(
    cors({
      origin: 'http://localhost:5173', 
      credentials: true, 
    })
  );
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use('/users',userRoutes)
app.use('/captain',captainRoutes)
app.use('/maps',mapsRoutes)



export default app;