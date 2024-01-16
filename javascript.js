//  container div
const container = document.querySelector(".container")

//  divStack for all 16 divs inside
const divStack = document.createElement("div")
divStack.className= "divStack";
container.appendChild(divStack)


//  from here on , I will append for each 16 squares a function 

//  1 for each 16
const div1= document.createElement("div")  
div1.className = "div1";
divStack.appendChild(div1)
// appending function 1 of 16
const functionBox1 = document.createElement("p");
functionBox1.textContent = (sixteenBySixteen1());
div1.appendChild(functionBox1)


//  2 div of 16
const div2 = document.createElement("div");
div2.className = "div2";
divStack.appendChild(div2)
//  function
const functionBox2 = document.createElement("p");
functionBox2.textContent = (sixteenBySixteen2());
div2.appendChild(functionBox2)


//  3 div of 16
const div3 = document.createElement("div");
div3.className = "div3";
divStack.appendChild(div3)
//  function
const functionBox3 = document.createElement("p");
functionBox3.textContent = (sixteenBySixteen3());
div3.appendChild(functionBox3)


//  4 div of 16
const div4 = document.createElement("div");
div4.className = "div4";
divStack.appendChild(div4)
//  function
const functionBox4 = document.createElement("p");
functionBox4.textContent = (sixteenBySixteen4());
div4.appendChild(functionBox4)


//  5 div of 16
const div5 = document.createElement("div");
div5.className = "div5";
divStack.appendChild(div5)
//  function
const functionBox5 = document.createElement("p");
functionBox5.textContent = (sixteenBySixteen5());
div5.appendChild(functionBox5)

//  6 div of 16
const div6 = document.createElement("div");
div6.className = "div6";
divStack.appendChild(div6)
//  function
const functionBox6 = document.createElement("p");
functionBox6.textContent = (sixteenBySixteen6());
div6.appendChild(functionBox6);

//  7 div of 16
const div7 = document.createElement("div");
div7.className = "div7";
divStack.appendChild( div7)
//  function
const functionBox7 = document.createElement("p");
functionBox7.textContent = (sixteenBySixteen7());
div7.appendChild(functionBox7)

//  8 div of 16
const div8 = document.createElement("div");
div8.className = "div8";
divStack.appendChild( div8)
//  function
const functionBox8 = document.createElement("p");
functionBox8.textContent = (sixteenBySixteen8());
div8.appendChild(functionBox8)

//  9 div of 16
const div9 = document.createElement("div");
div9.className = "div9";
divStack.appendChild(div9)
//  function
const functionBox9 = document.createElement("p");
functionBox9.textContent = (sixteenBySixteen9());
div9.appendChild(functionBox9)

//  10 div of 16
const div10 = document.createElement("div");
div10.className = "div10";
divStack.appendChild(div10)
//  function
const functionBox10= document.createElement("p");
functionBox10.textContent = (sixteenBySixteen10());
div10.appendChild(functionBox10)

//  11 div of 16
const div11 = document.createElement("div");
div11.className = "div11";
divStack.appendChild(div11)
//  function
const functionBox11 = document.createElement("p");
functionBox11.textContent = (sixteenBySixteen11());
div11.appendChild(functionBox11)

//  12 div of 16
const div12 = document.createElement("div");
div12.className = "div12";
divStack.appendChild(div12)
//  function
const functionBox12 = document.createElement("p");
functionBox12.textContent = (sixteenBySixteen12());
div12.appendChild(functionBox12)

//  13 div of 16
const div13 = document.createElement("div");
div13.className = "div13";
divStack.appendChild(div13)
//  function
const functionBox13 = document.createElement("p");
functionBox13.textContent = (sixteenBySixteen13());
div13.appendChild(functionBox13)

//  14 div of 16
const div14 = document.createElement("div");
div14.className = "div14";
divStack.appendChild(div14)
//  function
const functionBox14 = document.createElement("p");
functionBox14.textContent = (sixteenBySixteen14());
div14.appendChild(functionBox14)

//  15 div of 16
const div15 = document.createElement("div");
div15.className = "div15";
divStack.appendChild(div15)
//  function
const functionBox15 = document.createElement("p");
functionBox15.textContent = (sixteenBySixteen15());
div15.appendChild(functionBox15)

//  16 div of 16
const div16 = document.createElement("div");
div16.className = "div16";
divStack.appendChild(div16)
//  function
const functionBox16 = document.createElement("p");
functionBox16.textContent = (sixteenBySixteen16());
div16.appendChild(functionBox16)


// function1
function sixteenBySixteen1(){

    for(let i = 1 ; i <= 16; i++ ){
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div1.appendChild(boxElement);
      
        }
    }


// function2
function sixteenBySixteen2(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div2.appendChild(boxElement);

        }
    }


// function3
function sixteenBySixteen3(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div3.appendChild(boxElement);

        }
    }

// function4
function sixteenBySixteen4(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div4.appendChild(boxElement);

        }
    }

// function5
function sixteenBySixteen5(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div5.appendChild(boxElement);

        }
    }

// function6
function sixteenBySixteen6(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div6.appendChild(boxElement);

        }
    }

// function7
function sixteenBySixteen7(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div7.appendChild(boxElement);

        }
    }

// function8
function sixteenBySixteen8(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div8.appendChild(boxElement);

        }
    }
// function9
function sixteenBySixteen9(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div9.appendChild(boxElement);

        }
    }

// function10
function sixteenBySixteen10(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div10.appendChild(boxElement);

        }
    }


// function11
function sixteenBySixteen11(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div11.appendChild(boxElement);

        }
    }

// function12
function sixteenBySixteen12(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div12.appendChild(boxElement);

        }
    }

// function13
function sixteenBySixteen13(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div13.appendChild(boxElement);

        }
    }


// function14
function sixteenBySixteen14(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div14.appendChild(boxElement);

        }
    }

// function15
function sixteenBySixteen15(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div15.appendChild(boxElement);

        }
    }

// function16
function sixteenBySixteen16(){

    for(let i = 1 ; i <= 16; i++ ){
       
        const boxElement = document.createElement("p");
        boxElement.className = "box";
        boxElement.style.backgroundColor = "red";
        boxElement.style.width = "30px";
        boxElement.style.height= "30px";
        boxElement.style.margin = "1px";
        div16.appendChild(boxElement);

        }
    }










































// // first div of 16
// const firstDiv = document.createElement("div");
// firstDiv.className = "first";
// container.appendChild(firstDiv)
// appending 16 square function

// // second div of 16
// const secondDiv = document.createElement("div");
// secondDiv.className = "second";
// container.appendChild(secondDiv)
// // appending 16 square function
// const functionBox1 = document.createElement("p");
// functionBox1.textContent = (sixteenBySixteen1());
// secondDiv.appendChild(functionBox1);





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




