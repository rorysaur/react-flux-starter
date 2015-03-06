var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CatStore = assign({}, EventEmitter.prototype, {
});

module.exports = CatStore;
