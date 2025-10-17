document.addEventListener('DOMContentLoaded', () => {
    const mensagens = {
        'reciclagem': {
            titulo: "Reciclagem",
            texto: "Sou um ciclo de renovação. Ao reciclar, você me ajuda a transformar o velho em novo, como um jardim que floresce a cada estação.",
            icone: 'fa-recycle',
            medalId: 'medal-recycle'
        },
        'reutilizar': {
            titulo: "Reutilizar",
            texto: "Em minhas mãos, nada se perde de verdade. Reutilize com criatividade. Dê uma nova vida a um pote, uma nova história a um brinquedo.",
            icone: 'fa-bag-shopping',
            medalId: 'medal-reuse'
        },
        'reparar': {
            titulo: "Reparar",
            texto: "Quando algo se quebra, não significa que seu caminho terminou. Com carinho, você pode reparar seus objetos. Consertar é um ato de amor.",
            icone: 'fa-hammer',
            medalId: 'medal-repair'
        },
        'reduzir': {
            titulo: "Reduzir",
            texto: "O presente mais precioso que você pode me dar é o seu cuidado. Reduza o consumo, deseje apenas o que você realmente precisa.",
            icone: 'fa-cart-arrow-down',
            medalId: 'medal-reduce'
        },
        'repensar': {
            titulo: "Repensar",
            texto: "O maior poder que você tem está na sua mente. Repense seus hábitos e suas escolhas. Cada boa pergunta me ajuda a respirar melhor.",
            icone: 'fa-lightbulb',
            medalId: 'medal-rethink'
        },
        'reintegrar': {
            titulo: "Reintegrar",
            texto: "Tudo o que vem de mim pode voltar para mim. Reintegre o orgânico à terra. Cascas de frutas e folhas viram adubo para novas vidas.",
            icone: 'fa-puzzle-piece',
            medalId: 'medal-reintegrate'
        },
        'robotica': {
            titulo: "Robótica",
            texto: "A tecnologia pode ser uma grande aliada. Use a robótica para criar soluções que me protejam e para construir um futuro mais verde.",
            icone: 'fa-robot',
            medalId: 'medal-robotics'
        },
        'inclusao': {
            titulo: "Inclusão",
            texto: "Eu sou a casa de todos, sem exceção. Em meu coração, não há diferença de cor, língua ou religião. Cuidem uns dos outros.",
            icone: 'fa-people-arrows',
            medalId: 'medal-inclusion'
        },
        'lojas': {
            titulo: "Lojas Sustentáveis",
            texto: "A moda mais bonita é aquela que já existe. Ao escolher um brechó, você reduz o desperdício e mostra que estilo e cuidado andam juntos.",
            icone: 'fa-tag',
            medalId: 'medal-shops'
        },
        'palco': {
            titulo: "O Palco da Vida",
            texto: "A arte é uma das minhas mais belas vozes. Use o palco para cantar, dançar e contar histórias que inspirem outros a me amar e proteger.",
            icone: 'fa-microphone',
            medalId: 'medal-stage'
        }
    };

    const params = new URLSearchParams(window.location.search);
    const tema = params.get('tema');
    const conteudo = mensagens[tema] || { 
        titulo: "Mensagem não encontrada", 
        texto: "Parece que houve um erro. Por favor, tente ler o QR code novamente.",
        icone: 'fa-question-circle',
        medalId: ''
    };

    document.getElementById('mensagem-titulo').textContent = conteudo.titulo;
    document.getElementById('mensagem-texto').textContent = conteudo.texto;
    document.getElementById('card-icon').innerHTML = `<i class="fa-solid ${conteudo.icone}"></i>`;
    const botao = document.getElementById('botao-coletar');
    if (conteudo.medalId) {
        botao.href = `index.html?collected=${conteudo.medalId}`;
    } else {
        botao.href = 'index.html';
    }
});