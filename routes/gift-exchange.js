const express = require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")

const names = {
    test: 0
}

router.post("/pairs/", (req, res, next) => {
    try {
        let names = GiftExchange.pairs(req.body.names)
        res.status(200).send(names)
    } catch(err) {
        next(err)
    }
})

router.post("/traditional/", (req, res, next) => {
    try {
        let names = GiftExchange.traditional(req.body.names)
        res.status(200).send(names)
    } catch(err) {
        next(err)
    }
})

module.exports = router