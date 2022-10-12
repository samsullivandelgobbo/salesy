const inventoryService = require('../services/inventoryService');
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

exports.addNew = async (req, res) => {
  try {
    console.log('POST Photo:')
    const jsondata = JSON.parse(req.body.jsondata)
    console.log(jsondata)
    const newVehicle = await inventoryService.addVehicle(jsondata)
    res.status(200).send(newVehicle)
  } catch (err) {
    res.status(500).json(err)
    
  }
} 
exports.loadAll = async (req, res) => {
  try {
    const vehicles = await inventoryService.getAll()
    res.status(200).send(vehicles)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.deleteOne = async (req, res) => {
  try {
    const vehicle = await inventoryService.deleteVehicle(req.body)
    res.status(200).send(vehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.updateSoldState = async(req, res) => {
  try{
    const updateVehicle = await inventoryService.updateVehicleSoldState(req.body.id, req.body.sold)
    console.log(req.body)
    console.log(req.body.sold)
    console.log(req.body.id)
    res.status(200).send(updateVehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.updateStockNum = async(req, res) => {
  try{
    const updateVehicle = await inventoryService.updateVehicleStockNum(req.body.id, req.body.stocknum)
    console.log(req.body)
    console.log(req.body.stocknum)
    console.log(req.body.id)
    res.status(200).send(updateVehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.updatePrice = async(req, res) => {
  try{
    const updateVehicle = await inventoryService.updateVehiclePrice(req.body.id, req.body.price)
    console.log(req.body)
    console.log(req.body.price)
    console.log(req.body.id)
    res.status(200).send(updateVehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.updateCustomer = async(req, res) => {
  try{
    const updateVehicle = await inventoryService.updateVehicleCustomer(req.body.id, req.body.customer)
    console.log(req.body)
    console.log(req.body.customer)
    console.log(req.body.id)
    res.status(200).send(updateVehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.findByStockNum = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByStockNum(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)
  }
}
exports.findByYear = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByYear(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)
  }
}
exports.findByMake = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByMake(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)

  }
}
exports.findByModel = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByModel(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)
  }
}
exports.findByPrice = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByPrice(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)
  }
}
exports.findByLocation = async (req, res) => {
  try {
    console.log(req.params.id)
    const vehicle = await inventoryService.getVehicleByLocation(req.params.id)
    res.status(200).send(vehicle)
  } catch (err) {
    res.stauts(500).json(err)
  }
}
