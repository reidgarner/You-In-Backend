const db = require('../database-connection')

module.exports = {
    readAllGuests() {
        return db('guests').orderBy('id', 'asce')
    },
    readGuestById(id) {
        return db('guests').where('id', id).first()
    },
    createGuest(newGuest) {
        return db('guests').insert(newGuest).returning('*')
    },
    updateGuest(id, updatedInfo) {
        returndb('guests').update(updatedInfo).where('id', id).returning('*')
    },
    deleteGuest(id) {
        return db('guests').where('id', id).del()
    }
}