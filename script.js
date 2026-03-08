// ==================== BANCO DE DADOS ====================
const pizzas = [
    // Tradicionais
    { id: 1, nome: 'Margherita', descricao: 'Molho, mussarela de búfala, manjericão', preco: 49.90, imagem: 'https://images.pexels.com/photos/6605218/pexels-photo-6605218.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'tradicionais' },
    { id: 2, nome: 'Pepperoni', descricao: 'Molho, mussarela, pepperoni, orégano', preco: 54.90, imagem: 'https://images.pexels.com/photos/4109088/pexels-photo-4109088.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'tradicionais', promocao: true, precoPromocional: 44.90 },
    { id: 3, nome: 'Calabresa', descricao: 'Molho, mussarela, calabresa, cebola', preco: 52.90, imagem: 'https://images.pexels.com/photos/6995180/pexels-photo-6995180.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'tradicionais' },
    { id: 4, nome: 'Portuguesa', descricao: 'Molho, mussarela, presunto, ovos, cebola, azeitonas', preco: 56.90, imagem: 'https://images.pexels.com/photos/6995155/pexels-photo-6995155.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'tradicionais' },
    
    // Especiais
    { id: 5, nome: 'Quatro Queijos', descricao: 'Mussarela, parmesão, gorgonzola, catupiry', preco: 62.90, imagem: 'https://images.pexels.com/photos/6995150/pexels-photo-6995150.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'especiais', promocao: true, precoPromocional: 52.90 },
    { id: 6, nome: 'Frango Catupiry', descricao: 'Molho, mussarela, frango, catupiry, milho', preco: 59.90, imagem: 'https://images.pexels.com/photos/6995173/pexels-photo-6995173.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'especiais' },
    { id: 7, nome: 'Bacon', descricao: 'Molho, mussarela, bacon, cheddar, cebola', preco: 64.90, imagem: 'https://images.pexels.com/photos/6995162/pexels-photo-6995162.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'especiais' },
    { id: 8, nome: 'Vegetariana', descricao: 'Molho, mussarela, abobrinha, berinjela, rúcula', preco: 58.90, imagem: 'https://images.pexels.com/photos/6995178/pexels-photo-6995178.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'especiais' },
    
    // Doces
    { id: 9, nome: 'Chocolate Morango', descricao: 'Chocolate, morangos, leite condensado', preco: 69.90, imagem: 'https://images.pexels.com/photos/4690624/pexels-photo-4690624.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'doces' },
    { id: 10, nome: 'Banana', descricao: 'Banana, canela, doce de leite, castanhas', preco: 67.90, imagem: 'https://images.pexels.com/photos/4690594/pexels-photo-4690594.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'doces', promocao: true, precoPromocional: 57.90 },
    { id: 11, nome: 'Romeu Julieta', descricao: 'Mussarela, goiabada, queijo minas', preco: 64.90, imagem: 'https://images.pexels.com/photos/4690620/pexels-photo-4690620.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'doces' },
    { id: 12, nome: 'Prestígio', descricao: 'Chocolate, coco, leite condensado', preco: 71.90, imagem: 'https://images.pexels.com/photos/4690623/pexels-photo-4690623.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'doces' },
    
    // Bebidas
    { id: 13, nome: 'Coca-Cola 2L', descricao: 'Refrigerante Coca-Cola 2L', preco: 12.90, imagem: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-50593.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'bebidas' },
    { id: 14, nome: 'Guaraná 2L', descricao: 'Refrigerante Guaraná 2L', preco: 11.90, imagem: 'https://images.pexels.com/photos/3259639/pexels-photo-3259639.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'bebidas' },
    { id: 15, nome: 'Suco Laranja', descricao: 'Suco natural de laranja 500ml', preco: 9.90, imagem: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'bebidas' },
    { id: 16, nome: 'Água Mineral', descricao: 'Água mineral 500ml', preco: 4.90, imagem: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600', categoria: 'bebidas' }
];

// Promoções
const promocoes = [
    { id: 1, titulo: 'Combo Família', descricao: '2 pizzas grandes + 1 refri 2L', preco: 99.90, precoOriginal: 129.90, icone: 'fa-pizza-slice' },
    { id: 2, titulo: 'Combro Dupla', descricao: '1 pizza grande + 1 refri', preco: 59.90, precoOriginal: 74.90, icone: 'fa-heart' },
    { id: 3, titulo: 'Happy Hour', descricao: '20% OFF das 18h às 20h', icone: 'fa-clock' }
];

// Depoimentos (SÓ TEXTO, SEM FOTO)
const depoimentos = [
    { nome: 'Ana Silva', texto: 'Melhor pizza da cidade! Massa leve e ingredientes frescos.', estrelas: 5 },
    { nome: 'Carlos Santos', texto: 'Entrega super rápida e pizza sempre quentinha!', estrelas: 5 },
    { nome: 'Mariana Oliveira', texto: 'Ambiente aconchegante e pizza tradicional.', estrelas: 5 }
];

// Cupons de desconto
const cupons = {
    'PIZZA10': 10,
    'PIZZA20': 20,
    'FRETE1': 5
};

// ==================== ESTADO GLOBAL ====================
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let pontosFidelidade = parseInt(localStorage.getItem('pontos')) || 0;
let cupomAtivo = null;
let categoriaAtual = 'todos';
let termoBusca = '';

// ==================== ELEMENTOS DOM ====================
const loading = document.getElementById('loading');
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
const carrinhoMobile = document.getElementById('carrinho-mobile');
const carrinhoSidebar = document.getElementById('carrinho-sidebar');
const overlay = document.getElementById('overlay');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const carrinhoItems = document.getElementById('carrinho-items');
const carrinhoContadorMobile = document.getElementById('carrinho-contador-mobile');
const carrinhoTotal = document.getElementById('carrinho-total');
const btnFinalizar = document.getElementById('btn-finalizar');
const btnContinuar = document.getElementById('btn-continuar');
const searchInput = document.getElementById('search-input');
const pizzasGrid = document.getElementById('pizzas-grid');
const promocoesGrid = document.getElementById('promocoes-grid');
const depoimentosContainer = document.getElementById('depoimentos-container');
const pontosElement = document.getElementById('pontos-usuario');
const progressoFidelidade = document.getElementById('progresso-fidelidade');
const faltamPontos = document.getElementById('faltam-pontos');
const codigoIndicacao = document.getElementById('codigo-indicacao');
const newsletterForm = document.getElementById('newsletter-form');
const contatoForm = document.getElementById('contato-form');
const backToTop = document.getElementById('back-to-top');
const whatsappFloat = document.getElementById('whatsapp-float');

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
    
    renderizarPizzas();
    renderizarPromocoes();
    renderizarDepoimentos();
    atualizarCarrinhoCount();
    atualizarFidelidade();
    carregarPedidos();
});

// ==================== MENU MOBILE ====================
menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// ==================== CARRINHO ====================
carrinhoMobile.addEventListener('click', () => {
    carrinhoSidebar.classList.add('active');
    overlay.classList.add('active');
    renderizarCarrinho();
});

fecharCarrinho.addEventListener('click', () => {
    carrinhoSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    carrinhoSidebar.classList.remove('active');
    overlay.classList.remove('active');
    menu.classList.remove('active');
});

btnContinuar.addEventListener('click', () => {
    carrinhoSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

function renderizarCarrinho() {
    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = `
            <div class="carrinho-vazio">
                <i class="fas fa-pizza-slice"></i>
                <p>Seu carrinho está vazio</p>
                <small>Adicione pizzas deliciosas!</small>
            </div>
        `;
        carrinhoTotal.textContent = 'R$ 0,00';
        return;
    }

    let html = '';
    let subtotal = 0;

    carrinho.forEach(item => {
        const pizza = pizzas.find(p => p.id === item.id);
        const preco = item.precoPromocional || pizza.preco;
        const totalItem = preco * item.quantidade;
        subtotal += totalItem;

        html += `
            <div class="carrinho-item">
                <img src="${pizza.imagem}" alt="${pizza.nome}">
                <div class="carrinho-item-info">
                    <h4>${pizza.nome}</h4>
                    <span>R$ ${preco.toFixed(2)}</span>
                    <div class="carrinho-item-qtde">
                        <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                        <button onclick="removerItem(${item.id})" style="color: #d32f2f;">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    });

    let desconto = 0;
    if (cupomAtivo) {
        desconto = cupons[cupomAtivo] || 0;
    }

    const entrega = subtotal > 80 ? 0 : 5;
    const total = subtotal - desconto + entrega;

    carrinhoItems.innerHTML = html;
    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
}

window.alterarQuantidade = function(id, delta) {
    const item = carrinho.find(i => i.id === id);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            carrinho = carrinho.filter(i => i.id !== id);
        }
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinhoCount();
        renderizarCarrinho();
    }
};

window.removerItem = function(id) {
    carrinho = carrinho.filter(i => i.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoCount();
    renderizarCarrinho();
    mostrarNotificacao('Item removido do carrinho');
};

function adicionarAoCarrinho(id) {
    const pizza = pizzas.find(p => p.id === id);
    const itemExistente = carrinho.find(i => i.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: pizza.id,
            preco: pizza.preco,
            precoPromocional: pizza.precoPromocional,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoCount();
    mostrarNotificacao(`${pizza.nome} adicionada ao carrinho!`);
}

function atualizarCarrinhoCount() {
    const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    carrinhoContadorMobile.textContent = total;
}

btnFinalizar.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
        return;
    }

    let msg = 'Olá! Gostaria de pedir:%0A%0A';
    let total = 0;

    carrinho.forEach(item => {
        const pizza = pizzas.find(p => p.id === item.id);
        const preco = item.precoPromocional || pizza.preco;
        msg += `${item.quantidade}x ${pizza.nome} - R$ ${(preco * item.quantidade).toFixed(2)}%0A`;
        total += preco * item.quantidade;
    });

    // Ganha pontos (1 ponto a cada R$10)
    const pontosGanhos = Math.floor(total / 10);
    pontosFidelidade += pontosGanhos;
    localStorage.setItem('pontos', pontosFidelidade);
    
    msg += `%0ATotal: R$ ${total.toFixed(2)}`;
    msg += `%0A%0A🎯 Pontos ganhos: ${pontosGanhos}`;
    
    window.open(`https://wa.me/5511987654321?text=${msg}`, '_blank');
    
    // Salva o pedido
    salvarPedido();
    
    // Limpa carrinho
    carrinho = [];
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoCount();
    renderizarCarrinho();
    atualizarFidelidade();
});

// ==================== PIZZAS ====================
function renderizarPizzas(categoria = 'todos') {
    let pizzasFiltradas = categoria === 'todos' 
        ? pizzas 
        : pizzas.filter(p => p.categoria === categoria);
    
    if (termoBusca) {
        pizzasFiltradas = pizzasFiltradas.filter(p => 
            p.nome.toLowerCase().includes(termoBusca) || 
            p.descricao.toLowerCase().includes(termoBusca)
        );
    }

    pizzasGrid.innerHTML = pizzasFiltradas.map(pizza => {
        const preco = pizza.promocao ? pizza.precoPromocional : pizza.preco;
        return `
            <div class="pizza-card">
                ${pizza.promocao ? '<span class="pizza-badge">🔥 PROMO</span>' : ''}
                <img src="${pizza.imagem}" alt="${pizza.nome}" loading="lazy">
                <div class="pizza-info">
                    <h3>${pizza.nome}</h3>
                    <p class="descricao">${pizza.descricao}</p>
                    <span class="preco">
                        ${pizza.promocao ? `<s>R$ ${pizza.preco.toFixed(2)}</s> ` : ''}
                        R$ ${preco.toFixed(2)}
                    </span>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho(${pizza.id})">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ==================== FILTROS ====================
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoriaAtual = btn.dataset.categoria;
        renderizarPizzas(categoriaAtual);
    });
});

// ==================== CATEGORIAS ====================
document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.cat;
        document.querySelectorAll('.filtro-btn').forEach(btn => {
            if (btn.dataset.categoria === cat) {
                btn.click();
            }
        });
        document.getElementById('cardapio').scrollIntoView({ behavior: 'smooth' });
    });
});

// ==================== BUSCA ====================
searchInput.addEventListener('input', (e) => {
    termoBusca = e.target.value.toLowerCase();
    renderizarPizzas(categoriaAtual);
});

// ==================== PROMOÇÕES ====================
function renderizarPromocoes() {
    promocoesGrid.innerHTML = promocoes.map(promo => `
        <div class="promo-card">
            <i class="fas ${promo.icone}"></i>
            <h3>${promo.titulo}</h3>
            <p>${promo.descricao}</p>
            ${promo.preco ? `
                <div class="promo-preco">
                    <small>de R$ ${promo.precoOriginal.toFixed(2)}</small><br>
                    <strong>por R$ ${promo.preco.toFixed(2)}</strong>
                </div>
                <button class="btn-adicionar" onclick="alert('Promoção adicionada!')">
                    Aproveitar
                </button>
            ` : `
                <button class="btn-adicionar" onclick="document.getElementById('cardapio').scrollIntoView()">
                    Ver Cardápio
                </button>
            `}
        </div>
    `).join('');
}

// ==================== DEPOIMENTOS ====================
function renderizarDepoimentos() {
    depoimentosContainer.innerHTML = depoimentos.map(dep => {
        const estrelas = Array(5).fill(0).map((_, i) => 
            `<i class="fas fa-star${i < dep.estrelas ? '' : '-o'}"></i>`
        ).join('');
        
        return `
            <div class="depoimento-card">
                <div class="estrelas">${estrelas}</div>
                <p>"${dep.texto}"</p>
                <h4>${dep.nome}</h4>
            </div>
        `;
    }).join('');
}

// ==================== FIDELIDADE ====================
function atualizarFidelidade() {
    if (pontosElement) {
        pontosElement.textContent = pontosFidelidade;
    }
    
    const progresso = (pontosFidelidade % 100) / 100 * 100;
    if (progressoFidelidade) {
        progressoFidelidade.style.width = `${progresso}%`;
    }
    
    const faltam = 100 - (pontosFidelidade % 100);
    if (faltamPontos) {
        faltamPontos.textContent = faltam;
    }
}

// ==================== CUPOM ====================
document.getElementById('aplicar-cupom')?.addEventListener('click', () => {
    const input = document.getElementById('cupom-input');
    const codigo = input.value.toUpperCase();
    
    if (cupons[codigo]) {
        cupomAtivo = codigo;
        renderizarCarrinho();
        mostrarNotificacao(`Cupom aplicado! Desconto de R$ ${cupons[codigo]}`);
    } else {
        mostrarNotificacao('Cupom inválido!');
    }
});

// ==================== INDICAÇÃO ====================
document.getElementById('indicar-amigo')?.addEventListener('click', () => {
    const msg = `Olá! Use meu código ${codigoIndicacao.textContent} e ganhe 10% de desconto na Pizzaria Chef's!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
});

window.copiarCodigo = function() {
    navigator.clipboard.writeText(codigoIndicacao.textContent);
    mostrarNotificacao('Código copiado!');
};

// ==================== PEDIDOS ====================
function salvarPedido() {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const pedido = {
        id: Date.now(),
        data: new Date().toLocaleString(),
        itens: carrinho,
        total: calcularTotal()
    };
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function carregarPedidos() {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const container = document.getElementById('pedidos-container');
    
    if (pedidos.length === 0 || !container) return;
    
    container.innerHTML = pedidos.slice(-3).reverse().map(pedido => `
        <div class="pedido-card">
            <p>Pedido #${pedido.id}</p>
            <small>${pedido.data}</small>
        </div>
    `).join('');
}

function calcularTotal() {
    return carrinho.reduce((acc, item) => {
        const pizza = pizzas.find(p => p.id === item.id);
        const preco = item.precoPromocional || pizza.preco;
        return acc + (preco * item.quantidade);
    }, 0);
}

// ==================== NEWSLETTER ====================
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    localStorage.setItem('newsletter', email);
    mostrarNotificacao('E-mail cadastrado! Ganhe 10% off');
    e.target.reset();
});

// ==================== CONTATO ====================
contatoForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarNotificacao('Mensagem enviada com sucesso!');
    e.target.reset();
});

// ==================== BACK TO TOP ====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== WHATSAPP ====================
whatsappFloat.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://wa.me/5511987654321', '_blank');
});

// ==================== NOTIFICAÇÃO ====================
function mostrarNotificacao(msg) {
    const notif = document.createElement('div');
    notif.className = 'notificacao';
    notif.textContent = msg;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== HEADER TRANSPARENTE ====================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// ==================== EXPORTAR FUNÇÕES ====================
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.alterarQuantidade = alterarQuantidade;
window.removerItem = removerItem;
window.copiarCodigo = copiarCodigo;
