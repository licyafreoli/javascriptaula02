function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

function calcularVolumeCubo(lado) {
    return lado * lado * lado;
}

function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}

function exibirMenu() {
    console.log("Opções do Menu:");
    console.log("1. Calcular Área do Triângulo");
    console.log("2. Calcular Área do Retângulo");
    console.log("3. Calcular Volume do Cubo");
    console.log("4. Calcular Área do Círculo");
    console.log("5. Sair");
}

function main() {
    let opcao;

    do {
        exibirMenu();
        opcao = parseInt(prompt("Escolha uma opção:"));

        switch (opcao) {
            case 1:
                let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
                let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
                console.log("A área do triângulo é: " + calcularAreaTriangulo(baseTriangulo, alturaTriangulo));
                break;
            case 2:
                let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
                let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
                console.log("A área do retângulo é: " + calcularAreaRetangulo(baseRetangulo, alturaRetangulo));
                break;
            case 3:
                let ladoCubo = parseFloat(prompt("Digite o lado do cubo:"));
                console.log("O volume do cubo é: " + calcularVolumeCubo(ladoCubo));
                break;
            case 4:
                let raioCirculo = parseFloat(prompt("Digite o raio do círculo:"));
                console.log("A área do círculo é: " + calcularAreaCirculo(raioCirculo));
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
        }
    } while (opcao !== 5);
}

main();
