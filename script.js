/*const inputBox = document.getElementById("input-box");
const  listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ''){
        alert("yoou must write something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.Value ;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
     listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
*/

let input = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
    alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
      
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);
 }
 input.value='';
}


