import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connection to database Successful')
}).catch((err) =>
{
    console.error(err)
})

app.use('/', router);



app.listen(process.env.PORT, () => {
    console.log(`Server running at PORT ${process.env.PORT}`);
});
