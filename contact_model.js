const mongoose=require(`mongoose`);
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Client must have a name`],
        trim: true
    },
    email: {
        type: String,
        required: [true, `Client must have an email`],
        trim: true
    },
    Service: {
        type: String,
        required: [true, `Required services must be provided`],
        trim: true
    },
    contact_number: {
        type: Number,
        required: [true, `Contact-Number is Compulsory`],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    message: {
        type: String,
        trim: true,
        required: [true, `You must have some skill`]
    },
    ref_id: {
        type: String,
        required: [true, `ref_id is important`]
    }
});
const cSchema=mongoose.model(`cSchema`,contactSchema);
module.exports=cSchema;