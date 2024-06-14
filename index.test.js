const soma = require('./index.js')
const { deepStrictEqual } = require('assert')

;(async () => {
    deepStrictEqual(30, soma(15, 15))
})()