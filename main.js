const form = document.getElementById ("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault() //preventDefault é uma ação que interrompe o comportamento padrão do navegador.
    console.log(evento.target.elements["nome"].value)
    console.log(evento.target.elements["quantidade"].value)
    console.log("funcionou!")
})
