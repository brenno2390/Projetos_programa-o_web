
function pesquisarCachorro() {
    var termoBusca = document.getElementById("busca").value.toLowerCase();
    var cards = document.getElementsByClassName("card");
    var totalVisiveis = 0;

    for (var i = 0; i < cards.length; i++) {
        var infoCachorro = cards[i].getAttribute("data-nome");
        
        if (infoCachorro.indexOf(termoBusca) > -1) {
            cards[i].style.display = "block";
            totalVisiveis++;
        } else {
            cards[i].style.display = "none";
        }
    }


    document.getElementById("contador").innerText = "Filhotes aparecendo: " + totalVisiveis;
}


function adotarFilhote(nomeFilhote) {
    var caixaMensagem = document.getElementById("mensagem-sucesso");
    caixaMensagem.innerText = "Parabéns! Você demonstrou interesse em adotar o(a) " + nomeFilhote + "!";
    caixaMensagem.style.display = "block";
}


function favoritar(botaoClicado) {
    if (botaoClicado.classList.contains("favoritado")) {
        botaoClicado.classList.remove("favoritado");
        botaoClicado.innerText = "Favoritar";
    } else {
        botaoClicado.classList.add("favoritado");
        botaoClicado.innerText = "Favoritado";
    }
}