function escreveConsole(){
    console.log('Clicou no botão escreve no console');
}

function exibeDados(){
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    document.getElementById('result').innerHTML = "Nome: "+ nome + '<br>Senha: ' +senha;
    alert('seja bem vindo(a): ' + nome);
/* operador de concatenacao informado na aula é = "+variavel" ou "+varivavel+"*/
}



/*formularios em geral vai cair na prova*/


function verRadio(){
    let elementos = document.getElementsByName('f');
    for(let i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('radios').innerHTML = "Você é feliz " + elementos[i].value;
        }
    }
}

function verSelect(){
    let selecionado = document.querySelector('#curso');
    document.querySelector('.output').textContent = "curso: "+selecionado.value;
}


/*versao porca da seleção dos elementos:

function verRadio(){
    let elementos = document.getElementsByName('f');



    if(elementos[0].checked){ 
        document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[0].value;
    }else if(elementos[1].checked){
        document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[1].value;
    }else if(elementos[2].checked){
        document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[2].value;
    }
}

*/