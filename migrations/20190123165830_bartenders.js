exports.up = function(knex, Promise) {
    return knex.schema.createTable('bartenders', (bartender) => {
        bartender.increments('id')
        bartender.string('first_name')
        bartender.string('last_name')
        bartender.string('email')
        bartender.string('password')
        bartender.string('workplace')
        bartender.string('image_url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bartenders')
};
