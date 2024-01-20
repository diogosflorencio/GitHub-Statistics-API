const inputUsuario = document.getElementById("input-usuario");
const buttonSearch = document.getElementById("button-search");
const statistics = document.getElementById("statistics");

const buscarDados = (param) => {
    let URL = `https://api.github.com/users/${param}`;
    fetch(URL)
    .then(dados => dados.json())
    .then(dados => {
        mostrarDados(dados);
    }) 
}

const mostrarDados = (param) => {
    statistics.innerHTML = "";
    const img = document.createElement("img")
    img.classList = "imagem-perfil";
    img.src = param.avatar_url;
    statistics.appendChild(img);
    
    const nome = document.createElement("h2");
    nome.innerHTML = param.name;
    nome.classList = "nome-usuario";
    statistics.appendChild(nome);

    if(param.name == null){
        const login = document.createElement("h2");
        login.innerHTML = param.login;
        login.classList = "nome-usuario";
        statistics.appendChild(login);
    }

    const linha = document.createElement("br");
    statistics.appendChild(linha);
    
    const frase = document.createElement("p");
    frase.innerHTML = param.bio;
    frase.classList = "frase";
    statistics.appendChild(frase);
    
    if(param.bio != null){
        const linha2 = document.createElement("br");
        statistics.appendChild(linha2);
    }

    const repositorios = document.createElement("p");
    repositorios.innerHTML = "Repositorios Públicos: " + param.public_repos;
    repositorios.classList = "repositorios";
    statistics.appendChild(repositorios);

    if(param.location != null){
        const imagemLocalizacao = document.createElement("img");
        imagemLocalizacao.classList = "imagem-localizacao";
        imagemLocalizacao.src = "../image/localizacao.png"
        statistics.appendChild(imagemLocalizacao);
    }

    const localizacao = document.createElement("p");
    localizacao.innerHTML = param.location;
    localizacao.classList = "localizacao";
    statistics.appendChild(localizacao);

    if(param.company != null){
        const empresa = document.createElement("p");
        empresa.classList = "empresa";
        empresa.innerHTML = "Empresa: " + param.company;
        statistics.appendChild(empresa);
    }

    const link = document.createElement("a");
    link.href = param.html_url;
    link.innerHTML = "Ir para o GitHub"
    link.classList = "link";
    link.target = "_blank";
    statistics.appendChild(link);

}

inputUsuario.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        buscarDados(inputUsuario.value);
    }
})
buttonSearch.addEventListener("click", () =>{
    buscarDados(inputUsuario.value);
})





