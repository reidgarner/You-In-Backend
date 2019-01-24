const db = require('../database-connection')

module.exports = {
    readAllBartenders() {
        return db('bartenders').orderBy('id', 'asce')
    },
    readBartenderById(id) {
        return db('bartenders').where('id', id).first()
    },
    createBartender(newBartender) {
        return db('bartenders').insert(newBartender).returning('*')
    },
    updateBartender(id, updatedInfo) {
        returndb('bartenders').update(updatedInfo).where('id', id).returning('*')
    },
    deleteBartender(id) {
        return db('bartenders').where('id', id).del()
    }
}