const express = require('express');
const router = express.Router();
const authenticator = require('../middleware/auth');

// all routes are localhost:3000/allocation/...

router.post('/', async (req,res,next) => {
  try {
    authenticator.authenticateJWT( req, res, next );
    const allocation = await req.models.allocation.createAllocation( req.body.vin, req.body.spotId );
    res.status(201).json('created allocation: ', allocation);
} catch (err) {
    console.error('Failed create allocation:', err);
    res.status(500).json({ message: err.toString() });
}
  next();
});

router.put('/:allocation_id', async (req,res,next) => { 
    try {
        authenticator.authenticateJWT( req, res, next );
        const allocation = await req.models.allocation.changeAllocation( req.params.allocation_id, req.body.vin, req.body.spotId );
        res.status(201).json('created allocation: ', allocation);
    } catch(err) {
        console.error('Failed to update allocation:', err);
        res.status(500).json({ message: err.toString() });
    }
});

router.delete('/:allocation_id', async (req,res,next) => {
    try {
        authenticator.authenticateJWT( req, res, next );
        const rows = await req.models.allocation.deleteAllocation( req.params.allocation_id );
        res.status(201).json('deleted allocation, rows affected: ', rows);
    } catch (err) {
        console.error('Failed to delete allocation:', err);
        res.status(500).json({ message: err.toString() });
    }
});

module.exports = router;