const container = document.querySelector(".container")
// // first div of 16
// const firstDiv = document.createElement("div");
// firstDiv.className = "first";
// container.appendChild(firstDiv)
// appending 16 square function
const divStack = document.createElement("div")
divStack.className= "divStack";
container.appendChild(divStack)
const functionBox = document.createElement("p");
functionBox.textContent = (sixteenBySixteen());
divStack.appendChild(functionBox);




// // second div of 16
// const secondDiv = document.createElement("div");
// secondDiv.className = "second";
// container.appendChild(secondDiv)
// // appending 16 square function
// const functionBox1 = document.createElement("p");
// functionBox1.textContent = (sixteenBySixteen1());
// secondDiv.appendChild(functionBox1);


// firstBox.textContent = "box 1"
// firstBox.style.backgroundColor = "red"
// firstBox.className = "box"
// firstBox.style.width = "30px";
// firstBox.style.height= "30px";
// container.appendChild(firstBox);
// console.log(firstBox);
 // document.getElementById("myBtn").style.width = "300px";


function sixteenBySixteen(){

    for(let i = 1 ; i < 257; i++ ){

        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        divStack.appendChild(boxElement);
      
       
        if(i % 16 === 0){
            // add to a div
   
               //  add a line breaker
            const lineBreak = document.createElement("br");
            divStack.appendChild(lineBreak);
            const newDiv = document.createElement("div");
            divStack.appendChild(newDiv);
        }


    }
}


// function sixteenBySixteen1(){

//     for(let i = 1 ; i < 17; i++ ){
//         const boxElement1 = document.createElement("p");
//         boxElement1.className = "box1";
//         boxElement1.style.backgroundColor = "black";
//         boxElement1.style.width = "30px";
//         boxElement1.style.height= "30px";
//         boxElement1.style.margin = "1px";
//         secondDiv.appendChild(boxElement1);
//     }
// }

// console.log(firstDiv.className)