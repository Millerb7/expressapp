const express = require('express');
const router = express.Router();
const { loggerMiddleware } = require('../middleware/logger');

// all routes are localhost:3000/allocation/...

router.post('/', loggerMiddleware, async (req,res,next) => {
  try {
    const allocation = await req.models.allocation.createAllocation( req.body.license_plate, req.body.spotID, req.user.email );
    res.status(201).json('created allocation: '+ allocation);
} catch (err) {
    console.error('Failed create allocation:', err);
    res.status(500).json({ message: err.toString() });
}
  next();
});

router.put('/:allocation_id', loggerMiddleware, async (req,res,next) => { 
    try {
        const allocation = await req.models.allocation.changeAllocation( req.params.allocation_id, req.body.license_plate, req.user );
        res.status(200).json('updated allocation: '+ allocation);
    } catch(err) {
        console.error('Failed to update allocation:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.delete('/:allocation_id', loggerMiddleware, async (req,res,next) => {
    try {
        const rows = await req.models.allocation.deleteAllocation( req.params.allocation_id );
        res.status(204).json('deleted allocation, rows affected: '+ rows);
    } catch (err) {
        console.error('Failed to delete allocation:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;