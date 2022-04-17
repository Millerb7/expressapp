const knex = require("../database/knex");

const LOT_TABLE = "lot";
const SPOT_TABLE = "spot";

const findSpots = async (queries) => {
  let query;
  if (queries.stadium && queries.lot_id && queries.available) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.stadium": queries.stadium,
        "lot.id": queries.lot_id,
        available: queries.available,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.stadium && queries.lot_id) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.stadium": queries.stadium,
        "lot.id": queries.lot_id,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.stadium && queries.available) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.stadium": queries.stadium,
        available: queries.available,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.lot_id && queries.available) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.id": queries.lot_id,
        available: queries.available,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.stadium) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.stadium": queries.stadium,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.lot_id) {
    query = await knex(LOT_TABLE)
      .where({
        "lot.id": queries.lot_id,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  } else if (queries.available) {
    query = await knex(LOT_TABLE)
      .where({
        available: queries.available,
      })
      .join(SPOT_TABLE, { "lot.id": "spot.lot" });
    return query;
  }

  return query;
};

module.exports = {
  findSpots,
};
