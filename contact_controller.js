const express = require(`express`);
const cSchema = require(`./contact_model`);
const app = express();
let CID = 3000;
exports.createClientID = (req, res, next) => {
    CID++;
    let lower=Math.floor(Math.random()*26)+1;
    let upper=Math.floor(65+lower);
    let ref_ID=String.fromCharCode(`${upper}`);
    ref_ID+=CID;
    req.body.ref_id=ref_ID;
    console.log(req.body);
   return next();
};
exports.createClient = async (req, res)=>{
    try{
        const newPerson = await cSchema.create(req.body);
        const query=`/${req.body.ref_id}`;
        res.redirect(`/success_client`+query);
    }catch (e) {
        res.status(400).json({
            status: `fail`,
            message: e
        });
    }
};
exports.RenderClient = async (req, res, next)=>{
    const id=req.params.id;
    console.log(id);
    try{
        const fetch = await cSchema.findOne({ref_id: id});
        console.log(fetch);
        res.render(`contact_form`, {
            ref_I: fetch.ref_id,
            name: fetch.name,
            email: fetch.email,
            sel: fetch.Service,
            cn: fetch.contact_number,
            message: fetch.message
        });
    }catch (e) {
        res.status(400).json({
            status: `Failed`,
            message: e
        });
    }
};