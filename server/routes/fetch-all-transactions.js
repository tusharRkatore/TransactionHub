const express = require('express');
const fetchRoute = express.Router();
const Product = require('../models/Product');

// Route to get all the product transactions
fetchRoute.route('/all-transactions').get(async (req, res) => {
    try {
        
        const products = await Product.find(); 

       
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching all transactions:', error.message);
        res.status(500).send('Error fetching transactions');
    }
});

module.exports = fetchRoute;
