const mongoose=require(`mongoose`);
const recruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Candidate must have a name`],
        trim: true
    },
    email: {
        type: String,
        required: [true, `Candidate must have an email`],
        trim: true
    },
    link: {
        type: String,
        required: [true, `Drive-link has to be provided`],
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
const rSchema=mongoose.model(`rSchema`,recruitSchema);
module.exports=rSchema;