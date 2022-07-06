const [input1, input2] = document.querySelectorAll("input");
const btn = document.querySelector(".seta");


function habilitar(){
    if(input1.value && input2.value.length >= 8){
        btn.removeAttribute("disabled");
    }else{
        btn.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", habilitar);
input2.addEventListener("input", habilitar);