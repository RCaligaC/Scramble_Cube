// Variáveis e funções para os movimentos do Cubo

let aux1;
let aux2;
let aux3;
let aux4;

function cuboResolvido() {

    for (let i = 0; i <= 2; i++) {

        for (let j = 0; j <= 2; j++) {
            ladoL[i][j] = 1;
            ladoF[i][j] = 2;
            ladoR[i][j] = 3;
            ladoB[i][j] = 4;
            ladoU[i][j] = 5;
            ladoD[i][j] = 6;
        }
    }

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
}

function cuboNeutro() {
    for (let i = 0; i <= 2; i++) {

        for (let j = 0; j <= 2; j++) {

            ladoL[i][j] = 7;
            ladoF[i][j] = 7;
            ladoR[i][j] = 7;
            ladoB[i][j] = 7;
            ladoU[i][j] = 7;
            ladoD[i][j] = 7;
        }
    }

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
}


function movimentoL() {

    aux1 = ladoF[0][0];
    aux2 = ladoU[0][0];
    aux3 = ladoB[2][2];
    aux4 = ladoD[0][0];

    ladoF[0][0] = aux2;
    ladoU[0][0] = aux3;
    ladoB[2][2] = aux4;
    ladoD[0][0] = aux1;

    aux1 = ladoF[2][0];
    aux2 = ladoU[2][0];
    aux3 = ladoB[0][2];
    aux4 = ladoD[2][0];

    ladoF[2][0] = aux2;
    ladoU[2][0] = aux3;
    ladoB[0][2] = aux4;
    ladoD[2][0] = aux1;

    aux1 = ladoL[0][0];
    aux2 = ladoL[0][2];
    aux3 = ladoL[2][2];
    aux4 = ladoL[2][0];

    ladoL[0][0] = aux4;
    ladoL[0][2] = aux1; 
    ladoL[2][2] = aux2;
    ladoL[2][0] = aux3;

    // meios
    aux1 = ladoL[0][1];
    aux2 = ladoL[1][2];
    aux3 = ladoL[2][1];
    aux4 = ladoL[1][0];
    
    ladoL[0][1] = aux4;
    ladoL[1][2] = aux1;
    ladoL[2][1] = aux2;
    ladoL[1][0] = aux3;

    aux1 = ladoF[1][0];
    aux2 = ladoU[1][0];
    aux3 = ladoB[1][2];
    aux4 = ladoD[1][0];

    ladoF[1][0] = aux2;
    ladoU[1][0] = aux3;
    ladoB[1][2] = aux4;
    ladoD[1][0] = aux1;


    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoL1() {

    aux1 = ladoF[0][0];
    aux2 = ladoU[0][0];
    aux3 = ladoB[2][2];
    aux4 = ladoD[0][0];

    ladoF[0][0] = aux4;
    ladoU[0][0] = aux1;
    ladoB[2][2] = aux2;
    ladoD[0][0] = aux3;

    aux1 = ladoF[2][0];
    aux2 = ladoU[2][0];
    aux3 = ladoB[0][2];
    aux4 = ladoD[2][0];

    ladoF[2][0] = aux4;
    ladoU[2][0] = aux1;
    ladoB[0][2] = aux2;
    ladoD[2][0] = aux3;

    aux1 = ladoL[0][0];
    aux2 = ladoL[0][2];
    aux3 = ladoL[2][2];
    aux4 = ladoL[2][0];

    ladoL[0][0] = aux2;
    ladoL[0][2] = aux3;
    ladoL[2][2] = aux4;
    ladoL[2][0] = aux1;

    // meios
    aux1 = ladoL[0][1];
    aux2 = ladoL[1][2];
    aux3 = ladoL[2][1];
    aux4 = ladoL[1][0];
    
    ladoL[0][1] = aux2;
    ladoL[1][2] = aux3;
    ladoL[2][1] = aux4;
    ladoL[1][0] = aux1;

    aux1 = ladoF[1][0];
    aux2 = ladoU[1][0];
    aux3 = ladoB[1][2];
    aux4 = ladoD[1][0];

    ladoF[1][0] = aux4;
    ladoU[1][0] = aux1;
    ladoB[1][2] = aux2;
    ladoD[1][0] = aux3;


    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoL2() {

    movimentoL();
    movimentoL();
}

function movimentoR() {

    aux1 = ladoF[0][2];
    aux2 = ladoU[0][2];
    aux3 = ladoB[2][0];
    aux4 = ladoD[0][2];

    ladoF[0][2] = aux4;
    ladoU[0][2] = aux1;
    ladoB[2][0] = aux2;
    ladoD[0][2] = aux3;

    aux1 = ladoF[2][2];
    aux2 = ladoU[2][2];
    aux3 = ladoB[0][0];
    aux4 = ladoD[2][2];

    ladoF[2][2] = aux4;
    ladoU[2][2] = aux1;
    ladoB[0][0] = aux2;
    ladoD[2][2] = aux3;

    aux1 = ladoR[0][0];
    aux2 = ladoR[0][2];
    aux3 = ladoR[2][2];
    aux4 = ladoR[2][0];

    ladoR[0][0] = aux4;
    ladoR[0][2] = aux1;
    ladoR[2][2] = aux2;
    ladoR[2][0] = aux3;

    // meios
    aux1 = ladoR[0][1];
    aux2 = ladoR[1][2];
    aux3 = ladoR[2][1];
    aux4 = ladoR[1][0];
    
    ladoR[0][1] = aux4;
    ladoR[1][2] = aux1;
    ladoR[2][1] = aux2;
    ladoR[1][0] = aux3;

    aux1 = ladoF[1][2];
    aux2 = ladoU[1][2];
    aux3 = ladoB[1][0];
    aux4 = ladoD[1][2];

    ladoF[1][2] = aux4;
    ladoU[1][2] = aux1;
    ladoB[1][0] = aux2;
    ladoD[1][2] = aux3;


    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoR1() {

    aux1 = ladoF[0][2];
    aux2 = ladoU[0][2];
    aux3 = ladoB[2][0];
    aux4 = ladoD[0][2];

    ladoF[0][2] = aux2;
    ladoU[0][2] = aux3;
    ladoB[2][0] = aux4;
    ladoD[0][2] = aux1;

    aux1 = ladoF[2][2];
    aux2 = ladoU[2][2];
    aux3 = ladoB[0][0];
    aux4 = ladoD[2][2];

    ladoF[2][2] = aux2;
    ladoU[2][2] = aux3;
    ladoB[0][0] = aux4;
    ladoD[2][2] = aux1;

    aux1 = ladoR[0][0];
    aux2 = ladoR[0][2];
    aux3 = ladoR[2][2];
    aux4 = ladoR[2][0];

    ladoR[0][0] = aux2;
    ladoR[0][2] = aux3;
    ladoR[2][2] = aux4;
    ladoR[2][0] = aux1;

    // meios
    aux1 = ladoR[0][1];
    aux2 = ladoR[1][2];
    aux3 = ladoR[2][1];
    aux4 = ladoR[1][0];
    
    ladoR[0][1] = aux2;
    ladoR[1][2] = aux3;
    ladoR[2][1] = aux4;
    ladoR[1][0] = aux1;

    aux1 = ladoF[1][2];
    aux2 = ladoU[1][2];
    aux3 = ladoB[1][0];
    aux4 = ladoD[1][2];

    ladoF[1][2] = aux2;
    ladoU[1][2] = aux3;
    ladoB[1][0] = aux4;
    ladoD[1][2] = aux1;


    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoR2() {

    movimentoR();
    movimentoR();
}

function movimentoF() {
    // quinas
    aux1 = ladoL[0][2];
    aux2 = ladoU[2][2];
    aux3 = ladoR[2][0];
    aux4 = ladoD[0][0];

    ladoL[0][2] = aux4;
    ladoU[2][2] = aux1;
    ladoR[2][0] = aux2;
    ladoD[0][0] = aux3;

    aux1 = ladoL[2][2];
    aux2 = ladoU[2][0];
    aux3 = ladoR[0][0];
    aux4 = ladoD[0][2];

    ladoL[2][2] = aux4;
    ladoU[2][0] = aux1;
    ladoR[0][0] = aux2;
    ladoD[0][2] = aux3;

    aux1 = ladoF[0][0];
    aux2 = ladoF[0][2];
    aux3 = ladoF[2][2];
    aux4 = ladoF[2][0];

    ladoF[0][0] = aux4;
    ladoF[0][2] = aux1;
    ladoF[2][2] = aux2;
    ladoF[2][0] = aux3;

    // meios    
    aux1 = ladoF[0][1];
    aux2 = ladoF[1][2];
    aux3 = ladoF[2][1];
    aux4 = ladoF[1][0];
    
    ladoF[0][1] = aux4;
    ladoF[1][2] = aux1;
    ladoF[2][1] = aux2;
    ladoF[1][0] = aux3;

    aux1 = ladoL[1][2];
    aux2 = ladoU[2][1];
    aux3 = ladoR[1][0];
    aux4 = ladoD[0][1];

    ladoL[1][2] = aux4;
    ladoU[2][1] = aux1;
    ladoR[1][0] = aux2;
    ladoD[0][1] = aux3;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoF1() {
    // quinas
    aux1 = ladoL[0][2];
    aux2 = ladoU[2][2];
    aux3 = ladoR[2][0];
    aux4 = ladoD[0][0];

    ladoL[0][2] = aux2;
    ladoU[2][2] = aux3;
    ladoR[2][0] = aux4;
    ladoD[0][0] = aux1;

    aux1 = ladoL[2][2];
    aux2 = ladoU[2][0];
    aux3 = ladoR[0][0];
    aux4 = ladoD[0][2];

    ladoL[2][2] = aux2;
    ladoU[2][0] = aux3;
    ladoR[0][0] = aux4;
    ladoD[0][2] = aux1;

    aux1 = ladoF[0][0];
    aux2 = ladoF[0][2];
    aux3 = ladoF[2][2];
    aux4 = ladoF[2][0];

    ladoF[0][0] = aux2;
    ladoF[0][2] = aux3;
    ladoF[2][2] = aux4;
    ladoF[2][0] = aux1;

    // meios    
    aux1 = ladoF[0][1];
    aux2 = ladoF[1][2];
    aux3 = ladoF[2][1];
    aux4 = ladoF[1][0];
    
    ladoF[0][1] = aux2;
    ladoF[1][2] = aux3;
    ladoF[2][1] = aux4;
    ladoF[1][0] = aux1;

    aux1 = ladoL[1][2];
    aux2 = ladoU[2][1];
    aux3 = ladoR[1][0];
    aux4 = ladoD[0][1];

    ladoL[1][2] = aux2;
    ladoU[2][1] = aux3;
    ladoR[1][0] = aux4;
    ladoD[0][1] = aux1;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoF2() {

    movimentoF();
    movimentoF();
}


function movimentoB() {
    // quinas
    aux1 = ladoL[0][0];
    aux2 = ladoU[0][2];
    aux3 = ladoR[2][2];
    aux4 = ladoD[2][0];

    ladoL[0][0] = aux2;
    ladoU[0][2] = aux3;
    ladoR[2][2] = aux4;
    ladoD[2][0] = aux1;

    aux1 = ladoL[2][0];
    aux2 = ladoU[0][0];
    aux3 = ladoR[0][2];
    aux4 = ladoD[2][2];

    ladoL[2][0] = aux2;
    ladoU[0][0] = aux3;
    ladoR[0][2] = aux4;
    ladoD[2][2] = aux1;

    aux1 = ladoB[0][0];
    aux2 = ladoB[0][2];
    aux3 = ladoB[2][2];
    aux4 = ladoB[2][0];

    ladoB[0][0] = aux4;
    ladoB[0][2] = aux1;
    ladoB[2][2] = aux2;
    ladoB[2][0] = aux3;

    // meios    
    aux1 = ladoB[0][1];
    aux2 = ladoB[1][2];
    aux3 = ladoB[2][1];
    aux4 = ladoB[1][0];
    
    ladoB[0][1] = aux4;
    ladoB[1][2] = aux1;
    ladoB[2][1] = aux2;
    ladoB[1][0] = aux3;

    aux1 = ladoL[1][0];
    aux2 = ladoU[0][1];
    aux3 = ladoR[1][2];
    aux4 = ladoD[2][1];

    ladoL[1][0] = aux2;
    ladoU[0][1] = aux3;
    ladoR[1][2] = aux4;
    ladoD[2][1] = aux1;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoB1() {
    // quinas
    aux1 = ladoL[0][0];
    aux2 = ladoU[0][2];
    aux3 = ladoR[2][2];
    aux4 = ladoD[2][0];

    ladoL[0][0] = aux4;
    ladoU[0][2] = aux1;
    ladoR[2][2] = aux2;
    ladoD[2][0] = aux3;

    aux1 = ladoL[2][0];
    aux2 = ladoU[0][0];
    aux3 = ladoR[0][2];
    aux4 = ladoD[2][2];

    ladoL[2][0] = aux4;
    ladoU[0][0] = aux1;
    ladoR[0][2] = aux2;
    ladoD[2][2] = aux3;

    aux1 = ladoB[0][0];
    aux2 = ladoB[0][2];
    aux3 = ladoB[2][2];
    aux4 = ladoB[2][0];

    ladoB[0][0] = aux2;
    ladoB[0][2] = aux3;
    ladoB[2][2] = aux4;
    ladoB[2][0] = aux1;

    // meios    
    aux1 = ladoB[0][1];
    aux2 = ladoB[1][2];
    aux3 = ladoB[2][1];
    aux4 = ladoB[1][0];
    
    ladoB[0][1] = aux2;
    ladoB[1][2] = aux3;
    ladoB[2][1] = aux4;
    ladoB[1][0] = aux1;

    aux1 = ladoL[1][0];
    aux2 = ladoU[0][1];
    aux3 = ladoR[1][2];
    aux4 = ladoD[2][1];

    ladoL[1][0] = aux4;
    ladoU[0][1] = aux1;
    ladoR[1][2] = aux2;
    ladoD[2][1] = aux3;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoB2() {

    movimentoB();
    movimentoB();
}


function movimentoU1() {
    // quinas
    aux1 = ladoL[0][0];
    aux2 = ladoB[0][0];
    aux3 = ladoR[0][0];
    aux4 = ladoF[0][0];

    ladoL[0][0] = aux2;
    ladoB[0][0] = aux3;
    ladoR[0][0] = aux4;
    ladoF[0][0] = aux1;

    aux1 = ladoL[0][2];
    aux2 = ladoB[0][2];
    aux3 = ladoR[0][2];
    aux4 = ladoF[0][2];

    ladoL[0][2] = aux2;
    ladoB[0][2] = aux3;
    ladoR[0][2] = aux4;
    ladoF[0][2] = aux1;

    aux1 = ladoU[2][2];
    aux2 = ladoU[2][0];
    aux3 = ladoU[0][0];
    aux4 = ladoU[0][2];

    ladoU[2][2] = aux2;
    ladoU[2][0] = aux3;
    ladoU[0][0] = aux4;
    ladoU[0][2] = aux1;

    // meios    
    aux1 = ladoU[0][1];
    aux2 = ladoU[1][2];
    aux3 = ladoU[2][1];
    aux4 = ladoU[1][0];
    
    ladoU[0][1] = aux2;
    ladoU[1][2] = aux3;
    ladoU[2][1] = aux4;
    ladoU[1][0] = aux1;

    aux1 = ladoL[0][1];
    aux2 = ladoB[0][1];
    aux3 = ladoR[0][1];
    aux4 = ladoF[0][1];

    ladoL[0][1] = aux2;
    ladoB[0][1] = aux3;
    ladoR[0][1] = aux4;
    ladoF[0][1] = aux1;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoU() {
    // quinas
    aux1 = ladoL[0][0];
    aux2 = ladoB[0][0];
    aux3 = ladoR[0][0];
    aux4 = ladoF[0][0];

    ladoL[0][0] = aux4;
    ladoB[0][0] = aux1;
    ladoR[0][0] = aux2;
    ladoF[0][0] = aux3;

    aux1 = ladoL[0][2];
    aux2 = ladoB[0][2];
    aux3 = ladoR[0][2];
    aux4 = ladoF[0][2];

    ladoL[0][2] = aux4;
    ladoB[0][2] = aux1;
    ladoR[0][2] = aux2;
    ladoF[0][2] = aux3;

    aux1 = ladoU[2][2];
    aux2 = ladoU[2][0];
    aux3 = ladoU[0][0];
    aux4 = ladoU[0][2];

    ladoU[2][2] = aux4;
    ladoU[2][0] = aux1;
    ladoU[0][0] = aux2;
    ladoU[0][2] = aux3;

    // meios    
    aux1 = ladoU[0][1];
    aux2 = ladoU[1][2];
    aux3 = ladoU[2][1];
    aux4 = ladoU[1][0];
    
    ladoU[0][1] = aux4;
    ladoU[1][2] = aux1;
    ladoU[2][1] = aux2;
    ladoU[1][0] = aux3;

    aux1 = ladoL[0][1];
    aux2 = ladoB[0][1];
    aux3 = ladoR[0][1];
    aux4 = ladoF[0][1];

    ladoL[0][1] = aux4;
    ladoB[0][1] = aux1;
    ladoR[0][1] = aux2;
    ladoF[0][1] = aux3;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoU2() {

    movimentoU();
    movimentoU();
}

function movimentoD1() {
    // quinas
    aux1 = ladoL[2][2];
    aux2 = ladoB[2][2];
    aux3 = ladoR[2][2];
    aux4 = ladoF[2][2];

    ladoL[2][2] = aux4;
    ladoB[2][2] = aux1;
    ladoR[2][2] = aux2;
    ladoF[2][2] = aux3;

    aux1 = ladoL[2][0];
    aux2 = ladoB[2][0];
    aux3 = ladoR[2][0];
    aux4 = ladoF[2][0];

    ladoL[2][0] = aux4;
    ladoB[2][0] = aux1;
    ladoR[2][0] = aux2;
    ladoF[2][0] = aux3;

    aux1 = ladoD[2][2];
    aux2 = ladoD[2][0];
    aux3 = ladoD[0][0];
    aux4 = ladoD[0][2];

    ladoD[2][2] = aux2;
    ladoD[2][0] = aux3;
    ladoD[0][0] = aux4;
    ladoD[0][2] = aux1;

    // meios    
    aux1 = ladoD[0][1];
    aux2 = ladoD[1][2];
    aux3 = ladoD[2][1];
    aux4 = ladoD[1][0];
    
    ladoD[0][1] = aux2;
    ladoD[1][2] = aux3;
    ladoD[2][1] = aux4;
    ladoD[1][0] = aux1;

    aux1 = ladoL[2][1];
    aux2 = ladoB[2][1];
    aux3 = ladoR[2][1];
    aux4 = ladoF[2][1];

    ladoL[2][1] = aux4;
    ladoB[2][1] = aux1;
    ladoR[2][1] = aux2;
    ladoF[2][1] = aux3;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoD() {
    // quinas
    aux1 = ladoL[2][2];
    aux2 = ladoB[2][2];
    aux3 = ladoR[2][2];
    aux4 = ladoF[2][2];

    ladoL[2][2] = aux2;
    ladoB[2][2] = aux3;
    ladoR[2][2] = aux4;
    ladoF[2][2] = aux1;

    aux1 = ladoL[2][0];
    aux2 = ladoB[2][0];
    aux3 = ladoR[2][0];
    aux4 = ladoF[2][0];

    ladoL[2][0] = aux2;
    ladoB[2][0] = aux3;
    ladoR[2][0] = aux4;
    ladoF[2][0] = aux1;

    aux1 = ladoD[2][2];
    aux2 = ladoD[2][0];
    aux3 = ladoD[0][0];
    aux4 = ladoD[0][2];

    ladoD[2][2] = aux4;
    ladoD[2][0] = aux1;
    ladoD[0][0] = aux2;
    ladoD[0][2] = aux3;

    // meios    
    aux1 = ladoD[0][1];
    aux2 = ladoD[1][2];
    aux3 = ladoD[2][1];
    aux4 = ladoD[1][0];
    
    ladoD[0][1] = aux4;
    ladoD[1][2] = aux1;
    ladoD[2][1] = aux2;
    ladoD[1][0] = aux3;

    aux1 = ladoL[2][1];
    aux2 = ladoB[2][1];
    aux3 = ladoR[2][1];
    aux4 = ladoF[2][1];

    ladoL[2][1] = aux2;
    ladoB[2][1] = aux3;
    ladoR[2][1] = aux4;
    ladoF[2][1] = aux1;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

function movimentoD2() {

    movimentoD();
    movimentoD();
}

// inicio testes

let movimentoX = function () {
    // quinas
    aux1 = ladoL[0][0];
    aux2 = ladoU[0][2];
    aux3 = ladoR[2][2];
    aux4 = ladoD[2][0];

    ladoL[0][0] = aux2;
    ladoU[0][2] = aux3;
    ladoR[2][2] = aux4;
    ladoD[2][0] = aux1;

    aux1 = ladoL[2][0];
    aux2 = ladoU[0][0];
    aux3 = ladoR[0][2];
    aux4 = ladoD[2][2];

    ladoL[2][0] = aux2;
    ladoU[0][0] = aux3;
    ladoR[0][2] = aux4;
    ladoD[2][2] = aux1;

    aux1 = ladoB[0][0];
    aux2 = ladoB[0][2];
    aux3 = ladoB[2][2];
    aux4 = ladoB[2][0];

    ladoB[0][0] = aux4;
    ladoB[0][2] = aux1;
    ladoB[2][2] = aux2;
    ladoB[2][0] = aux3;

    // meios    
    aux1 = ladoB[0][1];
    aux2 = ladoB[1][2];
    aux3 = ladoB[2][1];
    aux4 = ladoB[1][0];
    
    ladoB[0][1] = aux4;
    ladoB[1][2] = aux1;
    ladoB[2][1] = aux2;
    ladoB[1][0] = aux3;

    aux1 = ladoL[1][0];
    aux2 = ladoU[0][1];
    aux3 = ladoR[1][2];
    aux4 = ladoD[2][1];

    ladoL[1][0] = aux2;
    ladoU[0][1] = aux3;
    ladoR[1][2] = aux4;
    ladoD[2][1] = aux1;

    minhaFace(ladoL, 25, 120, 50, 145, 75, 170, 25, 25);
    minhaFace(ladoF, 107, 120, 132, 145, 157, 170, 25, 25);
    minhaFace(ladoR, 189, 120, 214, 145, 239, 170, 25, 25);
    minhaFace(ladoB, 271, 120, 296, 145, 321, 170, 25, 25);
    minhaFace(ladoU, 107, 38, 132, 63, 157, 88, 25, 25);
    minhaFace(ladoD, 107, 202, 132, 227, 157, 252, 25, 25);
    
}

// fim testes

/* cuboResolvido(); */ 

cuboResolvido();
scrambler();