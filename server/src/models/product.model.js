const {Schema, model} = require("mongoose")

const reqArray = {type:Array, required:true}
const reqString = {type:String, required:true}
const reqNumber = {type:Number, required:true}

const productSchema = new Schema({
    name:reqString,
    img:reqArray,
    description:reqString,
    category:reqString,
    price:reqNumber,
    size:reqArray,
    rating:reqNumber,
    gender:reqString,
    brand:reqString,
    collection:reqString
}, {
    versionKey:false
})

module.exports = model("product", productSchema)

