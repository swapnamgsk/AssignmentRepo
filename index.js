let btn = document.querySelector(".btn")
btn.onclick = function (){
    for(let i =1;i<=5;i++){
    let div = document.createElement("div")
    div.innerText = `div ${i + 1}`
    div.setAttribute.class("Div");
    body.append(div)

}

}
