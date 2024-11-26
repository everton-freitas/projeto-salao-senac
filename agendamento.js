 // Funções de abertura e fechamento dos modais
 function toggleModal(modalId, show) {
    document.getElementById(modalId).style.display = show ? 'block' : 'none';
}

document.getElementById('openModalBtn').onclick = function() {
    toggleModal('modalFilial', true);
};

document.getElementById('closeFilial').onclick = function() {
    toggleModal('modalFilial', false);
};

document.getElementById('openModalBtn2').onclick = function() {
    toggleModal('modalServico', true);
};

document.getElementById('closeServico').onclick = function() {
    toggleModal('modalServico', false);
};

document.getElementById('openModalBtn3').onclick = function() {
    toggleModal('modalSub', true);
};

document.getElementById('closeSub').onclick = function() {
    toggleModal('modalSub', false);
};

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    ['modalFilial', 'modalServico', 'modalSub'].forEach(function(modalId) {
        if (event.target == document.getElementById(modalId)) {
            toggleModal(modalId, false);
        }
    });
};

// Função de seleção
function selecionar(nome, idElemento) {
    document.getElementById(idElemento).innerHTML = `<strong>${nome}</strong>`;
    if (idElemento === 'filialSelecionada') {
        toggleModal('modalFilial', false);
        document.getElementById('openModalBtn2').style.pointerEvents = 'auto';
        document.getElementById('openModalBtn2').style.opacity = '1';
    } else if (idElemento === 'servicoSelecionado') {
        toggleModal('modalServico', false);
        document.getElementById('openModalBtn3').style.pointerEvents = 'auto';
        document.getElementById('openModalBtn3').style.opacity = '1';
    } else if (idElemento === 'subSelecionado') {
        toggleModal('modalSub', false);
    }
}


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

