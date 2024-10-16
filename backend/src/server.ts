import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import { router } from './routes'; 
import cors from 'cors';



const app = express();
const port = 3333;
app.use(express.json());
app.use(router); 

app.use(cors());

app.use((err:Error,req:Request,res:Response,next : NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
