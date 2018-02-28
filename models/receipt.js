const bookshelf = require('../bookshelf');

const model = bookshelf.Model.extend({
    tableName: 'receipt',
    idAttribute: 'id',
    hasTimestamps: false
});

module.exports = model;