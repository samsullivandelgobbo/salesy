const inventoryService = require('../services/inventoryService');
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

exports.addPhoto = async (req, res) => {
  try {
      const jsondata = JSON.parse(req.body.jsondata)
    const newVehicle = await inventoryService.addVehicle(jsondata)
 
    
    res.status(200).send(newVehicle)
  } catch (err) {
    res.status(500).json(err)
  }

} 
exports.addNew = async (req, res) => {
   try {
    const newVehicle = await inventoryService.addVehicle(req.body)
    res.status(200).send(newVehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.updateOne = async(req, res) => {
  try{
    const updateVehicle = await inventoryService.updateVehicle(req.body._id, req.body.object)
    console.log(req.body)
    console.log(req.body.object)
    console.log(req.body._id)
    res.status(200).send(updateVehicle)
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


//this could be the problem if this doesnt work

exports.getOne = async (req, res) => {
  try {
    const vehicle = await inventoryService.getVehicle(req.body)
    res.status(200).send(vehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}

//figure this out

exports.deleteOne = async (req, res) => {
  try {
    const vehicle = await inventoryService.deleteVehicle(req.body)
    res.status(200).send(vehicle)
  } catch (err) {
    res.status(500).json(err)
  }
}