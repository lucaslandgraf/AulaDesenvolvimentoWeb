let i = 1;

function salvar(){
    let nome = document.getElementById('n').value;
    nome = nome +' '+ document.getElementById('sn').value;
    let email = document.getElementById('e').value;

    //alert('Olá ' + nome + ' seu e-mail é '+ email); // - melhor forma de ler dados

    let tbody = document.querySelector('.table tbody');
    let linha = document.createElement('tr');

    let colId = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');

    i++;
    colId.innerHTML = i;
    colNome.innerHTML = nome;
    colEmail.innerHTML = email;

    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);

    tbody.appendChild(linha);

    
}