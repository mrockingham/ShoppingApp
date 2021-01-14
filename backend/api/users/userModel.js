const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findById,
    findBy,
};

function find() {
    return db("user as u")
        .orderBy("u.id");
}

async function add(user) {
    try {
        const [id] = await db("user").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}
function findById(id) {
    return db("user").where({ id }).first();
}

function findBy(filter) {
    return db("user as u")
        .where(filter)
        .select("u.id", "u.email", "u.password")
        .orderBy("u.id");
}