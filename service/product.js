import {ProductSchema} from './../validation/product_schema.js'
import {CreateProduct, GetAllProduct, GetProductById} from './../repository/product_repository.js'
import { v4 as uuidv4 } from 'uuid';

export const addProduct = async (req, res) => {
    const id = uuidv4()
    const {name, stock, category, rack, location, price} = await ProductSchema.validateAsync(req.body)

    const data = {
        id: id,
        user_id: req.payload.id, 
        name: name, 
        stock: stock, 
        category: category, 
        rack: rack,
        location: location,
        price: price
    }

    CreateProduct(data)
    GetProductById(id, (err, row) => {
        if (err) {
            console.error(err.message)
        }

        res.cookie("USR_ID", `${row.user_id}`)
        res.cookie("PRD_ID", `${row.id}`)

        return res.status(201).json({
            status: 201, 
            message: "Success Add product"
        })
    })
}

export const getProducts = async (req, res) => {
    const {name, quantity, location, price} = req.query

    const data = {
        name: name || 'a',
        quantity: quantity || 0,
        location: location || '',
        price: price || 0
    }

    GetAllProduct(data, (err, row) => {
        if (err) {
            return res.status(400).json({
                status: 400, 
                message: err.message
            })
        }
        return res.status(200).json({
            status: 200, 
            message: "Success Getting all products",
            data: row
        })
    })
}