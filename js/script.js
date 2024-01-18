const inputUsuario = document.getElementById("inputUsuario");
const buttonSearch = document.getElementById("buttonSearch");
const statistics = document.getElementById("statistics");

const buscarDados = (param) => {
    let URL = `https://api.github.com/users/${param}`;
    fetch(URL)
    .then(dados => dados.json())
    .then(dados => {
        mostrarDados(dados)
    }) 
}

const mostrarDados = (param) => {
    statistics.innerHTML = "";
    const img = document.createElement("img")
    img.src = param.avatar_url;
    statistics.appendChild(img);
    
    const nome = document.createElement("h2");
    nome.innerHTML = param.name + " - ID: " + param.id;
    statistics.appendChild(nome);

    const frase = document.createElement("p");
    frase.innerHTML = param.bio;
    statistics.appendChild(frase);

    const repositorios = document.createElement("p");
    repositorios.innerHTML = "Repositorios Públicos: " + param.public_repos;
    statistics.appendChild(repositorios);

    const localizacao = document.createElement("p");
    localizacao.innerHTML = param.location;
    statistics.appendChild(localizacao);

}

inputUsuario.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        buscarDados(inputUsuario.value);
    }
})
buttonSearch.addEventListener("click", () =>{
    buscarDados(inputUsuario.value);
})





