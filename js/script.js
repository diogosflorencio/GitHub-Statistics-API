const pesquisar = (param) => {
    let URL = `https://api.github.com/users/${param}`;
    fetch(URL)
    .then(dados => dados.json())
    .then(dados => {
        console.log(dados.name)
    }) 
}
pesquisar("diogosflorencio");