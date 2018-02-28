const bookshelf = require('../bookshelf');

const model = bookshelf.Model.extend({
    tableName: 'receipt_details',
    idAttribute: 'id',
    hasTimestamps: false
});

module.exports = model;