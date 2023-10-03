let input=document.getElementById("inp");
let text=document.querySelector(".text");
function Add(){
    if(inputs.value==""){
        alert("please enter task");
    }else{
        let newfile= document.createElement("ul");
        newEle.innerHTML=`${input.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newWlw.remove();
        }
    }
}