const {
	soma,
	subtracao,
	divisao,
	multiplicacao,
	potencia,
	adiciona100,
	adiciona200,
	adiciona300,
	dobra,
	triplica,
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

	test("teste da funcao adiciona100", () => {
		deepStrictEqual(110, adiciona100(10));
	});

	test("teste da funcao adiciona200", () => {
		deepStrictEqual(250, adiciona200(50));
	});

	test("teste da funcao adiciona300", () => {
		deepStrictEqual(400, adiciona300(100));
	});

	test("teste da funcao dobra", () => {
		deepStrictEqual(4, dobra(2));
	});

	test("teste da funcao triplica", () => {
		deepStrictEqual(30, triplica(10));
	});
});
