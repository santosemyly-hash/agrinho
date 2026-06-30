function calcularEconomia() {
    // Captura dos dados do formulário
    const cultura = document.getElementById('cultura').value;
    const area = parseFloat(document.getElementById('area').value);
    
    if (isNaN(area) || area <= 0) {
        alert("Por favor, insira uma área válida.");
        return;
    }

    // Consumo médio estimado em litros por hectare/dia (valores ilustrativos para o projeto)
    let consumoPorHectare = 0;
    if (cultura === 'milho') consumoPorHectare = 5000;
    if (cultura === 'soja') consumoPorHectare = 4500;
    if (cultura === 'hortalicas') consumoPorHectare = 6000;

    const consumoTotalTradicional = consumoPorHectare * area;
    // O gotejamento gera em média 30% de economia de água
    const economia = consumoTotalTradicional * 0.3; 

    // Atualizando a interface com os resultados
    document.getElementById('consumo-estimado').innerText = 
        `O consumo estimado com irrigação convencional seria de ${consumoTotalTradicional.toLocaleString('pt-BR')} litros por dia.`;
    
    document.getElementById('economia-gotejamento').innerText = 
        `💡 Ao adotar o sistema de gotejamento sustentável, você economiza cerca de ${economia.toLocaleString('pt-BR')} litros de água por dia!`;

    // Mostra a seção de resultados
    document.getElementById('resultado').classList.remove('hidden');
}