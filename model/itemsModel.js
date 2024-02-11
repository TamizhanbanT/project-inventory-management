const mongoose = require("mongoose")

const itemSchema = mongoose.Schema(
    {
        type: { type: String, required: true },
        stock:{ type: Object, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        material: { type: String, required: true },
        image_url: { type: String, required: true },
    },
    { timestamps: true }
)

const itemModel = mongoose.model("items", itemSchema)

module.exports = itemModel