const elementGenerator = require('./templates/Element')

module.exports = function(plop) {
    plop.setGenerator('element', elementGenerator)
}
