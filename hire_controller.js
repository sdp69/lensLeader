const express=require(`express`);
const rSchema=require(`./recruit_model`);
const app=express();
const path=require(`path`);

let ID=999;
exports.createID = (req, res, next) => {
    ID++;
    let lower=Math.floor(Math.random()*26)+1;
    let upper=Math.floor(65+lower);
    let ref_ID=String.fromCharCode(`${upper}`);
    ref_ID=ref_ID+ID;
    req.body.ref_id=ref_ID;
    return next();
};
exports.createHire = async (req, res)=>{
    try{
        const newPerson = await rSchema.create(req.body);
        const query=`/${req.body.ref_id}`;
        res.redirect(`/success`+query);
    }catch (e) {
        res.status(400).json({
            status: `fail`,
            message: e
        });
    }
};
exports.Render = async (req, res, next)=>{
    const id=req.params.id;
    console.log(id);
    try{
        const fetch = await rSchema.findOne({ref_id: id});
        console.log(fetch);
    res.render(`recruitment_form`, {
        ref_I: fetch.ref_id,
        name: fetch.name,
        email: fetch.email,
        link: fetch.link,
        cn: fetch.contact_number,
        message: fetch.message,
    });
    }catch (e) {
        res.status(400).json({
            status: `Failed`,
            message: e
        });
    }
};