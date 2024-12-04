const {
	soma,
	subtracao,
	divisao,
	multiplicacao,
	potencia,
} = require("./index.js");
const { deepStrictEqual } = require("assert");
const { test, describe } = require("node:test");

/**
 * Node v22.11.0 LTS
 * node --test --experimental-test-coverage --test-reporter=lcov --test-reporter-destination=lcov.info
 * Gerar arquivo lcov.info para integração com sonar scanner
 */

describe("Operacoes basicas", () => {
	test("teste da funcao soma", () => {
		deepStrictEqual(30, soma(15, 15));
	});
	test("teste da funcao multiplicacao", () => {
		deepStrictEqual(16, multiplicacao(4, 4));
	});
	test("teste da funcao divisao", () => {
		deepStrictEqual(6, divisao(30, 5));
	});
	test("teste da funcao subtracao", () => {
		deepStrictEqual(75, subtracao(100, 25));
	});
	test("teste da funcao potencia", () => {
		deepStrictEqual(8, potencia(2, 3));
	});
});
