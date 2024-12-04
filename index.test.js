const soma = require("./index.js");
const { deepStrictEqual } = require("assert");
const { test } = require("node:test");

/**
 * Node v22.11.0 LTS
 * node --test --experimental-test-coverage --test-reporter=lcov --test-reporter-destination=lcov.info
 * Gerar arquivo lcov.info para integração com sonar scanner
 */

test("teste da funcao soma", () => {
	deepStrictEqual(30, soma(15, 15));
});
