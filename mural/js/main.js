mural = document.getElementById('table');
botao = document.getElementById('button');
excluir = document.getElementById('excluir');
texto = document.getElementById('textarea');


linha = document.getElementById('linha');
botao.addEventListener('click', function (evento) {
  tamanhomaximo = linha.childNodes.length;
    if(tamanhomaximo<=4){
      let elemento = document.createElement('td');
      elemento.setAttribute("class","td");
      let check = document.createElement('input');
      check.setAttribute("type", "checkbox");
      elemento.textContent = texto.value;
      elemento.appendChild(check);
      linha.appendChild(elemento);
      mural.appendChild(linha);
    }
});

excluir.addEventListener('click', function (evento) {
  let tamanho = linha.childNodes.length;
  var i=0;
  while(i<tamanho){
    if (linha.children[i].children[0].checked == true) {
      linha.childNodes[i].parentNode.removeChild(linha.childNodes[i]);
      i=0;
    }else{
      i++;
    }
  }
});
