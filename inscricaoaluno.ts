// Dados do formulário
let nome = "Vitor";
let idade = 23;
let email = "vitor@teste.com";
let curso = "Dados";
let concluiu_2grau = true;
let vagas = 80;

let inscricao_valida = true;
let valor = 100;
let erros = "";


// RN01 - Nome
if(nome.length >= 3){
    // Nome válido
} else {
    erros = erros + "Erro: o nome deve ter pelo menos 3 caracteres.\n";
    inscricao_valida = false;
}


// RN02 - Idade
if(idade >= 16){
    // Idade válida
} else {
    erros = erros + "Erro: o aluno deve ter 16 anos ou mais.\n";
    inscricao_valida = false;
}


// RN04 - E-mail
if(email.includes("@")){
    // E-mail válido
} else {
    erros = erros + "Erro: o e-mail deve conter @.\n";
    inscricao_valida = false;
}


// Cursos disponíveis
if(curso === "Web" || curso === "Mobile" || curso === "Dados"){
    // Curso válido
} else {
    erros = erros + "Erro: curso inválido. Escolha Web, Mobile ou Dados.\n";
    inscricao_valida = false;
}


// RN05 - Curso Dados
if(curso == "Dados" && !concluiu_2grau){
    erros = erros + "Erro: para o curso Dados é necessário ter concluído o ensino médio.\n";
    inscricao_valida = false;
}


// RN06 - Vagas
if(vagas > 0){
    // Existem vagas
} else {
    erros = erros + "Erro: não há vagas disponíveis para este curso.\n";
    inscricao_valida = false;
}


// RN07 - Valor da inscrição
if(idade >= 60){
    valor = valor * 0.5;
}


// Resultado final
console.log("----- RESULTADO DA INSCRIÇÃO -----");

if(inscricao_valida){
    console.log("Inscrição aprovada!");
    console.log("Aluno: " + nome);
    console.log("Curso: " + curso);
    console.log("Valor a pagar: R$ " + valor.toFixed(2));
} else {
    console.log(erros);
    console.log("Inscrição recusada.");
}