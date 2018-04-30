mural = document.getElementById('table');
botao = document.getElementById('button');
excluir = document.getElementById('excluir');
texto = document.getElementById('textarea');


linha = document.getElementById('linha');
linha2 = document.getElementById('linha2')
botao.addEventListener('click', function (evento) {
  let elemento = document.createElement('td');
  elemento.setAttribute("class","td");
  let check = document.createElement('input');
  check.setAttribute("type", "checkbox");
  elemento.textContent = texto.value;
  elemento.appendChild(check);
  if(linha.childNodes.length<4){
    linha.appendChild(elemento);
    mural.appendChild(linha);
  }
  if(linha2.childNodes.length<4){
    linha2.appendChild(elemento);
    mural.appendChild(linha2);
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

excluir.addEventListener('click', function (evento) {
    let tamanho = linha2.childNodes.length;
    var i=0;
    while(i<tamanho){
      if (linha2.children[i].children[0].checked == true) {
        linha2.childNodes[i].parentNode.removeChild(linha2.childNodes[i]);
        i=0;
      }else{
        i++;
      }
    }
  });
