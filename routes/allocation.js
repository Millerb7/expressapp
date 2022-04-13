const express = require('express');
const router = express.Router();

// all routes are localhost:3000/allocation/...

router.post('/', async (req,res,next) => {
  try {
    const allocation = await req.models.allocation.createAllocation( req.body.vin, req.body.spotId );
    res.status(201).json('created allocation: ', allocation);
} catch (err) {
    console.error('Failed create allocation:', err);
    res.status(500).json({ message: err.toString() });
}
  next();
});

router.put('/:allocation_id', async (req,res,next) =>{ 
    try {
        const allocation = await req.models.allocation.changeAllocation( req.params.allocation_id, req.body.vin, req.body.spotId );
    res.status(201).json('created allocation: ', allocation);
    } catch(err) {
        console.error('Failed to update allocation:', err);
    res.status(500).json({ message: err.toString() });
    }
});

module.exports = router;