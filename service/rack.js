import RackSchema from './../validation/rack_schema.js'
import { v4 as uuidv4 } from 'uuid';
import { CreateRack } from '../repository/rack_repository.js';

export const addToRack = async (req, res) => {
    const id = uuidv4()
    const {product_id, quantity, location} = await RackSchema.validateAsync(req.body)

    const data = {
        id: id,
        user_id: req.payload.id || req.cookies.USR_ID, 
        product_id: product_id,
        quantity: quantity,
        location: location,
    }

    CreateRack(data)
    
    return res.status(201).json({
        status: 201, 
        message: "Success Add product to rack"
    })
}