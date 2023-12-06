const productController={
    detail: (req,res) => {
        res.render('productDetail')
    },
    shoppingCart: (req,res) => {
        res.render('shoppingCart')
    }
}

module.exports= productController