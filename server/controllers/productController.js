const Product = require('../models/product')
const axios = require('axios')

class productController {
  static getAll(req, res, next) {
    Product.find()
      .then(products => {
        res.status(200).json(products)
      })
      .catch(next)
  }

  static create(req, res, next) {
    const createdProduct = {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      stock: req.body.stock,
      price: req.body.price,
      category: req.body.category
    }

    Product.create(createdProduct)
      .then(product => {
        res.status(201).json({
          product, msg: 'New product is successfully added'
        })
      })
      .catch(next)
  }

  static update(req, res, next) {
    const editedProduct = {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      stock: req.body.stock,
      price: req.body.price
    }

  Product.findByIdAndUpdate(req.params.id, editedProduct)
    .then(product => {
      res.status(200).json({
        product, msg: 'Products data is successfully updated'
      })
    })
    .catch(next)
  }

  static delete(req, res, next) {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      res.status(200).json({
        product, msg: 'Product is successfully deleted'
      })
    })
    .catch(next)
  }

  static getCardInfo(req, res, next) {
    axios({
      method: 'get',
      url: `http://yugiohprices.com/api/card_data/${req.params.name}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = productController