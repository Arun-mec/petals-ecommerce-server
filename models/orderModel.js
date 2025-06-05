const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderItems : [
        {
            name : {
                type: String, 
                required : true
            },
            qty : {
                type : Number,
                required : true
            },
            image : {
                type : String,
                required : true
            },
            price : {
                type : Number,
                required : true
            },
            product : {
                type : mongoose.Schema.Types.ObjectId,
                required : true,
                ref : "Product"
            }
        }
    ],
    shippingAddress : {
        address : { type : String, required : true},
        city :  { type : String, required : true},
        pincode :  { type : String, required : true},
        landmark :  { type : String, required : true},
        state :  { type : String, required : true},
        number : { type : Number, required : true},
    },
    paymentMethod : {
        type : String,
        required : true,
    },
    taxPrice : {
        type : Number,
        default : 0.00,
        required : true
    },
    itemPrice : {
        type : Number,
        default : 0.00,
        required : true
    },
    // paymentStatus : {
    //     id : { type : String, required : true},
    //     status : { type : String, required : true},
    //     updateTime :{ type : String, required : true},
    //     emailAddress : { type : String, required : true},
    // },
    shippingPrice : {
        type : Number,
        default : 0.00,
        required: true
    },
    totalPrice : {
        type : Number,
        default : 0.00,
        required: true
    },
    deliveryStatus : {
        type : Boolean,
        default : false,
        required: true
    },
    paidAt : {
        type : Date
    },
    deliveredAt : {
        type : Date
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Order', orderSchema);