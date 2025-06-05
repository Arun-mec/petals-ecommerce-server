const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    previousPrice: {
        type: Number
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    colors: {
        type: [String],
        default: []
    },
    availableColors: {
        type: [String],
        default: []
    },
    sizes: {
        type: [String],
        default: []
    },
    availableSizes: {
        type: [String],
        default: []
    },
    material: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    brandDetails: {
        name: {
            type: String,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    features: {
        type: [String], // assuming `features` is an array of strings
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
