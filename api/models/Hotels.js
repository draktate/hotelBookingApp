import mongoose from "mongoose";

const hotelSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    distance:{
        type:String,
        required:false
    },

    photoes:{
        type:[String]
    },
    desc:{
        type:String,
        required:false
    },
    title:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        min:0,
        max:5
    },

    rooms:{
        type:[String]
    },

    cheapestPrice:{
        type:Number
    },

    featured:{
        type:Boolean,
        default:false
    }
   
}, {timestamps:true})

export default mongoose.model("Hotel", hotelSchema);