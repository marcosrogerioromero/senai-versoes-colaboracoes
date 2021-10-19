const ListaDePecas = ['Peca de teste', 'AB', 'Peca B']

console.log('quantidade de caracteres')

if (ListaDePecas.length <= 10) {
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index = 0; index < ListaDePecas.length; index++) {
    const pecaAtual = ListaDePecas[index];
    if (pecaAtual.length < 3) {
        console.log(pecaAtual + ':a paça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaAtual + ': a peça pode ser cadastrada.')

    }
}

console.log('peso da peça')

const pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 100) {
    console.log('peso suficiente.')
} else {
    console.log('valor insuficiente')
}