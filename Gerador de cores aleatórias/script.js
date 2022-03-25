const btn=document.getElementById("btn");
const body=document.body;
const hexa=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const color=document.getElementById("color");
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        changeColor();
    }
});

btn.addEventListener("click",changeColor)
    
    
    
    
function changeColor(){
    let numHexa1=hexa[Math.round(Math.random()*15)];
    let numHexa2=hexa[Math.round(Math.random()*15)];    
    let numHexa3=hexa[Math.round(Math.random()*15)];
    let numHexa4=hexa[Math.round(Math.random()*15)];
    let numHexa5=hexa[Math.round(Math.random()*15)];
    let numHexa6=hexa[Math.round(Math.random()*15)];
    color.value=`#${numHexa1+numHexa2+numHexa3+numHexa4+numHexa5+numHexa6}`
    body.style.backgroundColor=`#${numHexa1+numHexa2+numHexa3+numHexa4+numHexa5+numHexa6}`
    btn.style.backgroundColor=`#${numHexa1+numHexa2+numHexa3+numHexa4+numHexa5+numHexa6}`
}