function insereTabela(){
    let tit = document.forms["cadastrar"]["titulo"].value;
    let ano = document.forms["cadastrar"]["ano"].value;
    let gen = document.forms["cadastrar"]["genero"].value;
    let plat = document.forms["cadastrar"]["plataforma"].value;

    let inserir = window.document.getElementById("inserirTabela");
    inserir.innerHTML = `<td>${tit}</td>`;
    inserir.innerHTML += `<td>${ano}</td>`;
    inserir.innerHTML += `<td>${gen}</td>`;
    inserir.innerHTML += `<td>${plat}</td></th>`;
}