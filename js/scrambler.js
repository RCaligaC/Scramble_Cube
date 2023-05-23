/* import cuboResolvido from './canvas.js'; */

//Gerador de embaralhamento para o Cubo Mágico

// gerador
function scrambler () {

    cuboResolvido();

// variables declaration
    let quant = 20;
    let count;
    let num = [];

// Magic Cube moves
    const movements = [["R", "R'", "R2"],   // rigth side
                        ["L", "L'", "L2"],  // left side
                        ["F", "F'", "F2"],  // front side
                        ["B", "B'", "B2"],  // back side
                        ["D", "D'", "D2"],  // down side
                        ["U", "U'", "U2"]]; // up side


// alimentando o array (num)
    let mov1 = Math.floor(Math.random() * (1 , 6) + 1);
    let mov2;
    num.push(mov1);
    count = 1;

    while (count < quant) {
        mov2 = Math.floor(Math.random() * (1 , 6) + 1);

        if (mov2 != mov1) {
            count += 1
            num.push(mov2);
            mov1 = mov2;
        }
    }

    /* console.log(num); */

// tratando o array (num) para que não apareça repetição sequêcial do mesmo número.

    mov1 = 0;
    mov2 = 1;
    let mov3 = 2;

    for (let i = 1; i <= (num.length - 2); i++) {

        while (num[mov1] === 1 && num[mov2] === 2 && num[mov3] === 1 ||
            num[mov1] === 2 && num[mov2] === 1 && num[mov3] === 2 ||
            num[mov1] === 3 && num[mov2] === 4 && num[mov3] === 3 ||
            num[mov1] === 4 && num[mov2] === 3 && num[mov3] === 4 ||
            num[mov1] === 5 && num[mov2] === 6 && num[mov3] === 5 ||
            num[mov1] === 6 && num[mov2] === 5 && num[mov3] === 6 ||
            num[mov3] === num[mov2]){

            num[mov3] = Math.floor(Math.random() * (1 , 6) + 1);
        }
        mov1 += 1;
        mov2 += 1;
        mov3 += 1;
    }
    
    /* console.log(num); */

// Aqui acontece o scramble final que para cada número do array num correponde a um movimento.

    let scramble = [];

    num.forEach(element => {

        const escolhido = movements[element - 1][Math.floor(Math.random() * movements[element - 1].length)];
       /*  movements[element - 1].sort((a, b) => Math.random() - 5);
        scramble.push(movements[element -1][0]); */
        scramble.push(escolhido);
    })

    let saida = "";

    for (let i = 0; i < scramble.length; i++) {

        saida += scramble[i] + " "; 
    }


    const scrambleGerado = document.querySelector("#scrambler");
   /*  const numerosGerado = document.querySelector("#num"); */

    scrambleGerado.textContent = saida;
    /* numerosGerado.textContent = num; */

    scramble.forEach((element) => {
        
        
        if (element == 'R') {movimentoR()} 

        else if (element == "R'") {movimentoR1()} 
    
        else if (element == 'R2') {movimentoR2()} 
    
        else if (element == 'L') {movimentoL()} 
    
        else if (element == "L'") {movimentoL1()} 
    
        else if (element == 'L2') {movimentoL2()} 
    
        else if (element == 'F') {movimentoF()} 
    
        else if (element == "F'") {movimentoF1()} 
    
        else if (element == 'F2') {movimentoF2()} 
    
        else if (element == 'B') {movimentoB()} 
                
        else if (element == "B'") {movimentoB1()} 
                
        else if (element == 'B2') {movimentoB2()} 
                
        else if (element == 'U') {movimentoU()} 
                
        else if (element == "U'") {movimentoU1()} 
                
        else if (element == 'U2') {movimentoU2()} 
                
        else if (element == 'D') {movimentoD()} 
                
        else if (element == "D'") {movimentoD1()} 
                
        else if (element == 'D2') {movimentoD2()} 
    
        })

}
