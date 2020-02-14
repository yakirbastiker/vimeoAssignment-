let btn1 = document.querySelector("#step-1");
let btn2 = document.querySelector("#step-2");
let btn3 = document.querySelector("#step-3");
let btn4 = document.querySelector("#step-4");

let bg = document.querySelector('.bg');
let text = document.querySelector(".bg-yellow ");
let text2 = document.querySelector(".bg-orange");

let row1text = "Let's go get it!";
let row2text = "Second row";
let row3text = "It's the last one!!";

//Animation btn1
btn1.addEventListener('click', () => {

    setTimeout(()=> {
        text2.style.animation ="text 3s linear";
        text2.style.width = "100%";  
    },1000);
    
});

//Animation btn2
btn2.addEventListener('click', () => {

    setTimeout(()=> {
        text2.style.animation ="text 2s linear";
        text2.style.width = "100%";
    },1000);


    setTimeout(()=>{
        text.style.position  = "relative";
        text.style.zIndex  = "2";
        text.style.animation = "text 2s linear";
    },4000);
});


//Animation btn3
btn3.addEventListener('click', ()=> {

    text2.style.animation ="text 2s linear";
    text2.style.width = "100%";

    setTimeout(()=>{
        text.style.position  = "relative";
        text.style.zIndex  = "2";
        text.style.animation = "text 1s linear";
    },1900);

    setTimeout(()=>{

        let elOrange = el(row1text, "orange");
        text.style.zIndex  = "1";
        elOrange.style.zIndex  = "3";
        bg.appendChild(elOrange);
        elOrange.style.animation = "text 1s linear";
        elOrange.style.width = "100%";
    },2900);



    setTimeout(()=>{
        let hider = el(row1text, "hider"); 
        bg.appendChild(hider);
        hider.style.zIndex  = "3";
        hider.style.animation = "text 1s linear";
        hider.style.width = "100%";
    },3900);

});


//Animation btn4  

btn4.addEventListener("click", () => {
    // row 1 start
    text2.style.animation ="text 1s linear";
    text2.style.width = "100%";

    // row 1 to orange
    setTimeout(() => {
        text.style.position  = "relative";
        text.style.zIndex  = "3";
        text.style.animation = "text 1s linear";
    },900);

    // row 2 start

    setTimeout(() =>{
        let row2 = el(row2text, "row2");
        text.style.zIndex  = "1";
        row2.style.zIndex  = "3";
        bg.appendChild(row2);

        row2.style.animation = "text 1s linear";
    },1000);

    // row 2 to orange
    setTimeout(() =>{
        let row2 = el(row2text, "row2");
        row2.style.backgroundColor = "#E98402";
        row2.style.color = "#F7F60E";
        row2.style.zIndex  = "4";
        bg.appendChild(row2);

        row2.style.animation = "text 1s linear";
    },1900);

    //row 3 start
    setTimeout(() => {
        let row3 =el(row3text,"row3");
        row3.style.zIndex  = "2";
        bg.appendChild(row3);
        row3.style.animation = "text 1s linear";
        row3.style.width = "100%";
    },2800);

    // row 3 to orange
    setTimeout(() => {
        let row3 =el(row3text,"row3");
        row3.style.zIndex  = "2";
        row3.style.backgroundColor = "#E98402";
        row3.style.color = "#F7F60E";
        bg.appendChild(row3);

        row3.style.animation = "text 1s linear";
        row3.style.width = "100%";
    }, 3700);

    //row1 to yellow

    setTimeout(() => {
        let row1 = el(row1text, "yellow");
        row1.classList.add("posEL");
        row1.style.zIndex = "3";
        bg.appendChild(row1);
        row1.style.animation = "text 1s linear";
        row1.style.width = "100%";
    },3800);

    //remove row 1
    setTimeout(() => {
        let hider = el(row1text, "hider"); 

        bg.appendChild(hider);
        hider.style.zIndex  = "4";
        hider.style.animation = "text 1s linear";
        hider.style.width = "100%";
    },4100);

    //row 2 to yellow

    setTimeout(()=> {
        let row2 = el(row2text, "row2");
        text.style.zIndex  = "1";
        row2.style.zIndex  = "4";
        bg.appendChild(row2);

        row2.style.animation = "text 1s linear";
    },5000);

    //remove row 2 

    setTimeout(()=> {
        let hider = el(row1text, "hider"); 
        hider.classList.remove("posEL");
        hider.classList.add("row2");
        bg.appendChild(hider);
        hider.style.zIndex  = "5";
        hider.style.animation = "text 1s linear";
        hider.style.width = "100%";
    }, 5400);

    //row3 to yellow 
    setTimeout(() => {
        let row3 =el(row3text,"row3");
        row3.style.zIndex  = "4";
        bg.appendChild(row3);
        row3.style.animation = "text 1s linear";
        row3.style.width = "100%";
    },6300);

    //remove row3
    setTimeout (() => {
        let hider = el(row1text, "hider"); 
        hider.classList.remove("posEL");
        hider.classList.add("row3");
        bg.appendChild(hider);
        hider.style.zIndex  = "5";
        hider.style.animation = "text 1s linear";
        hider.style.width = "100%";
    },6700);
});

//create element 
function el(text, color) {
    let el = document.createElement('h1');
    el.innerHTML = text;

    if(color === 'yellow') {
        el.classList.add("text", "bg-yellow"); 
    }
    else if (color === 'orange') {
        el.classList.add("text", "bg-orange", "posEL"); 
    }
    else if(color === "row2"){
        el.classList.add("text", "bg-yellow", "row2");
    }
    else if(color === "row3"){
        el.classList.add("text", "bg-yellow", "row3");
    }
    else {
        el.classList.add("text", "posEL", "newEL"); 
    }

    return el
};