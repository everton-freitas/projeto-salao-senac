// menu hamburguer
function aparecerMenu() {
    let menu = document.getElementById('menu-oculto')
    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
}

function clicarFilial(botao) {
    const conteudos = document.querySelectorAll('.conteudoOculto');
    conteudos.forEach(conteudo => {
        conteudo.style.display = conteudo.style.display === 'none' || conteudo.style.display === '' ? 'flex' : 'none';
    });
}

function selecionarFilial(filial) {
    const botao = document.getElementById('textoBotao');
    botao.innerHTML = `<strong>${filial}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOculto');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));

    // Ativa o botão de tipo de serviço
    const openModalBtn2 = document.getElementById('openModalBtn2');
    openModalBtn2.style.pointerEvents = 'auto';
    openModalBtn2.style.opacity = '1';
}

function clicarServico() {
    const conteudos = document.querySelectorAll('.conteudoOcultoServico');

    conteudos.forEach(conteudo => {
        if (conteudo.classList.contains('show')) {
            conteudo.classList.remove('show');
            setTimeout(() => (conteudo.style.display = 'none'), 300); // Espera o fim da transição
        } else {
            conteudo.style.display = 'flex'; // Garante que o elemento seja exibido
            setTimeout(() => conteudo.classList.add('show'), 10); // Adiciona a classe com atraso
        }
    });
}

function selecionarServico(servico) {
    const botao = document.getElementById('servicoSelecionado');
    botao.innerHTML = `<strong>${servico}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOcultoServico');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));

    // Ativa o botão de subcategorias
    const openModalBtn3 = document.getElementById('openModalBtn3');
    openModalBtn3.style.pointerEvents = 'auto';
    openModalBtn3.style.opacity = '1';

    // Define as subcategorias dinamicamente
    const subcategorias = {
        'Corte de Cabelo Masculino e Barba': [
            { nome: 'Corte Masculino', valor: 'R$ 30,00' },
            { nome: 'Barba', valor: 'R$ 20,00' },
            { nome: 'Corte + Barba', valor: 'R$ 45,00' }
        ],
        'Corte de Cabelo Feminino': [
            { nome: 'Corte Longo', valor: 'R$ 50,00' },
            { nome: 'Corte Curto', valor: 'R$ 40,00' },
            { nome: 'Corte em Camadas', valor: 'R$ 55,00' }
        ],
        'Manicure e Pedicure': [
            { nome: 'Manicure', valor: 'R$ 25,00' },
            { nome: 'Pedicure', valor: 'R$ 30,00' },
            { nome: 'Combo', valor: 'R$ 50,00' }
        ],
        'Hidratação Capilar': [
            { nome: 'Hidratação Rápida', valor: 'R$ 35,00' },
            { nome: 'Hidratação Profunda', valor: 'R$ 60,00' }
        ]
    };

    const subcategoriaOpcoes = document.getElementById('subcategoriaOpcoes');
    subcategoriaOpcoes.innerHTML = ''; // Limpa as subcategorias antigas

    if (subcategorias[servico]) {
        subcategorias[servico].forEach(sub => {
            const div = document.createElement('div');
            div.className = 'botao2 conteudoOcultoSub';
            div.innerHTML = `
                <p class="a1" onclick="selecionarSub('${sub.nome}', '${sub.valor}')">
                    ${sub.nome} - <span class="valor"><strong>${sub.valor}</strong></span>
                </p>`
            subcategoriaOpcoes.appendChild(div);
        });
    }
}

function clicarSubcategoria() {
    const conteudos = document.querySelectorAll('.conteudoOcultoSub');

    conteudos.forEach(conteudo => {
        if (conteudo.classList.contains('show')) {
            conteudo.classList.remove('show');
            setTimeout(() => (conteudo.style.display = 'none'), 300); // Espera o fim da transição
        } else {
            conteudo.style.display = 'flex'; // Garante que o elemento seja exibido
            setTimeout(() => conteudo.classList.add('show'), 10); // Adiciona a classe com atraso
        }
    });
}

function selecionarSub(sub) {
    const botao = document.getElementById('subSelecionado');
    botao.innerHTML = `<strong>${sub}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOcultoSub');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));
}

function selecionarSub(sub, valor) {
    const botao = document.getElementById('subSelecionado');
    botao.innerHTML = `<strong>${sub} - ${valor}</strong>`;

    // Oculta as subcategorias
    const conteudos = document.querySelectorAll('.conteudoOcultoSub');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));

    // Atualiza o preço final acima do botão "Agendar"
    const precoFinal = document.getElementById('precoFinal');
    precoFinal.textContent = `Preço final: ${valor}`;
    precoFinal.style.display = 'block';
}