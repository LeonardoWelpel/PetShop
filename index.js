
let pets = [];

function addPet() {//adicionar o pet

    event.preventDefault();

    ///coletar dados do formulário
    let pet = {
        "petName": document.getElementById(fname).value,
        "petBreed": document.getElementById(fbreed).value,
        "petOwner": document.getElementById(fowner).value,
        "petPhone": document.getElementById(fphone).value,
    }
    console.log(pet)

    //limpar o formulário
    document.getElementById(fname).value = "";
    document.getElementById(fbreed).value = "";
    document.getElementById(fowner).value = "";
    document.getElementById(fphone).value = "";

    pets.push(pet); //inserir o pet que coletei

    renderTable(); //atualizar a tabela
}

function renderTable() {//atualizar a tabela

    let table = document.getElementById(dataTable); //encontra a tabela

    //colocando a parte que é fixa (titulo)
    table.innerHTML = `<tr>
    <th> ID </th>
    <th> Nome do Pet </th>
    <th> Raça </th>
    <th> Dono do Pet </th>
    <th> Telefone </th>
    <th> Remover </th>
    </tr>`;


    //colocar todos os pets dinamicamente na tabela
    for (let i = 0; i < pet.length; i++) {
        table.innerHTML = table.innerHTML + `<td>${i}</td>
    <td> ${pets[i].petName}</td>
    <td> ${pets[i].petBreed} </td>
    <td> ${pets[i].petOwner} </td>
    <td> ${pets[i].petPhone} </td>
    <td> ${pets[i].petName} </td>
    <td><img src="assets/remove.png" width="25px" hight="25px" onclick="removePet{${i}}"></td>`;
    }

}

//remover um pet da tabela 