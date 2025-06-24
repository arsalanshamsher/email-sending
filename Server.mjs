import express, { json } from 'express'
import mailRoutes from './routes/mailRoutes.mjs'
const app = express()
const port = 2000

// for json response
app.use(json())

app.get('/',(req,res)=>{
    res.send('test server ')
})
app.use('/api/v1',mailRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})