document.addEventListener("DOMContentLoaded", () => {
  const subTotalSpan = document.querySelector(".summary p span");
  const totalSpan = document.querySelector(".summary .total span");
  const totalItemsText = document.querySelector(".cart-status strong");
  const continueBtn = document.querySelector(".continue-btn");
  const emptyCart = document.querySelector(".empty-cart");
  const cartItemsContainer = document.querySelector(".cart-items");

  const formatarPreco = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calcularTotais = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;
    let totalItens = 0;

    cartItems.forEach(item => {
      const precoTexto = item.querySelector(".qty-price span").textContent
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
        .trim();
      const preco = parseFloat(precoTexto);
      const quantidade = parseInt(item.querySelector("input").value) || 0;

      total += preco * quantidade;
      totalItens += quantidade;
    });

    const frete = cartItems.length > 0 ? 40 : 0;
    const totalGeral = total + frete;

    subTotalSpan.textContent = formatarPreco(total);
    totalSpan.textContent = formatarPreco(totalGeral);
    totalItemsText.textContent = `${totalItens} produto${totalItens !== 1 ? "s" : ""}`;
    continueBtn.innerHTML = `${formatarPreco(totalGeral)} <span>Continuar ➡️</span>`;

    if (cartItems.length === 0 || totalItens === 0) {
      cartItemsContainer.style.display = "none";
      emptyCart.style.display = "block";
    } else {
      cartItemsContainer.style.display = "flex";
      emptyCart.style.display = "none";
    }
  };

  const adicionarListeners = () => {
    // Atualiza quantidade
    document.querySelectorAll(".cart-item input").forEach(input => {
      input.addEventListener("input", () => {
        calcularTotais();
      });
    });

    // Remove item
    document.querySelectorAll(".cart-item .remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const item = e.target.closest(".cart-item");
        item.remove();
        calcularTotais();
      });
    });
  };

  adicionarListeners();
  calcularTotais();
});
