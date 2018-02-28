
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('receipt', function(table) {
            table.increments('id');
            table.integer('account_id'); // should reference to a row on the account table
            table.timestamp('purchase_date');
            table.string('shop');
            table.double('total');
            table.string('label');
            table.string('photo_path'); // the path to the photo
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('receipt_details', function (table) {
            table.increments('id');
            table.integer('receipt_id'); // Should reference a row on the receipt table
            table.double('quantity');
            table.string('item');
            table.double('price');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('account', function (table) {
            table.increments('id');
            table.string('fname');
            table.string('lname');
            table.string('email');
            table.string('password');
            table.timestamp('dob');
            table.string('address');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('receipt'),
        knex.schema.dropTable('receipt_details'),
        knex.schema.dropTable('account')
    ])
};
