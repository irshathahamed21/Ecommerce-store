const {Schema, model} = require("mongoose")

const reqString = {type:String, required:true}
const reqNumber = {type:Number, required:true}
const reqArray = {type:Array, required:true}

const favouriteSchema = new Schema({
    img:reqArray,
    name:reqString,
    description:reqString,
    category:reqString,
    price:reqNumber,
    size:reqArray,
    rating:reqNumber,
    gender:reqString,
    brand:reqString,
    collection:reqString,
    productId:reqString,
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
}, {
    versionKey:false,
    timestamps:true
})

module.exports = model("favourite", favouriteSchema)