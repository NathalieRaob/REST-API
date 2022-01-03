const express = require('express');
const router = express.Router();

//handling get request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests tp /products'
    });
});

router.get('/:productID', (req,res,next) => {
    const id = req.params.productID;
    if (id === 'special'){
        res.status(200).json({
            message: "You discovered the special ID", 
            id: id
        });
    }else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted'
    });
});


module.exports = router;