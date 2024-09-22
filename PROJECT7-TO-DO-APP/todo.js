let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul"); // Create a list item instead of ul
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        
        // Add event listener to the trash icon for removing the task
        newEle.querySelector("i").addEventListener("click", remove);
        
        function remove(){
            newEle.remove();
        }
    }
}