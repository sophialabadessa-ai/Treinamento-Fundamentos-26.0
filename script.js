const categorias = [
    {
        momento: "FOCO TOTAL",
        descricao: "Torra média, acidez equilibrada",
        sabores: [
            { nome: "Deep Work", preco: 42.00, desc: "Notas cítricas e intensas", detalhe: "Ideal para: Concentração Profunda" },
            { nome: "Prova Amanhã", preco: 45.00, desc: "Blend forte 'Pra virar a noite'", detalhe: "Nível de calma: ▮▮▮" }
        ]
    },
    {
        momento: "PARA TUDO!",
        descricao: "Descafeinado com notas de chocolate",
        sabores: [
            { nome: "Calma Canela", preco: 32.00, desc: "Blend aromático e suave", detalhe: "Nível de calma: ▮▮▮▮▮" },
            { nome: "Lavanda & Baunilha", preco: 38.00, desc: "Edição aromática relaxante", detalhe: "Nível de calma: ▮▮▮▮▮" }
        ]
    },
    {
        momento: "POWER EXPRESSO",
        descricao: "Forte, torra escura",
        sabores: [
            { nome: "Pré-Treino Brew", preco: 35.00, desc: "Blend encorpado e energético", detalhe: "💪 Nível de força: ▮▮▮▮" },
            { nome: "Gym Shot", preco: 29.00, desc: "Intensidade alta, porção pequena", detalhe: "💪 Tomar 30min antes" }
        ]
    }
];

const mainContainer = document.getElementById('container-momentos');
let totalCarrinho = 0;

function renderizarPagina() {
    categorias.forEach(cat => {
        // Criar a caixa retangular do Momento
        const section = document.createElement('section');
        section.className = 'momento-section';
        
        section.innerHTML = `
            <div class="momento-titulo">${cat.momento}</div>
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