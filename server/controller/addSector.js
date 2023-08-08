const AsyncHandler = require('express-async-handler');
const Sector = require('../models/sectorModel');


const postSector = AsyncHandler(async (req, res) => {
    const {
        sector
    } = req.body;
    if(!sector){
        throw new Error('Respective Field is Required');
    }
    const sectors = await Sector.create({
        sector
    });
    res.status(200).json(sectors)

});

const getSectors = AsyncHandler(async (req, res) => {
    const sectors = await Sector.find()
    res.json(sectors);
})

module.exports = {
    postSector,
    getSectors
}