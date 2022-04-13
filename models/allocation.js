const knex = require('../database/knex');

const VEHICLE_TABLE = 'car';
const ALLOCATION_TABLE = 'allocation';

const createAllocation = async (vin,spotId) => { 
    const vehicle = await knex(VEHICLE_TABLE).where('vin',vin);
    if(vehicle.length > 0) {
        const allocation = await knex(ALLOCATION_TABLE).insert({ vin, spotId });
        return allocation;
    } else {
        const vehicle = await knex(VEHICLE_TABLE).insert(vin);
        const allocation = await knex(ALLOCATION_TABLE).insert({ vin, spotId });
        return allocation;
    }
    
};

const changeAllocation = async (vin,spotId) => { 
    const vehicle = await knex(VEHICLE_TABLE).where('vin',vin);
    if(vehicle.length > 0) {
        const allocation = await knex(ALLOCATION_TABLE).insert({ vin, spotId });
        return allocation;
    } else {
        const vehicle = await knex(VEHICLE_TABLE).insert(vin);
        const allocation = await knex(ALLOCATION_TABLE).update({ vin, spotId });
        return allocation;
    }
    
};

module.exports = {
    createAllocation,
    changeAllocation
}