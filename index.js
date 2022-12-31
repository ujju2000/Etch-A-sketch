const container = document.querySelector('.container');
const gridNum = document.querySelector('.grid-num');

// 16 x 16 boxes 


// console.log(num);
changeGridSize(4);
// for(let i =0;i< 16;i++){
//     let row = document.createElement(`div`);
//     row.setAttribute('class','row');


//     for(let j =0;j < 16;j++){
        
//         let box = document.createElement('div');
//         box.setAttribute('class','box')
//         row.appendChild(box);
//     }

//     container.appendChild(row);
// }
let num = parseInt(gridNum.value);

function changeGridSize(num){
    
    for(let i =0;i< num;i++){
        let row = document.createElement(`div`);
        row.setAttribute('class','row');
    
    
        for(let j =0;j < num;j++){
            
            let box = document.createElement('div');
            box.setAttribute('class','box')
            row.appendChild(box);
        }
    
        container.appendChild(row);
    }
}