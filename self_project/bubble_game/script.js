let score = 0
const startBtn = document.getElementById('startBtn');//button to start timer

function increaseScore() {
    score += 10
    document.querySelector("#scoreBoard").textContent = score
}

function showRandomNumToHit() {
    let rn = Math.floor(Math.random()*10)
    document.querySelector('#hitValue').textContent = rn
};showRandomNumToHit()


function makeBubble() {
let bubbleAtStart = ""
totalNumberOfBubbles = 72
for (let i = 1; i <= totalNumberOfBubbles; i++) {
    // val = val + 1 
    const rn = Math.floor(Math.random()*10)  // randome decimal number lekr usko one digit me dega
    bubbleAtStart += `<div id="bubble" class="bubble"> ${rn} </div>`    // bubbles adding to variable
}

document.querySelector('#pbottom').innerHTML = bubbleAtStart;  //adding to pages
}
makeBubble();


function runTimer() {
    let Timer = 60;
    const finalTimer = setInterval(() => {
        if (Timer > 0) {
            startBtn.style.display  = "none"
            Timer--
            document.querySelector('#Timer').textContent = Timer
        } else{
            clearInterval(finalTimer)
            document.querySelector('#pbottom').innerHTML = `<div id="game-over" class="game-over">
            <h1>GAME OVER</h1>
            <p>YOUR SCORE  : ${score}</p>
        </div>`
        startBtn.style.display = "flex"
        }
    }, 1000);
    showRandomNumToHit()
}
startBtn.addEventListener("click",runTimer)

document.querySelector('#pbottom').addEventListener("click", (bDetails)=>{
    let hittedBubbleValue = Number(bDetails.target.textContent)
    const valueToHit = document.querySelector('#hitValue').textContent
    if(hittedBubbleValue === Number(valueToHit) ){
        increaseScore()
        showRandomNumToHit()
        makeBubble()
    }
})



