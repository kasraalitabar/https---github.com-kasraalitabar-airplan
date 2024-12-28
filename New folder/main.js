const boxes = document.querySelectorAll(".box-items");
const selectedBoxes = [];
let section
let matchCount =0
const refreshBtn = document.getElementById("refresh");



function boxclick(evt) {
    if (selectedBoxes.length === 0) {
        evt.target.classList.remove("hidden")
        selectedBoxes.push(evt.target)
    } else {
        evt.target.classList.remove("hidden");
        selectedBoxes.push(evt.target);
        if (selectedBoxes[0].innerHTML === selectedBoxes[1].innerHTML) {
            selectedBoxes[0].classList.add("matched");
            selectedBoxes[1].classList.add("matched");
            selectedBoxes.length = 0;
            matchCount++
            if(matchCount ===8){
                setTimeout(function() { alert("you won restart the game"); }, 1000);
            }
            
        } else {
            freez()
            setTimeout(function () {
                selectedBoxes[0].classList.add("hidden");
                selectedBoxes[1].classList.add("hidden");
                selectedBoxes.length = 0;
                unfreez()
            }, 1000)
        }
    }
}

function freez() {
    for (const box of boxes) {
        box.classList.add("freeze")
    }
}
function unfreez() {
    for (const box of boxes) {
        box.classList.remove("freeze")
    }
}

function hideALL() {
    for (const box of boxes) {
        box.classList.add("hidden")

    }
}

setTimeout(()=>{
    hideALL();
    
},2000)

for (const box of boxes) {
    box.addEventListener("click", boxclick)
}
function shuffle(){
    const parent = document.querySelector('.allin');
    const arr = Array.from(parent.children);
    const shuffled = arr.sort(() => Math.random()- 0.5);
    parent.innerHTML ='';
    shuffled.forEach(box =>parent.appendChild(box));
}
window.onload=function(){
    shuffle();
}
function reload(){
    window.location.reload();
}
refreshBtn.addEventListener("click",reload)

