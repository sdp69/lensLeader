const express=require(`express`);
const serve=express();
const path=require(`path`);
const router=express.Router();
//serve.use(express.static(path.join(__dirname, `public`)));
router.route(`/vendor_fc`).get(express.static(path.join(__dirname+`/public`+`/vendor_fc`)));
module.exports=serve;