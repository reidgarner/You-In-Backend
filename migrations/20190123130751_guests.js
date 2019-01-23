
exports.up = function(knex, Promise) {
    return knex.schema.createTable('guests', (guest) => {
        guest.increments('id')
        guest.string('first_name')
        guest.string('last_name')
        guest.string('email')
        guest.string('password')
        guest.string('image_url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('guests')
};