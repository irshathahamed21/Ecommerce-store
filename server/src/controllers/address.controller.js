const Address = require("../models/address.model")
const authorisation = require("../middlewares/authorisation")

const {postItem} = require("./crud.controller")

const router = require("express").Router()

router.post("/", authorisation, postItem(Address))

module.exports = router