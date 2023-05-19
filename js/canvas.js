//tela da canvas
const telaCubo = document.querySelector('#tela-principal');
const pincel = telaCubo.getContext('2d');
/* pincel.fillStyle = '#f1f1f1' */
/* pincel.fillRect(0, 0, 400, 320); */


 
// DECLARANDO A MATRIZES PADRÃO DAS FACE DO CUBO
let ladoL = new Array(3);
// LARANJA
ladoL[0] = new Array(3);
ladoL[1] = new Array(3);
ladoL[2] = new Array(3);

let ladoF = new Array(3);
// VERDE
ladoF[0] = new Array(3);
ladoF[1] = new Array(3);
ladoF[2] = new Array(3);

let ladoR = new Array(3);
// VERMELHO
ladoR[0] = new Array(3);
ladoR[1] = new Array(3);
ladoR[2] = new Array(3);

let ladoB = new Array(3);
// BLUE
ladoB[0] = new Array(3);
ladoB[1] = new Array(3);
ladoB[2] = new Array(3);

let ladoU = new Array(3);
// WHITE
ladoU[0] = new Array(3);
ladoU[1] = new Array(3);
ladoU[2] = new Array(3);

let ladoD = new Array(3);
// YELLOW
ladoD[0] = new Array(3);
ladoD[1] = new Array(3);
ladoD[2] = new Array(3);



// função de teste

function minhaFace(array, x1, y1, x2, y2, x3, y3, lag1, alt1) {

    // x1, y1, lag1, alt1
    if (array[0][0] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);

    } else if (array[0][0] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);

    } else if (array[0][0] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);

    } else if (array[0][0] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);

    } else if (array[0][0] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);
        
    } else if (array[0][0] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);

    } else if (array[0][0] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y1, lag1, alt1);
        pincel.strokeRect(x1, y1, lag1, alt1);
    } 

    // x2, y1, lag1, alt1
    if (array[0][1] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
        
    } else if (array[0][1] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
            
    } else if (array[0][1] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
            
    } else if (array[0][1] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
            
    } else if (array[0][1] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
            
    } else if (array[0][1] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
    
    } else if (array[0][1] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y1, lag1, alt1);
        pincel.strokeRect(x2, y1, lag1, alt1);
    } 

    // x3, y1, lag1, alt1
    if (array[0][2] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
            
    } else if (array[0][2] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
                
    } else if (array[0][2] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
                
    } else if (array[0][2] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
                
    } else if (array[0][2] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
                
    } else if (array[0][2] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);

    } else if (array[0][2] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y1, lag1, alt1);
        pincel.strokeRect(x3, y1, lag1, alt1);
    } 


    // x1, y2, lag1, alt1
    if (array[1][0] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
            
    } else if (array[1][0] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
                
    } else if (array[1][0] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
                
    } else if (array[1][0] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
                
    } else if (array[1][0] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
                
    } else if (array[1][0] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);

    } else if (array[1][0] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y2, lag1, alt1);
        pincel.strokeRect(x1, y2, lag1, alt1);
    } 
    
    // x2, y2, lag1, alt1 
    if (array[1][1] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
        
    } else if (array[1][1] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
            
    } else if (array[1][1] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
            
    } else if (array[1][1] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
            
    } else if (array[1][1] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
            
    } else if (array[1][1] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
    
    } else if (array[1][1] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y2, lag1, alt1);
        pincel.strokeRect(x2, y2, lag1, alt1);
    } 

    // x3, y2, lag1, alt1 
    if (array[1][2] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
        
    } else if (array[1][2] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
            
    } else if (array[1][2] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
            
    } else if (array[1][2] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
            
    } else if (array[1][2] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
            
    } else if (array[1][2] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
    
    } else if (array[1][2] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y2, lag1, alt1);   
        pincel.strokeRect(x3, y2, lag1, alt1);
    } 

    // x1, y3, lag1, alt1 
    if (array[2][0] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
        
    } else if (array[2][0] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
            
    } else if (array[2][0] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
            
    } else if (array[2][0] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
            
    } else if (array[2][0] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
            
    } else if (array[2][0] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
    
    } else if (array[2][0] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x1, y3, lag1, alt1);
        pincel.strokeRect(x1, y3, lag1, alt1);
    } 

    // x2, y3, lag1, alt1 
    if (array[2][1] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
        
    } else if (array[2][1] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
            
    } else if (array[2][1] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
            
    } else if (array[2][1] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
            
    } else if (array[2][1] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
            
    } else if (array[2][1] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
    
    } else if (array[2][1] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x2, y3, lag1, alt1);
        pincel.strokeRect(x2, y3, lag1, alt1);
    } 

    // x3, y3, lag1, alt1 
    if (array[2][2] === 1) {
        pincel.fillStyle = 'orange';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
        
    } else if (array[2][2] === 2) {
        pincel.fillStyle = 'green';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
            
    } else if (array[2][2] === 3) {
        pincel.fillStyle = 'red';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
            
    } else if (array[2][2] === 4) {
        pincel.fillStyle = 'blue';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
            
    } else if (array[2][2] === 5) {
        pincel.fillStyle = 'white';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
            
    } else if (array[2][2] === 6) {
        pincel.fillStyle = 'yellow';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);

    } else if (array[2][2] === 7) {
        pincel.fillStyle = 'gray';
        pincel.fillStroke = 'black';
        pincel.fillRect(x3, y3, lag1, alt1);   
        pincel.strokeRect(x3, y3, lag1, alt1);
    }   
}
 