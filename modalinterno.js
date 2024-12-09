const modalPrincipal = document.getElementById('modal-principal');
const abrirModalPrincipal = document.getElementById('abrir-modal-principal');
const fecharModalPrincipal = document.querySelector('.close');
const abrirModalInterno = document.getElementById('abrir-modal-interno');
const fecharModalInterno = document.querySelector('.close-interno');
const modalInterno = document.getElementById('modal-interno');

// Funções para abrir e fechar os modais
const abrirModal = () => {
  modalPrincipal.style.display = 'block';
};

const fecharModal = () => {
  modalPrincipal.style.display = 'none';
};

const abrirModalInternoFuncao = () => {
  modalInterno.style.display = 'block';
};

const fecharModalInternoFuncao = () => {
  modalInterno.style.display = 'none';
};

// Adicionar eventos
abrirModalPrincipal.addEventListener('click', abrirModal);
fecharModalPrincipal.addEventListener('click', fecharModal);
abrirModalInterno.addEventListener('click', abrirModalInternoFuncao);
fecharModalInterno.addEventListener('click', fecharModalInternoFuncao);

// Fechar modal quando clicar fora
window.addEventListener('click', (e) => {
  if (e.target === modalPrincipal) {
    fecharModal();
  }
  if (e.target === modalInterno) {
    fecharModalInternoFuncao();
  }
});