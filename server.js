const dotenv=require(`dotenv`);
dotenv.config({path: `./config.env`});
const app=require(`./app`);
const mongoose=require(`mongoose`);
const db=process.env.DATABASE;
const dbc = process.env.DATABASE2;
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log(` dB connection successful`);
}).catch(er => {
    console.log(er);
    console.log(`dB Connection error`);
});

const port=process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app started on port: ${port}`);
});
