// ===============================
// HORA DE CODAR 3 – SIMPLES
// ===============================

// 1 - Bomba relógio de 30 a 0
function exercicio1() {
    for (let i = 30; i >= 0; i--) {
        console.log(i);
    }
    console.log("EXPLOSÃO");
}

// 2 - Ler 2 valores e garantir que o segundo não seja <= 0
function exercicio2() {
    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor (não pode ser zero ou negativo):"));

    while (valor2 <= 0) {
        valor2 = Number(prompt("Valor inválido! Digite novamente o segundo valor:"));
    }

    alert("Resultado da divisão: " + (valor1 / valor2));
}

// 3 - Imprimir números de 10 a 1
function exercicio3() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

// 4 - Média dos números entre 15 e 100
function exercicio4() {
    let soma = 0;
    let quantidade = 0;

    for (let i = 15; i <= 100; i++) {
        soma += i;
        quantidade++;
    }

    console.log("Média:", soma / quantidade);
}

// 5 - Média dos dois números e de todos os números entre eles
function exercicio5() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número (maior):"));

    let soma = 0;
    let qtd = 0;

    for (let i = n1; i <= n2; i++) {
        soma += i;
        qtd++;
    }

    alert("Média de todos os valores entre eles: " + (soma / qtd));
}

// 6 - Ler 2 notas, dizer se foi aprovado e perguntar se quer calcular novamente
function exercicio6() {
    let aprovados = 0;
    let continuar = "S";

    while (continuar.toUpperCase() === "S") {
        let n1 = Number(prompt("Digite a primeira nota:"));
        let n2 = Number(prompt("Digite a segunda nota:"));
        let media = (n1 + n2) / 2;

        alert("Média final: " + media);

        if (media >= 9.5) {
            alert("Aluno aprovado!");
            aprovados++;
        }

        continuar = prompt("Calcular a média de outro aluno? S/N");
    }

    alert("Quantidade de alunos aprovados: " + aprovados);
}

// 7 - Ler 6 notas válidas (0 a 10) e calcular média
function exercicio7() {
    let soma = 0;

    for (let i = 1; i <= 6; i++) {
        let nota = Number(prompt("Digite a nota " + i + " (0 a 10):"));

        while (nota < 0 || nota > 10) {
            nota = Number(prompt("Nota inválida! Digite novamente:"));
        }

        soma += nota;
    }

    alert("Média final: " + (soma / 6));
}

// 8 - Imprimir de 1 até N
function exercicio8() {
    let N = Number(prompt("Digite um número maior que 0:"));

    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}

// 9 - Imprimir os 10 primeiros números inteiros maiores que 100
function exercicio9() {
    for (let i = 101; i <= 110; i++) {
        console.log(i);
    }
}

// 10 - Ler 10 valores e contar quantos estão entre 24 e 42
function exercicio10() {
    let dentro = 0;
    let fora = 0;

    for (let i = 1; i <= 10; i++) {
        let v = Number(prompt("Digite o valor " + i + ":"));

        if (v >= 24 && v <= 42) {
            dentro++;
        } else {
            fora++;
        }
    }

    alert("Dentro do intervalo: " + dentro + "\nFora do intervalo: " + fora);
}

// 11 - Tabuadas de 1 até N
function exercicio11() {
    let N = Number(prompt("Digite um valor para gerar tabuadas:"));

    for (let i = 1; i <= N; i++) {
        console.log("TABUADA DO " + i);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("----------------");
    }
}
