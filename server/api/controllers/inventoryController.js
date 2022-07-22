const Vehicle = require('../models/vehicleModel')
const { InventoryService } = require('../services/inventory-service')

exports.getAll = async (req, res) => {
  try {
    await InventoryService.getAll()
    res.status(200).send(getall)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addNew = async (req, res) => {
  const vehicle = new Vehicle(req.body)
  try {
    await InventoryService.addVehicle(vehicle)
    res.status(200).send(vehicle)
  } catch (err) {
    res.status(500).json({ error: err })
  }

}

exports.addNew = async (req, res) => {
  const vehicle = new Vehicle(req.body)
  vehicle.save()
  res.status(200).send(vehicle)
}

exports.getAll = async (req, res) => {
  const vehicles = await Vehicle.find()
  res.status(200).send(vehicles)
}