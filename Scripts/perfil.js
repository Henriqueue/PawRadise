
  function mostrarConteudo(id) {
    const todasAsDivs = document.querySelectorAll('.conteudo');
    todasAsDivs.forEach(div => div.style.display = 'none');

    document.getElementById(id).style.display = 'block';
  }

