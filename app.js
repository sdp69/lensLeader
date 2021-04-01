const express=require(`express`);
const morgan=require(`morgan`);
const path=require(`path`);
const app=express();
const helmet=require(`helmet`);
const cookieParser=require(`cookie-parser`);
const pagecontroller=require(`./pagecontroller`);
const hireController = require(`./hire_controller`);
const contact_controller = require(`./contact_controller`);
const serve=require(`./serve`);

let counter = 1;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(morgan(`dev`));
app.use(cookieParser());
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname,`public`));
app.use(express.static(path.join(__dirname, `public`)));
app.post(`/process_register`, hireController.createID, hireController.createHire);
app.post(`/process_contact`, contact_controller.createClientID, contact_controller.createClient);
app.get(`/success/:id`, hireController.Render);
app.get(`/success_client/:id`, contact_controller.RenderClient);
app.get(`/discover`, (req, res, next) => {
    if ((counter % 2 == 0 && counter % 3 == 0) || counter == 3)
        res.render(`discover3`, {});
    else if(counter % 2 == 0)
        res.render(`discover2`, {});
    else
        res.render(`discover1`, {});
    counter++;
});
app.use(`/`, pagecontroller);
app.all(`*`, (req, res, next) => {
    res.render(`404`, {});
});
module.exports=app;