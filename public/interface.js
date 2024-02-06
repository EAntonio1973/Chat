const chat = document.getElementById("mensagens");
const botaoEnviar = document.getElementById("enviar");
const elementoTexto = document.getElementById("texto");
const socket = io();

socket.addEventListener("nova mensagem", (msg) => {
    const mensagem = document.createElement("li"); //<li></li>
    mensagem.textContent = msg; // <li>Mensagem do Alon</li>
    mensagem.classList.add("mensagem");//<li class="mensagem">mensagem do alom</li>
    chat.appendChild(mensagem);//<div id="mensagem"><li class="mensagem">mensagem do alom</li></div>
});
botaoEnviar.addEventListener("click", () => {
    if (elementoTexto.value !== ""){
        const mensagemAEnviar = elementoTexto.value;
        socket.emit("nova mensagem", mensagemAEnviar);
        elementoTexto.value = "";
    }
});