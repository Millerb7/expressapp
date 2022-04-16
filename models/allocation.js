const knex = require('../database/knex');

const VEHICLE_TABLE = 'car';
const ALLOCATION_TABLE = 'allocation';
const EVENT_TABLE = 'events';

const createAllocation = async (license_plate,spotId,employee) => { 
    let vehicle = await knex(VEHICLE_TABLE).where('license_plate',license_plate);
    if(vehicle.length === 0) {
        vehicle = await knex(VEHICLE_TABLE).insert({ license_plate });
    }
    let date = new Date;
        date = date.getFullYear()+ '-' + date.getMonth() + '-' + date.getDay();
        let event = await knex(EVENT_TABLE).where('event_date',date);
        if(event.length === 0) {
            event = 'visiting/tour day';
        }
        const allocation = await knex(ALLOCATION_TABLE).insert({ parking_spot: spotId, vehicle: license_plate, employee, events: event, date });
        return allocation;
};

const changeAllocation = async (allocation_id,license_plate,employee) => { 
    let vehicle = await knex(VEHICLE_TABLE).where('license_plate',license_plate);
    if(vehicle.length === 0) {
        vehicle = await knex(VEHICLE_TABLE).insert({ license_plate });
    }
    const allocation = await knex(ALLOCATION_TABLE).where({ id: allocation_id }).update({ vehicle: license_plate, employee: employee.email }, ['id','vehicle','employee']);
    return allocation;
};

const deleteAllocation = async (id) => {
    const rows = await knex(ALLOCATION_TABLE).where({ id }).del();
    return rows;
};

module.exports = {
    createAllocation,
    changeAllocation,
    deleteAllocation
}