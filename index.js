import d4tree from 'd4tree';
window.tree = d4tree(require('./paypal.json'));
module.exports = window.tree
