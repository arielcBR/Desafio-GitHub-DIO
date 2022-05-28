const btn = document.getElementById("btn");
const inputForm = document.getElementById("myInput");
const listaTarefas = document.getElementById("lista-tarefas");
var activities = [];

btn.addEventListener("click", getInputValue);
listaTarefas.addEventListener("click", riscaAtividade);

function getInputValue() {
    activities.push(inputForm.value);
    inputForm.value = '';
    inputForm.focus();
    createElements(activities);
}

function createElements(activities) {
    let position = activities.length;
    let nameId = `tarefa${position}`
    let name = `atividade${position}`;                        

    // Cria um elemento DIV
    var newDiv = document.createElement("div");               
    newDiv.className = "atividade";                           
    newDiv.id = nameId;              
    
    // Adiciona a DIV criada dentro da DIV id="lista-tarefas"
    listaTarefas.appendChild(newDiv);                         
    
    // Seleciona com o DOM a DIV adicionada ao HTML
    const Tarefa = document.getElementById(nameId);             
    
    // Cria um elemento Input
    var newInput = document.createElement("input");           
    newInput.type = "checkbox";
    newInput.name = name;
    newInput.id = name;

    // Cria um elemento label
    var newLabel = document.createElement("label");          
    newLabel.htmlFor = name;
    newLabel.textContent = activities[position - 1];
    
    // Adiciona o Input e a Label dentro da DIV criada
    Tarefa.appendChild(newInput);                             
    Tarefa.appendChild(newLabel);                             
}

function riscaAtividade() {
    activities.forEach(function (element, index) {
        var atividadeId = `atividade${index + 1}`;                      // Define o nome do id a ser verificado checkbox
        var divId = `tarefa${index + 1}`;
        const checkBox = document.getElementById(atividadeId);          // Seleciona com o DOM o input com o Id de atividadeId
        const divTarefa = document.getElementById(divId);

        if (checkBox.checked) {                                         // Verifica se o checkbox da atividade está marcado                 
            divTarefa.classList.add("tarefaFinalizada");                // Adiciona a classe CSS indicando que a tarefa foi finalizada
        }
        else {
            divTarefa.classList.remove("tarefaFinalizada");
        }
    });
}