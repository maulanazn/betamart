import PayProductSchema from './../validation/payproduct_schema.js'
import { v4 as uuidv4 } from 'uuid';
import { PayProduct } from '../repository/payproduct_repository.js';

export const addToPaymentList = async (req, res) => {
    const id = uuidv4()
    const {product_id, quantity} = await PayProductSchema.validateAsync(req.body)

    const data = {
        id: id,
        user_id: req.payload.id || req.cookies.USR_ID,
        product_id: product_id,
        quantity: quantity,
    }

    PayProduct(data)
    
    return res.status(201).json({
        status: 201, 
        message: "Successfully pay the product"
    })
}