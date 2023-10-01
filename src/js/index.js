const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});
function desselecionarPersonagem() {
    const PersonagemSelecionado = document.querySelector(".personagem.selecionado");
    PersonagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const BotaoSelecionado = document.querySelector(".botao.selecionado");
    BotaoSelecionado.classList.remove("selecionado");
}

