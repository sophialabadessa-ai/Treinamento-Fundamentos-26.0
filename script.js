const categorias = [
    {
        momento: "FOCO TOTAL",
        descricao: "Pra quem precisa de um empurrãozinho na produtividade.",
        imagem: "assets/imgs/pacoteestuda.png", 
        sabores: [
            { nome: "Deep Work", preco: 42.00, desc: "Aquele gole de concentração com notas cítricas.", detalhe: "Foco: ▮▮▮▮▮" },
            { nome: "Prova Amanhã", preco: 45.00, desc: "O blend que te ajuda a virar a noite sem erro.", detalhe: "Energia: Máxima ⚡" }
        ]
    },
    {
        momento: "PARA TUDO!",
        descricao: "Desacelera... você merece um respiro.",
        imagem: "assets/imgs/pacotedorme.png", 
        sabores: [
            { nome: "Calma Canela", preco: 32.00, desc: "Aconchego em forma de café. Suave e aromático.", detalhe: "Nível de calma: ▮▮▮▮▮" },
            { nome: "Lavanda & Baunilha", preco: 38.00, desc: "Edição especial pra relaxar os ombros.", detalhe: "Nível de calma: ▮▮▮▮▮" }
        ]
    },
    {
        momento: "POWER EXPRESSO",
        descricao: "Curto, grosso e extremamente forte.",
        imagem: "assets/imgs/pacotetreina.png",
        sabores: [
            { nome: "Pré-Treino Brew", preco: 35.00, desc: "O soco de energia que o seu treino pede.", detalhe: "Força: ▮▮▮▮▮" },
            { nome: "Gym Shot", preco: 29.00, desc: "Direto ao ponto. 30 minutinhos e você vira outra pessoa.", detalhe: "Intensidade: Alta 🔥" }
        ]
    }
];
const mainContainer = document.getElementById('container-momentos');
let totalCarrinho = 0;

function renderizarPagina() {
    categorias.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'momento-section';
        
        section.innerHTML = `
    <div class="momento-titulo">${cat.momento}</div>
    
    <img src="${cat.imagem}" alt="${cat.momento}" class="imagem-momento">
    
    <p style="color: #666; margin-bottom: 20px;">${cat.descricao}</p>
    <div class="produtos-grid" id="grid-${cat.momento.replace(/\s+/g, '')}"></div>
`;
        
        mainContainer.appendChild(section);
        
        const grid = document.getElementById(`grid-${cat.momento.replace(/\s+/g, '')}`);
        cat.sabores.forEach(sabor => {
            const card = document.createElement('div');
            card.className = 'produto-card';
            card.innerHTML = `
                <h3>${sabor.nome}</h3>
                <p><strong>R$ ${sabor.preco.toFixed(2)}</strong></p>
                <p style="font-size: 0.9rem;">${sabor.desc}</p>
                <div class="nivel-calma">${sabor.detalhe}</div>
                <div class="btn-group">
                    <button onclick="alterarCarrinho(1)">Adicionar</button>
                    <button class="btn-remove" onclick="alterarCarrinho(-1)">Remover</button>
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

function alterarCarrinho(qtd) {
    totalCarrinho += qtd;
    if (totalCarrinho < 0) totalCarrinho = 0;
    document.getElementById('contador-carrinho').innerText = totalCarrinho;
}

renderizarPagina();