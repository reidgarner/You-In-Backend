exports.up = function(knex, Promise) {
    return knex.schema.createTable('guests-bartenders', (GB) => {
        GB.increments('id')
        GB.integer('bartender').references('id').inTable('bartenders').onDelete('CASCADE')
        GB.integer('guest').references('id').inTable('guests').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('guests-bartenders')
};
