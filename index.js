function soma(a, b) {
	return a + b;
}

function divisao(a, b) {
	return a / b;
}

function multiplicacao(a, b) {
	return a * b;
}

function subtracao(a, b) {
	return a - b;
}

function potencia(a, b) {
	return Math.pow(a, b);
}

function dobra(a) {
	return a * 2;
}
function triplica(a) {
	return a * 3;
}
function adiciona100(a) {
	return a + 100;
}

module.exports = {
	soma,
	multiplicacao,
	subtracao,
	potencia,
	divisao,
	dobra,
	triplica,
	adiciona100,
};
