const bookshelf = require('../bookshelf');

const model = bookshelf.Model.extend({
    tableName: 'account',
    idAttribute: 'id',
    hasTimestamps: false
});

module.exports = model;