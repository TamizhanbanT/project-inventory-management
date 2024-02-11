const mongoose = require("mongoose")

const billSchema = mongoose.Schema(
    {
        vendorName: { type: String, required: true },
        vendorPhoneNumber: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
        tax: { type: Number, required: true },
        subTotal: { type: Number, required: true },
        paymentMode: { type: String, required: true },
        cartItems: { type: Object, required: true }
    },
    { timestamps: true }
)

const billModel = mongoose.model("bills", billSchema)

module.exports = billModel