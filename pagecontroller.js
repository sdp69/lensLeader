const express=require(`express`);
const control=express();
const home=require(`./home`);
const path=require(`path`);
const Router=express.Router();


control.use(express.static(path.join(__dirname, `public`)));



module.exports=control;
