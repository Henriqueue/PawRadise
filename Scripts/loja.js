const produtos = [
  { id: 1, nome: "Ração Premier Raças Específicas Golden Retriever para Cães Adultos - 12kg", preco: 264.90, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/1656092373037.jpg" },
  { id: 1, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne -15pg", preco: 159.90, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/1708614057884.jpg" },
  { id: 1, nome: "Ração Royal Canin para Cães Adultos da Raça Golden Retriever - 10,1kg", preco: 370.00, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/10001305000284_1749054650178.jpg" },
  { id: 1, nome: "Ração Golden Seleção Natural para Cães Adultos de Porte Médio e Grande Sabor Frango com Batata Doce 12kg", preco: 179.90, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/1669215743652.jpg" },
  { id: 1, nome: "Ração Golden Duii Mini Bits para Cães Adultos de Porte Pequeno Sabor Salmão com Ervas e Cordeiro com Arroz - 3kg", preco:   79.90, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/1658414343240.jpg" },
  { id: 1, nome: "Ração Golden Duii para Cães Adultos Sabor Frango e Carne - 10,1kg", preco: 159.90, categoria: "racao", animal: "cao", imagem: "https://images.petz.com.br/fotos/1658414405617.jpg" }, 
 
  { id: 2, nome: "Ração Golden Special para Gatos Castrados Sabor Frango e Carne", preco: 79.90, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1707243420161.jpg" },
  { id: 2, nome: "Ração Royal Canin Premium Cat para Gatos Adultos Castrados", preco: 67.49, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1508264765505.jpg" },
  { id: 2, nome: "Ração GranPlus Choice para Gatos Adultos Sabor Frango e Carne 10,1kg", preco: 147.00, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1674074964254.jpg" },
  { id: 2, nome: "Ração Fórmula Natural Fresh Meat para Gatos Adultos Castrados Sabor Salmão", preco: 77.90, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1695142896322.jpg" },
  { id: 2, nome: "Ração Úmida Fórmula Natural Fresh Meat Gourmet para Gatos Sabor Atum 70g", preco: 19.90, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1678209382713.jpg" },
  { id: 2, nome: "Ração Royal Canin Premium Cat Vitalidade para Gatos Adultos", preco: 80.90, categoria: "racao", animal: "gato", imagem: "https://images.petz.com.br/fotos/1508264900505.jpg" },


  { id: 3, nome: "Brinquedo Capivara de pelucia Petz para cães", preco: 75.90, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1712329794138.jpg" },
  { id: 3, nome: "Brinquedo Bicho Preguiça de Pelucia Petz para Cães", preco: 89.90, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1712329661193.jpg" },
  { id: 3, nome: "Brinquedo Mico Leão de Pelúcia Petz para Cães", preco: 74.90, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1712329880617.jpg" },
  { id: 3, nome: "Brinquedo Tucano de Pelúcia Petz para Cães", preco: 74.99, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1712330057822.jpg" },
  { id: 3, nome: "Brinquedo Chalesco Sweet Dog para Cães e Gatos", preco: 44.90, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1640608392754.jpg" },
  { id: 3, nome: "Brinquedo Chalesco Sweet Patinho para Cães e Gatos", preco: 34.90, categoria: "brinquedo", animal: "cao", imagem: "https://images.petz.com.br/fotos/1640609163830.jpg" },

  { id: 5, nome: "Shampoo Antipulgas Conex para Cães 400ml", preco: 39.90, categoria: "higiene", animal: "cao", imagem: "https://images.petz.com.br/fotos/1587569494417.jpg" },
  { id: 5, nome: "Shampoo Banho de Carinho Petz para Cães 500ml", preco: 23.90, categoria: "higiene", animal: "cao", imagem: "https://images.petz.com.br/fotos/10031220000953_1749041713144.jpg" },
  { id: 5, nome: "Plaque Off Animal Cães e Gatos Inovet 40 g", preco: 69.90, categoria: "higiene", animal: "cao", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/304031-368-368/Plaque-Off.jpg?v=638840571729370000" },
  { id: 5, nome: "Solução Oral Virbac Aquadent Fr3sh para Cães e Gatos 250 ml", preco: 159.90, categoria: "higiene", animal: "gato", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/1062529-1000-1000/Solucao-Oral-Aquadent-Fresh-Vibarc-250ml.png?v=638646988340070000" },
  { id: 5, nome: "Periovet Gel Kit Vetnil 25g", preco: 169.90, categoria: "higiene", animal: "gato", imagem: "https://www.petlove.com.br/images/products/261374/hd_no_extent/Gel_Higiênico_Bucal_Vetnil_Periovet_-_25_g_311826_17.jpg?1661355177" },
  { id: 5, nome: "Banho a Seco Pet Society Fast Shower para Cães e Gatos", preco: 61.90, categoria: "higiene", animal: "cao", imagem: "https://images.petz.com.br/fotos/1709228594765.jpg" },


  { id: 4, nome: "Arranhador Compacto", preco: 49.90, categoria: "arranhadores", animal: "gato", imagem: "https://images.petz.com.br/fotos/20037081000511_1742392570674.jpg" },
  { id: 6, nome: "Coleira Fashion para Gato ZeCat", preco: 34.90, categoria: "acessorios", animal: "gato", imagem: "https://images.petz.com.br/fotos/1631804805641.jpg" },
  { id: 7, nome: "Petisco de Frango", preco: 19.90, categoria: "petiscos", animal: "cao" , imagem: "https://images.petz.com.br/fotos/20003280000207_1739995737026.jpg" },
  { id: 8, nome: "Roupinha de Inverno para cães grandes", preco: 59.90, categoria: "roupas", animal: "cao", imagem: "https://images.petz.com.br/fotos/1705673984100.jpg" },
  { id: 8, nome: "Agasalho My Dream Cat", preco: 59.90, categoria: "roupas", animal: "gato", imagem: "https://www.petlove.com.br/images/products/257550/hd_no_extent/Agasalho_My_Dream_Cat_3102748230.jpg?1656622218" },
  { id: 8, nome: "Fantasia de Unicórnio Cansei de Ser Gato", preco: 79.90, categoria: "roupas", animal: "gato", imagem: "https://images.petz.com.br/fotos/1672837291809.jpg" },
  { id: 9, nome: "Antibiótico Ourofino Doxifin Tabs Para Cães e Gatos 50mg", preco: 89.90, categoria: "remedios", animal: "cao", imagem: "https://images.petz.com.br/fotos/1564411043025.jpg" }
];

const lista = document.getElementById("product-list");
const filtroAnimal = document.querySelectorAll(".filter-animal");
const filtroCategoria = document.querySelectorAll(".filter-category");
const precoMaximo = document.getElementById("max-price");

function renderizarProdutos() {
  const animaisSelecionados = Array.from(filtroAnimal)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const categoriasSelecionadas = Array.from(filtroCategoria)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const precoLimite = parseFloat(precoMaximo.value);

  lista.innerHTML = "";

  produtos.filter(p =>
    animaisSelecionados.includes(p.animal) &&
    categoriasSelecionadas.includes(p.categoria) &&
    p.preco <= precoLimite
  ).forEach(produto => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h4>${produto.nome}</h4>
      <div class="price">R$ ${produto.preco.toFixed(2)}</div>
      <button onclick="window.location.href='produto.html?id=${produto.id}'">Comprar</button>
    `;
    lista.appendChild(card);
  });
}

// Aplica o evento a todos os filtros
[filtroAnimal, filtroCategoria].forEach(grupo => {
  grupo.forEach(element => element.addEventListener("change", renderizarProdutos));
});

// Aplica evento ao controle de preço
precoMaximo.addEventListener("input", renderizarProdutos);

// Primeira renderização
renderizarProdutos();
