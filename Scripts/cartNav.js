// Função que atualiza o número de itens do carrinho no ícone do header
function atualizarContadorCarrinho() {
  const cartCount = document.querySelector('.cart-count');

  // Tenta obter os itens do carrinho do localStorage
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Atualiza o contador com base no número de itens no carrinho
  cartCount.textContent = carrinho.length;
}

// Atualiza assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
  atualizarContadorCarrinho();

  // Escuta alterações no localStorage (entre abas por exemplo)
  window.addEventListener('storage', atualizarContadorCarrinho);
});
function adicionarAoCarrinho(produto) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza o contador logo após adicionar
  atualizarContadorCarrinho();
}


